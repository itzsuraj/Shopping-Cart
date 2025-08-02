import React from 'react'
import { ArrowLeft, Receipt, ShoppingBag } from 'lucide-react'
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
  const getItemCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0)
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
      <div className="header">
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={20} />
        </button>
        <div className="logo">SmartMart</div>
        <div></div>
      </div>
      
      {/* Content */}
      <div style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column',
        padding: '15px'
      }}>
        
        {/* Title Section */}
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '20px',
          borderRadius: '12px',
          textAlign: 'center',
          marginBottom: '15px'
        }}>
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>🧾</div>
          <h2 style={{ margin: '0 0 8px 0', fontSize: '18px' }}>Order Summary</h2>
          <p style={{ margin: 0, opacity: 0.9, fontSize: '12px' }}>
            {getItemCount()} items • Review your order
          </p>
        </div>
        
        {/* Items List - Compact */}
        <div style={{
          background: '#f8f9fa',
          borderRadius: '12px',
          padding: '15px',
          marginBottom: '15px',
          flex: 1,
          overflowY: 'auto'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '12px',
            color: '#2c3e50'
          }}>
            <ShoppingBag size={16} />
            <h3 style={{ margin: 0, fontSize: '16px' }}>Your Items</h3>
          </div>
          
          {cart.map((item) => (
            <div key={item.id} style={{
              background: 'white',
              padding: '10px',
              borderRadius: '8px',
              marginBottom: '8px',
              border: '1px solid #e9ecef',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ fontSize: '20px' }}>{item.image}</div>
                <div>
                  <h4 style={{ margin: '0 0 3px 0', color: '#2c3e50', fontSize: '14px' }}>
                    {item.name}
                  </h4>
                  <p style={{ margin: 0, color: '#6c757d', fontSize: '12px' }}>
                    Qty: {item.quantity}
                  </p>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#2c3e50' }}>
                  ₹{(item.price * item.quantity).toFixed(2)}
                </div>
                <p style={{ margin: '2px 0 0 0', color: '#6c757d', fontSize: '10px' }}>
                  ₹{item.price.toFixed(2)} each
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Total Section - Compact */}
        <div style={{
          background: '#2c3e50',
          color: 'white',
          padding: '15px',
          borderRadius: '12px',
          marginBottom: '15px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '10px'
          }}>
            <Receipt size={16} />
            <h3 style={{ margin: 0, fontSize: '16px' }}>Order Total</h3>
          </div>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '5px'
          }}>
            <span style={{ fontSize: '12px' }}>Subtotal:</span>
            <span style={{ fontSize: '14px', fontWeight: 'bold' }}>
              ₹{total.toFixed(2)}
            </span>
          </div>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '5px'
          }}>
            <span style={{ fontSize: '12px' }}>Tax (18%):</span>
            <span style={{ fontSize: '14px', fontWeight: 'bold' }}>
              ₹{(total * 0.18).toFixed(2)}
            </span>
          </div>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            borderTop: '1px solid rgba(255,255,255,0.3)',
            paddingTop: '8px',
            marginTop: '8px'
          }}>
            <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Total:</span>
            <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
              ₹{(total * 1.18).toFixed(2)}
            </span>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr',
          gap: '10px'
        }}>
          <button 
            onClick={onBack}
            style={{
              padding: '12px',
              fontSize: '14px',
              background: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '5px'
            }}
          >
            ← Back to Cart
          </button>
          
          <button 
            onClick={onProceed}
            style={{
              padding: '12px',
              fontSize: '14px',
              background: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '5px'
            }}
          >
            💳 Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  )
}

export default SummaryScreen 