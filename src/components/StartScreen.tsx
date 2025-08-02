import React from 'react'
import { ShoppingCart, ArrowRight } from 'lucide-react'

interface StartScreenProps {
  isActive: boolean
  onStart: () => void
}

const StartScreen: React.FC<StartScreenProps> = ({ isActive, onStart }) => {
  return (
    <div 
      className={`screen ${isActive ? 'active' : ''}`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isActive ? 1 : 0,
        transform: isActive ? 'translateX(0)' : 'translateX(-100%)',
        zIndex: 1
      }}
    >
      {/* Logo and Title */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ fontSize: '64px', marginBottom: '20px' }}>🛒</div>
        <h1 style={{ 
          margin: '0 0 10px 0', 
          fontSize: '32px', 
          color: 'white',
          fontWeight: 'bold'
        }}>
          SmartMart
        </h1>
        <p style={{ 
          margin: 0, 
          fontSize: '16px', 
          color: 'rgba(255,255,255,0.9)',
          maxWidth: '300px'
        }}>
          Your Smart Shopping Experience
        </p>
      </div>
      
      {/* Features */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        marginBottom: '40px',
        maxWidth: '400px',
        width: '100%',
        padding: '0 20px'
      }}>
        <div style={{
          background: 'rgba(255,255,255,0.1)',
          padding: '15px',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          color: 'white'
        }}>
          <div style={{ fontSize: '24px' }}>📱</div>
          <div>
            <h3 style={{ margin: '0 0 5px 0', fontSize: '16px' }}>Scan & Shop</h3>
            <p style={{ margin: 0, fontSize: '14px', opacity: 0.9 }}>Scan products to add to cart</p>
          </div>
        </div>
        
        <div style={{
          background: 'rgba(255,255,255,0.1)',
          padding: '15px',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          color: 'white'
        }}>
          <div style={{ fontSize: '24px' }}>💳</div>
          <div>
            <h3 style={{ margin: '0 0 5px 0', fontSize: '16px' }}>Quick Payment</h3>
            <p style={{ margin: 0, fontSize: '14px', opacity: 0.9 }}>Pay with UPI or cards</p>
          </div>
        </div>
        
        <div style={{
          background: 'rgba(255,255,255,0.1)',
          padding: '15px',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          color: 'white'
        }}>
          <div style={{ fontSize: '24px' }}>⚡</div>
          <div>
            <h3 style={{ margin: '0 0 5px 0', fontSize: '16px' }}>Fast Checkout</h3>
            <p style={{ margin: 0, fontSize: '14px', opacity: 0.9 }}>Complete your purchase in seconds</p>
          </div>
        </div>
      </div>
      
      {/* Start Button */}
      <button 
        onClick={onStart}
        style={{
          background: 'white',
          color: '#667eea',
          border: 'none',
          borderRadius: '25px',
          padding: '15px 40px',
          fontSize: '18px',
          fontWeight: 'bold',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          transition: 'transform 0.2s'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)'
        }}
      >
        <ShoppingCart size={20} />
        Start Shopping
        <ArrowRight size={20} />
      </button>
    </div>
  )
}

export default StartScreen 