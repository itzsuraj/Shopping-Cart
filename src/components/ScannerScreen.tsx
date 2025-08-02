import React, { useState, useEffect } from 'react'
import { ArrowLeft, CreditCard, Smartphone } from 'lucide-react'

interface ScannerScreenProps {
  isActive: boolean
  total: number
  onBack: () => void
  onScanSuccess: () => void
  onManualPayment: () => void
}

const ScannerScreen: React.FC<ScannerScreenProps> = ({ 
  isActive, 
  total, 
  onBack, 
  onScanSuccess, 
  onManualPayment 
}) => {
  const [isProcessing, setIsProcessing] = useState(false)
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string | null>(null)

  useEffect(() => {
    if (isActive) {
      generateQRCode()
    }
  }, [isActive, total])

  const generateQRCode = async () => {
    try {
      // Create UPI payment URL
      const upiUrl = `upi://pay?pa=smartmart@pay&pn=SmartMart&am=${(total * 1.1).toFixed(2)}&cu=INR&tn=Shopping%20Cart%20Payment`
      
      // Generate QR code using the electron API
      const qrDataUrl = await window.electronAPI?.generateQRCode({
        amount: total * 1.1,
        merchant: 'SmartMart',
        upiId: 'smartmart@pay',
        upiUrl: upiUrl
      })
      
      if (qrDataUrl) {
        setQrCodeDataUrl(qrDataUrl)
      } else {
        // Fallback: create a simple QR code placeholder
        setQrCodeDataUrl('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmZmIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzAwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlFSIENvZGU8L3RleHQ+PC9zdmc+')
      }
    } catch (error) {
      console.error('Error generating QR code:', error)
      // Fallback QR code
      setQrCodeDataUrl('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmZmIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzAwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlFSIENvZGU8L3RleHQ+PC9zdmc+')
    }
  }

  const handlePaymentSuccess = () => {
    setIsProcessing(true)
    setTimeout(() => {
      onScanSuccess()
    }, 2000)
  }

  return (
    <div 
      className={`screen ${isActive ? 'active' : ''}`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
        opacity: isActive ? 1 : 0,
        transform: isActive ? 'translateX(0)' : 'translateX(100%)',
        zIndex: 1
      }}
    >
      {/* Header */}
      <div style={{
        background: 'rgba(0,0,0,0.9)',
        color: 'white',
        padding: '15px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 10
      }}>
        <button 
          onClick={onBack}
          style={{
            background: 'rgba(255,255,255,0.2)',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'white'
          }}
        >
          <ArrowLeft size={20} />
        </button>
        <div style={{ fontSize: '18px', fontWeight: 'bold' }}>Merchant QR Code</div>
        <div style={{ width: '40px' }}></div>
      </div>
      
      {/* Content */}
      <div style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}>
        
        {/* Title Section */}
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '25px',
          borderRadius: '15px',
          textAlign: 'center',
          marginBottom: '30px',
          maxWidth: '500px',
          width: '100%'
        }}>
          <div style={{ fontSize: '32px', marginBottom: '10px' }}>🏪</div>
          <h1 style={{ margin: '0 0 10px 0', fontSize: '24px' }}>SmartMart Payment</h1>
          <p style={{ margin: 0, opacity: 0.9, fontSize: '14px' }}>
            Scan this QR code with your UPI app
          </p>
        </div>
        
        {/* Merchant QR Code */}
        <div style={{
          background: 'white',
          border: '2px solid #e9ecef',
          borderRadius: '15px',
          padding: '30px',
          marginBottom: '25px',
          textAlign: 'center',
          maxWidth: '400px',
          width: '100%',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            background: '#f8f9fa',
            border: '2px dashed #dee2e6',
            borderRadius: '10px',
            padding: '20px',
            marginBottom: '20px'
          }}>
            {qrCodeDataUrl ? (
              <img 
                src={qrCodeDataUrl} 
                alt="Payment QR Code" 
                style={{ 
                  width: '200px', 
                  height: '200px',
                  borderRadius: '10px',
                  border: '2px solid #28a745'
                }} 
              />
            ) : (
              <div style={{
                width: '200px',
                height: '200px',
                background: '#f8f9fa',
                border: '2px dashed #dee2e6',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto'
              }}>
                <div style={{ fontSize: '48px' }}>⏳</div>
              </div>
            )}
            <h3 style={{ margin: '15px 0 10px 0', color: '#2c3e50' }}>
              SmartMart Payment QR
            </h3>
            <p style={{ margin: 0, color: '#6c757d', fontSize: '14px' }}>
              Amount: €{(total * 1.1).toFixed(2)} • UPI: smartmart@pay
            </p>
          </div>
          
          <div style={{
            background: '#e3f2fd',
            border: '1px solid #bbdefb',
            borderRadius: '8px',
            padding: '15px',
            marginBottom: '20px'
          }}>
            <p style={{ margin: 0, color: '#1976d2', fontSize: '14px' }}>
              <strong>Test Instructions:</strong>
            </p>
            <ul style={{ 
              margin: '10px 0 0 0', 
              color: '#1976d2', 
              fontSize: '13px',
              textAlign: 'left',
              paddingLeft: '20px'
            }}>
              <li>Open Google Pay, PhonePe, or any UPI app</li>
              <li>Scan this QR code with your app</li>
              <li>You should see payment details</li>
              <li>Click "Payment Done" to simulate completion</li>
            </ul>
          </div>
        </div>
        
        {/* Payment Details */}
        <div style={{
          background: '#f8f9fa',
          borderRadius: '15px',
          padding: '20px',
          marginBottom: '25px',
          maxWidth: '400px',
          width: '100%'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '10px'
          }}>
            <span style={{ color: '#6c757d', fontSize: '14px' }}>Amount:</span>
            <span style={{ color: '#2c3e50', fontSize: '18px', fontWeight: 'bold' }}>
              €{(total * 1.1).toFixed(2)}
            </span>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '10px'
          }}>
            <span style={{ color: '#6c757d', fontSize: '14px' }}>Merchant:</span>
            <span style={{ color: '#2c3e50', fontSize: '14px' }}>
              SmartMart Store
            </span>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span style={{ color: '#6c757d', fontSize: '14px' }}>UPI ID:</span>
            <span style={{ color: '#2c3e50', fontSize: '14px' }}>
              smartmart@pay
            </span>
          </div>
        </div>
      </div>
      
      {/* Bottom Actions */}
      <div style={{
        background: 'rgba(0,0,0,0.9)',
        padding: '20px',
        display: 'flex',
        gap: '15px'
      }}>
        <button 
          onClick={onManualPayment}
          style={{
            flex: 1,
            padding: '15px',
            fontSize: '16px',
            background: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          <CreditCard size={16} />
          Manual Payment
        </button>
        
        <button 
          onClick={handlePaymentSuccess}
          disabled={isProcessing}
          style={{
            flex: 1,
            padding: '15px',
            fontSize: '16px',
            background: isProcessing ? '#6c757d' : '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: isProcessing ? 'not-allowed' : 'pointer',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          <Smartphone size={16} />
          {isProcessing ? 'Processing...' : 'Payment Done'}
        </button>
      </div>
    </div>
  )
}

export default ScannerScreen