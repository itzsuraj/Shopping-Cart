import React from 'react'
import { RefreshCw, ArrowLeft } from 'lucide-react'

interface FailedScreenProps {
  isActive: boolean
  onRetry: () => void
  onBackToCart: () => void
}

const FailedScreen: React.FC<FailedScreenProps> = ({ isActive, onRetry, onBackToCart }) => {
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
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isActive ? 1 : 0,
        transform: isActive ? 'translateX(0)' : 'translateX(100%)',
        zIndex: 1,
        padding: '20px'
      }}
    >
      {/* Failed Content */}
      <div style={{
        background: 'white',
        borderRadius: '15px',
        padding: '30px',
        textAlign: 'center',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        maxWidth: '400px',
        width: '100%',
        border: '1px solid #e2e8f0'
      }}>
        {/* Error Icon */}
        <div style={{
          fontSize: '64px',
          marginBottom: '20px',
          animation: 'shake 0.5s ease-in-out'
        }}>
          ❌
        </div>
        
        {/* Error Message */}
        <h1 style={{ 
          margin: '0 0 10px 0', 
          fontSize: '24px', 
          color: '#dc2626',
          fontWeight: 'bold'
        }}>
          Payment Failed
        </h1>
        <p style={{ 
          margin: '0 0 20px 0', 
          color: '#64748b', 
          fontSize: '14px',
          lineHeight: '1.5'
        }}>
          We couldn't process your payment. Please check your payment method and try again.
        </p>
        
        {/* Error Details */}
        <div style={{
          background: '#f8fafc',
          borderRadius: '10px',
          padding: '15px',
          marginBottom: '20px',
          textAlign: 'left',
          border: '1px solid #e2e8f0',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#1e293b' }}>
            Error Details
          </h3>
          <div style={{ fontSize: '12px', color: '#64748b' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <span>Error Code:</span>
              <span>PAY-{Date.now().toString().slice(-4)}</span>
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
              <span style={{ color: '#dc2626', fontWeight: 'bold' }}>✗ Failed</span>
            </div>
          </div>
        </div>
        
        {/* Help Section */}
        <div style={{
          background: '#fff3cd',
          border: '1px solid #ffeaa7',
          borderRadius: '8px',
          padding: '12px',
          marginBottom: '20px',
          textAlign: 'left',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <p style={{ margin: '0 0 8px 0', color: '#856404', fontSize: '12px', fontWeight: 'bold' }}>
            💡 Need Help?
          </p>
          <ul style={{ 
            margin: 0, 
            color: '#856404', 
            fontSize: '11px',
            paddingLeft: '15px'
          }}>
            <li>Check your internet connection</li>
            <li>Verify your payment details</li>
            <li>Try a different payment method</li>
          </ul>
        </div>
        
        {/* Action Buttons */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr',
          gap: '10px'
        }}>
          <button 
            onClick={onBackToCart}
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
            <ArrowLeft size={16} />
            Back to Cart
          </button>
          
          <button 
            onClick={onRetry}
            style={{
              padding: '12px',
              fontSize: '14px',
              background: '#1a5f3c',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '5px',
              boxShadow: '0 2px 4px rgba(26, 95, 60, 0.3)'
            }}
          >
            <RefreshCw size={16} />
            Try Again
          </button>
        </div>
      </div>
      
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
      `}</style>
    </div>
  )
}

export default FailedScreen 