import React from 'react'
import { ArrowLeft, CreditCard, Smartphone } from 'lucide-react'

interface PaymentOptionsScreenProps {
  isActive: boolean
  onBack: () => void
  onUPI: () => void
  onCard: () => void
}

const PaymentOptionsScreen: React.FC<PaymentOptionsScreenProps> = ({ 
  isActive, 
  onBack, 
  onUPI, 
  onCard 
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
        padding: '15px',
        justifyContent: 'center'
      }}>
        
        {/* Title Section */}
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '20px',
          borderRadius: '12px',
          textAlign: 'center',
          marginBottom: '20px'
        }}>
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>💳</div>
          <h2 style={{ margin: '0 0 8px 0', fontSize: '18px' }}>Choose Payment Method</h2>
          <p style={{ margin: 0, opacity: 0.9, fontSize: '12px' }}>
            Select your preferred payment option
          </p>
        </div>
        
        {/* Payment Options */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          marginBottom: '20px'
        }}>
          {/* UPI Option */}
          <button 
            onClick={onUPI}
            style={{
              background: 'white',
              border: '2px solid #e9ecef',
              borderRadius: '12px',
              padding: '20px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              transition: 'all 0.2s',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#28a745'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e9ecef'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'
            }}
          >
            <div style={{
              background: '#28a745',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white'
            }}>
              <Smartphone size={24} />
            </div>
            <div style={{ textAlign: 'left', flex: 1 }}>
              <h3 style={{ margin: '0 0 5px 0', color: '#2c3e50', fontSize: '16px' }}>
                UPI Payment
              </h3>
              <p style={{ margin: 0, color: '#6c757d', fontSize: '12px' }}>
                Pay with Google Pay, PhonePe, Paytm, or any UPI app
              </p>
            </div>
            <div style={{ color: '#28a745', fontSize: '20px' }}>→</div>
          </button>
          
          {/* Card Option */}
          <button 
            onClick={onCard}
            style={{
              background: 'white',
              border: '2px solid #e9ecef',
              borderRadius: '12px',
              padding: '20px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              transition: 'all 0.2s',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#007bff'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e9ecef'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'
            }}
          >
            <div style={{
              background: '#007bff',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white'
            }}>
              <CreditCard size={24} />
            </div>
            <div style={{ textAlign: 'left', flex: 1 }}>
              <h3 style={{ margin: '0 0 5px 0', color: '#2c3e50', fontSize: '16px' }}>
                Credit/Debit Card
              </h3>
              <p style={{ margin: 0, color: '#6c757d', fontSize: '12px' }}>
                Pay with Visa, MasterCard, or any debit/credit card
              </p>
            </div>
            <div style={{ color: '#007bff', fontSize: '20px' }}>→</div>
          </button>
        </div>
        
        {/* Security Notice */}
        <div style={{
          background: '#e3f2fd',
          border: '1px solid #bbdefb',
          borderRadius: '8px',
          padding: '12px',
          textAlign: 'center',
          marginBottom: '20px'
        }}>
          <p style={{ margin: 0, color: '#1976d2', fontSize: '11px' }}>
            🔒 All payments are secured with bank-level encryption
          </p>
        </div>
        
        {/* Back Button */}
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
          ← Back to Summary
        </button>
      </div>
    </div>
  )
}

export default PaymentOptionsScreen 