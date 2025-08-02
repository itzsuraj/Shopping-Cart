import React from 'react'
import { Minus, X } from 'lucide-react'

const TitleBar: React.FC = () => {
  const minimizeWindow = () => {
    window.electronAPI?.minimizeWindow()
  }

  const closeWindow = () => {
    window.electronAPI?.closeWindow()
  }

  return (
    <div style={{
      height: '40px',
      background: '#1a5f3c',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      color: 'white',
      userSelect: 'none'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
      }}>
        <div style={{
          fontWeight: 'bold',
          fontSize: '18px'
        }}>SmartMart Cart</div>
        <div style={{
          display: 'flex',
          gap: '8px'
        }}>
          <button 
            style={{
              padding: '8px',
              borderRadius: '4px',
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'none'
            }}
            onClick={minimizeWindow}
          >
            <Minus size={16} />
          </button>
          <button 
            style={{
              padding: '8px',
              borderRadius: '4px',
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#dc2626'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'none'
            }}
            onClick={closeWindow}
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TitleBar 