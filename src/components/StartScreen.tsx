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
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isActive ? 1 : 0,
        transform: isActive ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'all 0.3s ease-in-out',
        zIndex: 1
      }}
    >
      {/* Logo and Title */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ 
          fontSize: '64px', 
          marginBottom: '20px',
          color: '#1a5f3c'
        }}>🛒</div>
        <h1 style={{ 
          margin: '0 0 10px 0', 
          fontSize: '32px', 
          color: '#1a5f3c',
          fontWeight: 'bold'
        }}>
          SmartMart
        </h1>
        <p style={{ 
          margin: 0, 
          fontSize: '16px', 
          color: '#64748b',
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
          background: '#f8fafc',
          padding: '15px',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          color: '#1e293b',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ fontSize: '24px' }}>📱</div>
          <div>
            <h3 style={{ margin: '0 0 5px 0', fontSize: '16px', color: '#1a5f3c' }}>Scan & Shop</h3>
            <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>Scan products to add to cart</p>
          </div>
        </div>
        
        <div style={{
          background: '#f8fafc',
          padding: '15px',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          color: '#1e293b',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ fontSize: '24px' }}>💳</div>
          <div>
            <h3 style={{ margin: '0 0 5px 0', fontSize: '16px', color: '#1a5f3c' }}>Quick Payment</h3>
            <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>Pay with UPI or cards</p>
          </div>
        </div>
        
        <div style={{
          background: '#f8fafc',
          padding: '15px',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          color: '#1e293b',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ fontSize: '24px' }}>⚡</div>
          <div>
            <h3 style={{ margin: '0 0 5px 0', fontSize: '16px', color: '#1a5f3c' }}>Fast Checkout</h3>
            <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>Complete your purchase in seconds</p>
          </div>
        </div>
      </div>
      
      {/* Start Button */}
      <button 
        onClick={onStart}
        style={{
          background: '#1a5f3c',
          color: 'white',
          border: 'none',
          borderRadius: '25px',
          padding: '15px 40px',
          fontSize: '18px',
          fontWeight: 'bold',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          boxShadow: '0 4px 12px rgba(26, 95, 60, 0.3)',
          transition: 'transform 0.2s, box-shadow 0.2s'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)'
          e.currentTarget.style.boxShadow = '0 6px 16px rgba(26, 95, 60, 0.4)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)'
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(26, 95, 60, 0.3)'
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