import React from 'react'
import { ArrowLeft, MoreVertical } from 'lucide-react'
import { CartItem } from '../types'

interface CartScreenProps {
  isActive: boolean
  cart: CartItem[]
  onAddItem: (product?: any) => void
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
        <div className="logo">SmartMart</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 12px',
            background: '#1a5f3c',
            color: 'white',
            borderRadius: '15px',
            fontSize: '12px',
            fontWeight: '500'
          }}>
            <span>🛒</span>
            <span>{getItemCount()} items</span>
          </div>
          <button className="menu-btn">
            <MoreVertical size={20} />
          </button>
        </div>
      </div>
      
      {/* Main Content - Compact Layout */}
      <div style={{
        flex: 1,
        display: 'flex',
        position: 'relative',
        padding: '0 15px'
      }}>
        
        {/* Left Side - Products (60%) */}
        <div style={{
          width: '60%',
          height: '100%',
          borderRight: '1px solid #e2e8f0',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          paddingRight: '15px'
        }}>
          {/* Compact Products Header */}
          <div style={{
            padding: '15px 0',
            borderBottom: '1px solid #e2e8f0',
            background: 'white'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '8px'
            }}>
              <h2 style={{ 
                margin: 0, 
                fontSize: '18px', 
                color: '#1a5f3c',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                🛒 Your Cart
              </h2>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 10px',
                background: '#f0f9ff',
                color: '#1a5f3c',
                borderRadius: '12px',
                fontSize: '12px',
                fontWeight: '500',
                border: '1px solid #e0f2fe'
              }}>
                <span>💰</span>
                <span>₹{getTotal().toFixed(2)}</span>
              </div>
            </div>
            <p style={{ 
              margin: 0, 
              fontSize: '12px', 
              color: '#64748b',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <span>📦</span>
              <span>{getItemCount()} items • Scan more to add</span>
            </p>
          </div>
          
          {/* Compact Products List */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            minHeight: 0,
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ padding: '10px 0' }}>
              {cart.length === 0 ? (
                <div style={{ 
                  textAlign: 'center', 
                  padding: '30px 20px', 
                  color: '#64748b',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <div style={{ 
                    fontSize: '48px', 
                    marginBottom: '15px',
                    opacity: 0.6
                  }}>🛒</div>
                  <h3 style={{ 
                    marginBottom: '8px', 
                    color: '#1e293b',
                    fontSize: '16px',
                    fontWeight: '600'
                  }}>Your cart is empty</h3>
                  <p style={{ 
                    marginBottom: '15px',
                    fontSize: '13px',
                    lineHeight: '1.4'
                  }}>Scan products to add them to your cart</p>
                  <button
                    onClick={() => onAddItem()}
                    style={{
                      padding: '10px 20px',
                      fontSize: '14px',
                      background: '#1a5f3c',
                      color: 'white',
                      border: 'none',
                      borderRadius: '20px',
                      cursor: 'pointer',
                      fontWeight: '500',
                      boxShadow: '0 2px 8px rgba(26, 95, 60, 0.2)',
                      transition: 'transform 0.2s',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.02)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)'
                    }}
                  >
                    📱 Add Sample Item
                  </button>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {cart.map((item, index) => (
                    <div key={item.id} style={{
                      background: 'white',
                      padding: '12px',
                      borderRadius: '10px',
                      border: '1px solid #e2e8f0',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                      position: 'relative',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-1px)'
                      e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.12)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)'
                    }}
                    >
                      {/* Compact Item Number */}
                      <div style={{
                        position: 'absolute',
                        top: '-6px',
                        left: '-6px',
                        background: '#1a5f3c',
                        color: 'white',
                        borderRadius: '50%',
                        width: '20px',
                        height: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '10px',
                        fontWeight: 'bold',
                        boxShadow: '0 1px 3px rgba(26, 95, 60, 0.3)'
                      }}>
                        {index + 1}
                      </div>
                      
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ 
                          fontSize: '28px',
                          filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'
                        }}>{item.image}</div>
                        <div>
                          <h4 style={{ 
                            margin: '0 0 3px 0', 
                            color: '#1e293b',
                            fontSize: '14px',
                            fontWeight: '600'
                          }}>
                            {item.name}
                          </h4>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            fontSize: '12px',
                            color: '#64748b'
                          }}>
                            <span>📦 {item.quantity}</span>
                            <span>•</span>
                            <span>₹{item.price.toFixed(2)} each</span>
                          </div>
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ 
                          fontSize: '16px', 
                          fontWeight: 'bold', 
                          color: '#1e293b',
                          marginBottom: '4px'
                        }}>
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </div>
                        <button
                          onClick={() => onRemoveItem()}
                          style={{
                            background: '#fef2f2',
                            color: '#dc2626',
                            border: '1px solid #fecaca',
                            borderRadius: '4px',
                            padding: '4px 8px',
                            fontSize: '10px',
                            cursor: 'pointer',
                            fontWeight: '500',
                            transition: 'all 0.2s',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '3px'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#fee2e2'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#fef2f2'
                          }}
                        >
                          🗑️ Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Right Side - Compact Payment (40%) */}
        <div style={{
          width: '40%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: '15px'
        }}>
          {/* Compact Scanner Status */}
          <div style={{
            background: '#1a5f3c',
            color: 'white',
            padding: '15px',
            textAlign: 'center',
            borderRadius: '10px',
            marginBottom: '15px',
            boxShadow: '0 2px 8px rgba(26, 95, 60, 0.2)'
          }}>
            <div style={{ fontSize: '20px', marginBottom: '8px' }}>📱</div>
            <h3 style={{ margin: '0 0 6px 0', fontSize: '16px', fontWeight: '600' }}>Scanner Ready</h3>
            <p style={{ margin: 0, opacity: 0.9, fontSize: '12px' }}>
              Scan products to add them
            </p>
          </div>
          
          {/* Compact Total Section */}
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start'
          }}>
            {cart.length > 0 ? (
              <>
                {/* Compact Running Total */}
                <div style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  padding: '15px',
                  marginBottom: '15px'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '14px', color: '#64748b' }}>Subtotal:</span>
                    <span style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>
                      ₹{getTotal().toFixed(2)}
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '14px', color: '#64748b' }}>Tax (18%):</span>
                    <span style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>
                      ₹{(getTotal() * 0.18).toFixed(2)}
                    </span>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    borderTop: '1px solid #e2e8f0', 
                    paddingTop: '8px' 
                  }}>
                    <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#1e293b' }}>Total:</span>
                    <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#1a5f3c' }}>
                      ₹{(getTotal() * 1.18).toFixed(2)}
                    </span>
                  </div>
                </div>
                
                {/* Compact Checkout Button */}
                <button
                  onClick={onCheckout}
                  style={{
                    width: '100%',
                    padding: '15px',
                    fontSize: '16px',
                    background: '#059669',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxShadow: '0 3px 10px rgba(5, 150, 105, 0.3)',
                    transition: 'transform 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)'
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(5, 150, 105, 0.4)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)'
                    e.currentTarget.style.boxShadow = '0 3px 10px rgba(5, 150, 105, 0.3)'
                  }}
                >
                  💳 Checkout
                </button>
              </>
            ) : (
              <div style={{ 
                textAlign: 'center', 
                padding: '20px', 
                color: '#64748b',
                background: '#f8fafc',
                borderRadius: '10px',
                border: '1px solid #e2e8f0'
              }}>
                <div style={{ fontSize: '32px', marginBottom: '10px' }}>📱</div>
                <h3 style={{ marginBottom: '6px', color: '#1e293b', fontSize: '14px' }}>Ready to Scan</h3>
                <p style={{ fontSize: '12px', margin: 0 }}>Add items to proceed</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartScreen 