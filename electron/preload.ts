import { contextBridge, ipcRenderer } from 'electron'

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
  generateQRCode: (data: any) => ipcRenderer.invoke('generate-qr-code', data),
  processPayment: (paymentData: any) => ipcRenderer.invoke('process-payment', paymentData),
  minimizeWindow: () => ipcRenderer.invoke('minimize-window'),
  closeWindow: () => ipcRenderer.invoke('close-window')
})

// Type definitions for the exposed API
declare global {
  interface Window {
    electronAPI: {
      generateQRCode: (data: any) => Promise<string | null>
      processPayment: (paymentData: any) => Promise<{
        success: boolean
        message: string
        transactionId: string | null
      }>
      minimizeWindow: () => Promise<void>
      closeWindow: () => Promise<void>
    }
  }
} 