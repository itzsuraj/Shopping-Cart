import React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { CartItem } from '../types'

interface SummaryScreenProps {
  isActive: boolean
  cart: CartItem[]
  total: number
  onBack: () => void
  onProceed: () => void
}

const SummaryScreen: React.FC<SummaryScreenProps> = ({ 
  isActive, 
  cart, 
  total, 
  onBack, 
  onProceed 
}) => {
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
        transition: 'all 0.3s ease-in-out',
        zIndex: 10
      }}
    >
      {/* Header */}
      <div className="header">
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={20} />
        </button>
        <div className="logo">Order Summary</div>
        <div style={{ width: '40px' }}></div>
      </div>
      
      {/* Main Content */}
      <div className="content">
        <h2 style={{
          margin: '0 0 32px 0',
          fontSize: '24px',
          color: '#1a5f3c',
          fontWeight: '600'
        }}>
          Review Your Order
        </h2>
        
        {/* Items Summary */}
        <div style={{
          width: '100%',
          maxWidth: '600px',
          margin: '0 auto 32px auto'
        }}>
          {cart.map((item) => (
            <div key={item.id} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '16px',
              borderBottom: '1px solid #e2e8f0',
              background: 'white',
              borderRadius: '8px',
              marginBottom: '12px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}>
                <div style={{ fontSize: '24px' }}>{item.image}</div>
                <div>
                  <h4 style={{
                    margin: '0 0 4px 0',
                    color: '#1e293b'
                  }}>
                    {item.name}
                  </h4>
                  <p style={{
                    margin: 0,
                    color: '#64748b',
                    fontSize: '14px'
                  }}>
                    Quantity: {item.quantity}
                  </p>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: '#1e293b'
                }}>
                  ₹{(item.price * item.quantity).toFixed(2)}
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#64748b'
                }}>
                  ₹{item.price.toFixed(2)} each
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Total Section */}
        <div style={{
          width: '100%',
          maxWidth: '600px',
          margin: '0 auto 32px auto',
          padding: '24px',
          background: '#f8fafc',
          borderRadius: '8px',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '12px'
          }}>
            <span style={{ color: '#64748b' }}>Subtotal:</span>
            <span style={{ fontWeight: '600', color: '#1e293b' }}>₹{total.toFixed(2)}</span>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px'
          }}>
            <span style={{ color: '#64748b' }}>Tax (18%):</span>
            <span style={{ fontWeight: '600', color: '#1e293b' }}>₹{(total * 0.18).toFixed(2)}</span>
          </div>
          <div style={{
            borderTop: '2px solid #e2e8f0',
            paddingTop: '16px',
            marginTop: '16px'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#1a5f3c'
              }}>Total:</span>
              <span style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#1a5f3c'
              }}>₹{(total * 1.18).toFixed(2)}</span>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <button 
            onClick={onBack}
            style={{
              background: 'white',
              color: '#1a5f3c',
              border: '2px solid #1a5f3c',
              padding: '12px 24px',
              borderRadius: '8px',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f0f9ff'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'white'
            }}
          >
            <ArrowLeft size={16} />
            Back to Cart
          </button>
          
          <button 
            onClick={onProceed}
            style={{
              background: '#1a5f3c',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer',
              border: 'none',
              boxShadow: '0 4px 12px rgba(26, 95, 60, 0.3)',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#059669'
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(26, 95, 60, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#1a5f3c'
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(26, 95, 60, 0.3)'
            }}
          >
            Proceed to Payment
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SummaryScreen 