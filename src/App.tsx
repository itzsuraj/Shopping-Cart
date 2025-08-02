import { useState, useEffect } from 'react'
import TitleBar from './components/TitleBar'
import StartScreen from './components/StartScreen'
import CartScreen from './components/CartScreen'
import SummaryScreen from './components/SummaryScreen'
import PaymentOptionsScreen from './components/PaymentOptionsScreen'
import ScannerScreen from './components/ScannerScreen'
import QRPaymentScreen from './components/QRPaymentScreen'
import SuccessScreen from './components/SuccessScreen'
import FailedScreen from './components/FailedScreen'
import { CartItem } from './types'

const sampleProducts = [
  { id: 1, name: 'Apple', price: 2.50, image: '🍎' },
  { id: 2, name: 'Banana', price: 1.80, image: '🍌' },
  { id: 3, name: 'Orange', price: 3.20, image: '🍊' },
  { id: 4, name: 'Milk', price: 4.50, image: '🥛' },
  { id: 5, name: 'Bread', price: 2.80, image: '🍞' }
]

function App() {
  const [currentScreen, setCurrentScreen] = useState('start')
  const [cart, setCart] = useState<CartItem[]>([])

  const navigateTo = (screen: string) => {
    setCurrentScreen(screen)
  }

  const addItem = (product: any) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id)
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...prevCart, { ...product, quantity: 1 }]
      }
    })
  }

  const removeItem = (productId: number) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === productId)
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      } else {
        return prevCart.filter(item => item.id !== productId)
      }
    })
  }

  const resetApp = () => {
    setCart([])
    setCurrentScreen('start')
  }

  const getTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  useEffect(() => {
    console.log('App component rendering...')
    console.log('Current screen:', currentScreen)
    console.log('Cart items:', cart.length)
  }, [currentScreen, cart])

  return (
    <div className="app">
      <TitleBar />
      
      <div className="screen-container">
        <StartScreen 
          isActive={currentScreen === 'start'} 
          onStart={() => navigateTo('cart')} 
        />
        
        <CartScreen
          isActive={currentScreen === 'cart'}
          cart={cart}
          onAddItem={(product) => addItem(product || sampleProducts[0])}
          onRemoveItem={() => removeItem(cart[0]?.id || 0)}
          onCheckout={() => navigateTo('payment-options')}
          onBack={() => navigateTo('start')}
        />
        
        <SummaryScreen
          isActive={currentScreen === 'summary'}
          cart={cart}
          total={getTotal()}
          onBack={() => navigateTo('cart')}
          onProceed={() => navigateTo('payment-options')}
        />
        
        <PaymentOptionsScreen
          isActive={currentScreen === 'payment-options'}
          onBack={() => navigateTo('cart')}
          onUPI={() => navigateTo('scanner')}
          onCard={() => navigateTo('qr-payment')}
          total={getTotal()}
        />
        
        <ScannerScreen
          isActive={currentScreen === 'scanner'}
          total={getTotal()}
          onBack={() => navigateTo('payment-options')}
          onScanSuccess={() => navigateTo('success')}
          onManualPayment={() => navigateTo('qr-payment')}
        />
        
        <QRPaymentScreen
          isActive={currentScreen === 'qr-payment'}
          cart={cart}
          total={getTotal()}
          onBack={() => navigateTo('payment-options')}
          onSuccess={() => navigateTo('success')}
          onFailure={() => navigateTo('failed')}
        />
        
        <SuccessScreen 
          isActive={currentScreen === 'success'}
          onDone={resetApp} 
        />
        
        <FailedScreen 
          isActive={currentScreen === 'failed'}
          onRetry={() => navigateTo('payment-options')}
          onBackToCart={() => navigateTo('cart')}
        />
      </div>
    </div>
  )
}

export default App 