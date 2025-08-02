import { app, BrowserWindow, ipcMain } from 'electron'
import path from 'path'
import QRCode from 'qrcode'

let mainWindow: BrowserWindow | null = null

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    },
    resizable: false,
    frame: false,
    titleBarStyle: 'hidden',
    icon: path.join(__dirname, 'assets', 'icon.png')
  })

  // Load the app
  if (process.env.IS_DEV) {
    // In development, load from Vite dev server on port 5173
    mainWindow.loadURL('http://localhost:5173')
    mainWindow.webContents.openDevTools()
  } else {
    // In production, load from built files
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'))
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// IPC handlers
ipcMain.handle('generate-qr-code', async (event, data: any) => {
  try {
    const qrCodeDataUrl = await QRCode.toDataURL(JSON.stringify(data))
    return qrCodeDataUrl
  } catch (error) {
    console.error('Error generating QR code:', error)
    return null
  }
})

ipcMain.handle('process-payment', async (event, paymentData: any) => {
  // Simulate payment processing
  return new Promise((resolve) => {
    setTimeout(() => {
      const success = Math.random() > 0.3 // 70% success rate
      resolve({
        success,
        message: success ? 'Payment successful!' : 'Payment failed (Vaileuch)',
        transactionId: success ? `TXN${Date.now()}` : null
      })
    }, 2000)
  })
})

ipcMain.handle('minimize-window', () => {
  if (mainWindow) {
    mainWindow.minimize()
  }
})

ipcMain.handle('close-window', () => {
  if (mainWindow) {
    mainWindow.close()
  }
}) 