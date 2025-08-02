import React, { useState, useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { CartItem } from '../types'

interface QRPaymentScreenProps {
  isActive: boolean
  cart: CartItem[]
  total: number
  onBack: () => void
  onSuccess: () => void
  onFailure: () => void
}

const QRPaymentScreen: React.FC<QRPaymentScreenProps> = ({ 
  isActive, 
  cart, 
  total, 
  onBack, 
  onSuccess, 
  onFailure 
}) => {
  const [qrCode, setQrCode] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes

  useEffect(() => {
    if (isActive) {
      generateQRCode()
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            onFailure()
            return 0
          }
          return prev - 1
        })
      }, 1000)

      return () => clearInterval(timer)
    }
  }, [isActive])

  const generateQRCode = async () => {
    try {
      setIsLoading(true)
      const paymentData = {
        amount: total * 1.18,
        items: cart,
        timestamp: new Date().toISOString(),
        method: 'UPI'
      }
      
      const qrDataUrl = await window.electronAPI?.generateQRCode(paymentData)
      setQrCode(qrDataUrl || null)
      setIsLoading(false)
    } catch (error) {
      console.error('Error generating QR code:', error)
      setIsLoading(false)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div 
      className={`screen ${isActive ? 'active' : ''}`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100dvh',
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
        opacity: isActive ? 1 : 0,
        transform: isActive ? 'translateX(0)' : 'translateX(100%)',
        zIndex: 1
      }}
    >
      {/* Header */}
      <div className="header">
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={20} />
        </button>
        <div className="logo">UPI Payment</div>
        <div style={{ width: '40px' }}></div>
      </div>
      
      {/* Content */}
      <div style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column',
        padding: '15px',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        
        {/* Title Section */}
        <div style={{
          background: '#1a5f3c',
          color: 'white',
          padding: '20px',
          borderRadius: '12px',
          textAlign: 'center',
          marginBottom: '15px',
          maxWidth: '400px',
          width: '100%',
          boxShadow: '0 4px 12px rgba(26, 95, 60, 0.3)'
        }}>
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>📱</div>
          <h2 style={{ margin: '0 0 8px 0', fontSize: '18px' }}>UPI Payment</h2>
          <p style={{ margin: 0, opacity: 0.9, fontSize: '12px' }}>
            Scan QR code with any UPI app
          </p>
        </div>
        
        {/* QR Code Section */}
        <div style={{
          background: 'white',
          border: '2px solid #e2e8f0',
          borderRadius: '12px',
          padding: '20px',
          marginBottom: '15px',
          textAlign: 'center',
          maxWidth: '300px',
          width: '100%',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
        }}>
          {isLoading ? (
            <div style={{ padding: '30px' }}>
              <div style={{ fontSize: '36px', marginBottom: '10px' }}>⏳</div>
              <p style={{ color: '#64748b', margin: 0, fontSize: '12px' }}>Generating QR Code...</p>
            </div>
          ) : qrCode ? (
            <>
              <img 
                src={qrCode} 
                alt="QR Code" 
                style={{ 
                  width: '150px', 
                  height: '150px', 
                  marginBottom: '15px',
                  borderRadius: '8px'
                }} 
              />
              <h3 style={{ margin: '0 0 8px 0', color: '#1e293b', fontSize: '14px' }}>
                Scan with UPI App
              </h3>
              <p style={{ margin: 0, color: '#64748b', fontSize: '11px' }}>
                Use Google Pay, PhonePe, Paytm, or any UPI app
              </p>
            </>
          ) : (
            <div style={{ padding: '30px' }}>
              <div style={{ fontSize: '36px', marginBottom: '10px' }}>❌</div>
              <p style={{ color: '#dc2626', margin: 0, fontSize: '12px' }}>Failed to generate QR code</p>
            </div>
          )}
        </div>
        
        {/* Payment Details */}
        <div style={{
          background: '#f8fafc',
          borderRadius: '12px',
          padding: '15px',
          marginBottom: '15px',
          maxWidth: '300px',
          width: '100%',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '8px'
          }}>
            <span style={{ color: '#64748b', fontSize: '12px' }}>Amount:</span>
            <span style={{ color: '#1e293b', fontSize: '16px', fontWeight: 'bold' }}>
                              ₹{(total * 1.18).toFixed(2)}
            </span>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '8px'
          }}>
            <span style={{ color: '#64748b', fontSize: '12px' }}>Items:</span>
            <span style={{ color: '#1e293b', fontSize: '12px' }}>
              {cart.reduce((count, item) => count + item.quantity, 0)} items
            </span>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span style={{ color: '#64748b', fontSize: '12px' }}>Time Left:</span>
            <span style={{ 
              color: timeLeft < 60 ? '#dc2626' : '#059669', 
              fontSize: '12px', 
              fontWeight: 'bold' 
            }}>
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr',
          gap: '10px',
          maxWidth: '300px',
          width: '100%'
        }}>
          <button 
            onClick={onBack}
            style={{
              padding: '12px',
              fontSize: '14px',
              background: '#64748b',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '5px',
              boxShadow: '0 2px 4px rgba(100, 116, 139, 0.3)'
            }}
          >
            ← Cancel
          </button>
          
          <button 
            onClick={onSuccess}
            style={{
              padding: '12px',
              fontSize: '14px',
              background: '#059669',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '5px',
              boxShadow: '0 2px 4px rgba(5, 150, 105, 0.3)'
            }}
          >
            ✅ Payment Done
          </button>
        </div>
      </div>
    </div>
  )
}

export default QRPaymentScreen 