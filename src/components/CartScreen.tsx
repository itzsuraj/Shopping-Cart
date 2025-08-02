import React from 'react'
import { ArrowLeft, MoreVertical, Plus } from 'lucide-react'
import { CartItem } from '../types'

interface CartScreenProps {
  isActive: boolean
  cart: CartItem[]
  onAddItem: () => void
  onRemoveItem: () => void
  onCheckout: () => void
  onBack: () => void
}

const CartScreen: React.FC<CartScreenProps> = ({
  isActive,
  cart,
  onAddItem,
  onRemoveItem,
  onCheckout,
  onBack
}) => {
  const getTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

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
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '14px', color: '#6c757d' }}>
            {getItemCount()} items
          </span>
          <button className="menu-btn">
            <MoreVertical size={20} />
          </button>
        </div>
      </div>
      
      {/* Main Content */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}>
        {/* Scanner Status */}
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '20px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '24px', marginBottom: '10px' }}>📱</div>
          <h2 style={{ margin: '0 0 10px 0', fontSize: '20px' }}>Scanner Ready</h2>
          <p style={{ margin: 0, opacity: 0.9, fontSize: '14px' }}>
            Scan products to add them to your cart
          </p>
        </div>
        
        {/* Scrollable Items List */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '20px',
          paddingBottom: '120px'
        }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px 20px', color: '#6c757d' }}>
              <div style={{ fontSize: '64px', marginBottom: '20px' }}>🛒</div>
              <h3 style={{ marginBottom: '10px', color: '#495057' }}>Your cart is empty</h3>
              <p>Start scanning items to add them to your cart</p>
              <button
                onClick={onAddItem}
                style={{
                  marginTop: '20px',
                  padding: '15px 30px',
                  fontSize: '16px',
                  background: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                📱 Add Sample Item
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {cart.map((item) => (
                <div key={item.id} style={{
                  background: 'white',
                  padding: '15px',
                  borderRadius: '15px',
                  border: '2px solid #e9ecef',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ fontSize: '32px' }}>{item.image}</div>
                    <div>
                      <h4 style={{ margin: '0 0 5px 0', color: '#2c3e50' }}>
                        {item.name}
                      </h4>
                      <p style={{ margin: 0, color: '#6c757d', fontSize: '14px' }}>
                        Qty: {item.quantity} × ₹{item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#2c3e50' }}>
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </div>
                    <button
                      onClick={() => onRemoveItem()}
                      style={{
                        background: '#dc3545',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        padding: '5px 10px',
                        fontSize: '12px',
                        cursor: 'pointer',
                        marginTop: '5px'
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Sticky Total Component */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'white',
          borderTop: '2px solid #e9ecef',
          padding: '20px',
          boxShadow: '0 -4px 12px rgba(0,0,0,0.1)',
          zIndex: 10
        }}>
          {cart.length > 0 ? (
            <>
              {/* Running Total */}
              <div style={{
                background: '#2c3e50',
                color: 'white',
                padding: '15px',
                borderRadius: '10px',
                marginBottom: '15px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '14px' }}>Subtotal:</span>
                  <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
                    ₹{getTotal().toFixed(2)}
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '14px' }}>Tax (18%):</span>
                  <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
                    ₹{(getTotal() * 0.18).toFixed(2)}
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.3)', paddingTop: '8px' }}>
                  <span style={{ fontSize: '18px', fontWeight: 'bold' }}>Total:</span>
                  <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
                    ₹{(getTotal() * 1.18).toFixed(2)}
                  </span>
                </div>
              </div>
              {/* Action Buttons */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <button
                  onClick={onAddItem}
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
                  <Plus size={14} />
                  Add Item
                </button>
                <button
                  onClick={onCheckout}
                  style={{
                    padding: '12px',
                    fontSize: '14px',
                    background: '#007bff',
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
                  💳 Checkout
                </button>
              </div>
            </>
          ) : (
            <button
              onClick={onAddItem}
              style={{
                width: '100%',
                padding: '15px',
                fontSize: '16px',
                background: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              📱 Add Sample Item
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default CartScreen 