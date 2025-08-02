import React from 'react'
import { CheckCircle, Home } from 'lucide-react'

interface SuccessScreenProps {
  isActive: boolean
  onDone: () => void
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({ isActive, onDone }) => {
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
        transform: isActive ? 'translateX(0)' : 'translateX(100%)',
        zIndex: 1,
        padding: '20px'
      }}
    >
      {/* Success Content */}
      <div style={{
        background: 'white',
        borderRadius: '15px',
        padding: '30px',
        textAlign: 'center',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        maxWidth: '400px',
        width: '100%'
      }}>
        {/* Success Icon */}
        <div style={{
          fontSize: '64px',
          marginBottom: '20px',
          animation: 'pulse 2s infinite'
        }}>
          ✅
        </div>
        
        {/* Success Message */}
        <h1 style={{ 
          margin: '0 0 10px 0', 
          fontSize: '24px', 
          color: '#28a745',
          fontWeight: 'bold'
        }}>
          Payment Successful!
        </h1>
        <p style={{ 
          margin: '0 0 20px 0', 
          color: '#6c757d', 
          fontSize: '14px',
          lineHeight: '1.5'
        }}>
          Your payment has been processed successfully. Thank you for shopping with SmartMart!
        </p>
        
        {/* Transaction Details */}
        <div style={{
          background: '#f8f9fa',
          borderRadius: '10px',
          padding: '15px',
          marginBottom: '20px',
          textAlign: 'left'
        }}>
          <h3 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#2c3e50' }}>
            Transaction Details
          </h3>
          <div style={{ fontSize: '12px', color: '#6c757d' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <span>Transaction ID:</span>
              <span>#SM{Date.now().toString().slice(-6)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <span>Date:</span>
              <span>{new Date().toLocaleDateString()}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <span>Time:</span>
              <span>{new Date().toLocaleTimeString()}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Status:</span>
              <span style={{ color: '#28a745', fontWeight: 'bold' }}>✓ Completed</span>
            </div>
          </div>
        </div>
        
        {/* Action Button */}
        <button 
          onClick={onDone}
          style={{
            background: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '25px',
            padding: '12px 30px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            margin: '0 auto',
            transition: 'transform 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)'
          }}
        >
          <Home size={18} />
          Start New Shopping
        </button>
      </div>
      
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  )
}

export default SuccessScreen 