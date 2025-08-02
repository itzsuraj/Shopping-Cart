import React from 'react'
import { ArrowLeft, Barcode, ShoppingCart, X } from 'lucide-react'

interface InstructionScreenProps {
  isActive: boolean
  onContinue: () => void
  onBack: () => void
}

const InstructionScreen: React.FC<InstructionScreenProps> = ({ isActive, onContinue, onBack }) => {
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
        padding: '20px',
        overflowY: 'auto',
        minHeight: 0
      }}>
        
        {/* Title */}
        <h1 style={{ 
          fontSize: '28px', 
          color: '#2c3e50', 
          marginBottom: '20px',
          fontWeight: 'bold',
          textAlign: 'center'
        }}>
          How to Use Self-Service Cart
        </h1>
        
        {/* Continue Button - Moved to top */}
        <button 
          onClick={() => {
            console.log('Continue button clicked!')
            onContinue()
          }}
          style={{
            padding: '18px 40px',
            fontSize: '18px',
            background: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 4px 15px rgba(40, 167, 69, 0.3)',
            transition: 'all 0.3s ease',
            minWidth: '200px',
            marginBottom: '25px',
            position: 'relative',
            zIndex: 10,
            alignSelf: 'center'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(40, 167, 69, 0.4)'
            e.currentTarget.style.background = '#218838'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(40, 167, 69, 0.3)'
            e.currentTarget.style.background = '#28a745'
          }}
        >
          🚀 Start Shopping Now
        </button>
        
        {/* Instructions Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          maxWidth: '800px',
          width: '100%',
          marginBottom: '30px'
        }}>
          
          {/* Step 1 */}
          <div style={{
            background: '#f8f9fa',
            padding: '20px',
            borderRadius: '15px',
            border: '2px solid #e9ecef',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '40px', marginBottom: '15px' }}>📱</div>
            <h3 style={{ fontSize: '18px', marginBottom: '10px', color: '#2c3e50' }}>Step 1: Scan Items</h3>
            <p style={{ color: '#6c757d', lineHeight: '1.4', fontSize: '14px' }}>
              Use the built-in scanner to scan barcodes on items. Each scan adds the item to your cart.
            </p>
          </div>
          
          {/* Step 2 */}
          <div style={{
            background: '#f8f9fa',
            padding: '20px',
            borderRadius: '15px',
            border: '2px solid #e9ecef',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '40px', marginBottom: '15px' }}>🛒</div>
            <h3 style={{ fontSize: '18px', marginBottom: '10px', color: '#2c3e50' }}>Step 2: Add to Cart</h3>
            <p style={{ color: '#6c757d', lineHeight: '1.4', fontSize: '14px' }}>
              Place scanned items in the cart basket. The system tracks your items automatically.
            </p>
          </div>
          
          {/* Step 3 */}
          <div style={{
            background: '#f8f9fa',
            padding: '20px',
            borderRadius: '15px',
            border: '2px solid #e9ecef',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '40px', marginBottom: '15px' }}>💳</div>
            <h3 style={{ fontSize: '18px', marginBottom: '10px', color: '#2c3e50' }}>Step 3: Pay & Go</h3>
            <p style={{ color: '#6c757d', lineHeight: '1.4', fontSize: '14px' }}>
              When done, checkout and pay with UPI, cards, or cash. No waiting in lines!
            </p>
          </div>
        </div>
        
        {/* Important Warning */}
        <div style={{
          background: '#fff3cd',
          border: '2px solid #ffeaa7',
          borderRadius: '10px',
          padding: '15px',
          marginBottom: '25px',
          maxWidth: '600px',
          width: '100%'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '8px' }}>
            <X size={20} color="#856404" />
            <h4 style={{ color: '#856404', fontSize: '16px', margin: 0 }}>Important Reminder</h4>
          </div>
          <p style={{ color: '#856404', margin: 0, lineHeight: '1.4', fontSize: '14px' }}>
            <strong>Do not remove items from your cart once scanned.</strong> All items must be paid for before leaving the store.
          </p>
        </div>
        
        {/* Instructions */}
        <p style={{ 
          marginTop: '15px', 
          fontSize: '12px', 
          color: '#6c757d',
          textAlign: 'center'
        }}>
          <strong>Note:</strong> The instruction cards below are for reference only. 
          Click the green button above to start shopping.
        </p>
      </div>
    </div>
  )
}

export default InstructionScreen 