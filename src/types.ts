export interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

export interface PaymentData {
  method: string
  amount: number
  items: CartItem[]
  timestamp: string
}

export interface PaymentResult {
  success: boolean
  message: string
  transactionId: string | null
}

// Electron API types
declare global {
  interface Window {
    electronAPI?: {
      generateQRCode: (data: any) => Promise<string | null>
      processPayment: (paymentData: any) => Promise<PaymentResult>
      minimizeWindow: () => Promise<void>
      closeWindow: () => Promise<void>
    }
  }
} 