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
    <div className="title-bar">
      <div className="title-bar-content">
        <div className="logo">LOGO</div>
        <div className="window-controls">
          <button className="minimize-btn" onClick={minimizeWindow}>
            <Minus size={16} />
          </button>
          <button className="close-btn" onClick={closeWindow}>
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TitleBar 