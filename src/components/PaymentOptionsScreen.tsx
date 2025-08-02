import React from 'react'
import { ArrowLeft } from 'lucide-react'

interface PaymentOptionsScreenProps {
  isActive: boolean
  onBack: () => void
  onUPI: () => void
  onCard: () => void
  total?: number
}

const PaymentOptionsScreen: React.FC<PaymentOptionsScreenProps> = ({ 
  isActive, 
  onBack, 
  onUPI, 
  onCard,
  total = 0
}) => {
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
        transition: 'all 0.3s ease-in-out',
        zIndex: 10,
        overflow: 'auto'
      }}
    >
      {/* Header */}
      <div className="header">
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={20} />
        </button>
        <div className="logo">Payment Options</div>
        <div style={{ width: '40px' }}></div>
      </div>
      
      {/* Main Content */}
      <div style={{
        flex: 1,
        padding: '20px',
        maxHeight: '100vh',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
      }}>
        <h2 style={{
          margin: '0 0 20px 0',
          fontSize: '24px',
          color: '#1a5f3c',
          fontWeight: '600'
        }}>
          Choose Payment Method
        </h2>
        
        {/* Total Amount Display */}
        {total > 0 && (
          <div style={{
            background: '#1a5f3c',
            color: 'white',
            padding: '16px',
            borderRadius: '8px',
            marginBottom: '24px',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            maxWidth: '400px',
            margin: '0 auto 24px auto'
          }}>
            <div style={{
              fontSize: '14px',
              marginBottom: '4px',
              opacity: 0.9
            }}>
              Total Amount
            </div>
            <div style={{
              fontSize: '24px',
              fontWeight: 'bold'
            }}>
              ₹{(total * 1.18).toFixed(2)}
            </div>
            <div style={{
              fontSize: '12px',
              opacity: 0.8,
              marginTop: '4px'
            }}>
              Including 18% tax
            </div>
          </div>
        )}
        
        {/* Payment Options */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',
          justifyContent: 'flex-start',
          flexWrap: 'wrap',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <div style={{ width: '320px', maxWidth: '100%' }}>
            <button
              onClick={onUPI}
              style={{
                width: '100%',
                padding: '20px',
                background: 'white',
                border: '2px solid #1a5f3c',
                borderRadius: '12px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px',
                transition: 'all 0.3s',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'
              }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                background: '#1a5f3c',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '24px'
              }}>
                📱
              </div>
              <div style={{ textAlign: 'center' }}>
                <h3 style={{
                  margin: '0 0 8px 0',
                  fontSize: '18px',
                  color: '#1a5f3c',
                  fontWeight: '600'
                }}>
                  UPI Payment
                </h3>
                <p style={{
                  margin: 0,
                  fontSize: '14px',
                  color: '#64748b',
                  lineHeight: '1.5'
                }}>
                  Scan QR code to pay instantly with UPI
                </p>
              </div>
            </button>
          </div>
          
          <div style={{ width: '320px', maxWidth: '100%' }}>
            <button
              onClick={onCard}
              style={{
                width: '100%',
                padding: '20px',
                background: 'white',
                border: '2px solid #1a5f3c',
                borderRadius: '12px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px',
                transition: 'all 0.3s',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'
              }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                background: '#1a5f3c',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '24px'
              }}>
                💳
              </div>
              <div style={{ textAlign: 'center' }}>
                <h3 style={{
                  margin: '0 0 8px 0',
                  fontSize: '18px',
                  color: '#1a5f3c',
                  fontWeight: '600'
                }}>
                  Card Payment
                </h3>
                <p style={{
                  margin: 0,
                  fontSize: '14px',
                  color: '#64748b',
                  lineHeight: '1.5'
                }}>
                  Pay with credit or debit card securely
                </p>
              </div>
            </button>
          </div>
        </div>
        
        {/* Info Section */}
        <div style={{
          marginTop: '24px',
          padding: '20px',
          background: '#f8fafc',
          borderRadius: '12px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
          maxWidth: '600px',
          margin: '24px auto 0 auto'
        }}>
          <h4 style={{
            margin: '0 0 10px 0',
            fontSize: '16px',
            color: '#1a5f3c',
            fontWeight: '600'
          }}>
            💡 Payment Tips
          </h4>
          <ul style={{
            margin: 0,
            paddingLeft: '20px',
            color: '#64748b',
            fontSize: '14px',
            lineHeight: '1.5'
          }}>
            <li>UPI payments are instant and secure</li>
            <li>Card payments are processed securely</li>
            <li>All transactions are encrypted</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PaymentOptionsScreen 