const { ipcRenderer } = require('electron');

// Global state
let cart = [];
let currentScreen = 'start-screen';

// Sample products for demo
const sampleProducts = [
    { id: 1, name: 'Apple', price: 1.50 },
    { id: 2, name: 'Banana', price: 0.80 },
    { id: 3, name: 'Orange', price: 1.20 },
    { id: 4, name: 'Milk', price: 2.50 },
    { id: 5, name: 'Bread', price: 1.80 },
    { id: 6, name: 'Cheese', price: 3.20 },
    { id: 7, name: 'Yogurt', price: 1.90 },
    { id: 8, name: 'Eggs', price: 2.80 }
];

// Screen management
function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show target screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        currentScreen = screenId;
        
        // Update cart display if showing cart screen
        if (screenId === 'cart-screen') {
            updateCartDisplay();
        }
        
        // Update summary if showing summary screen
        if (screenId === 'summary-screen') {
            updateSummaryDisplay();
        }
        
        // Generate QR code if showing QR payment screen
        if (screenId === 'qr-payment-screen') {
            generateQRCode();
        }
    }
}

// Window controls
function minimizeWindow() {
    ipcRenderer.send('minimize-window');
}

function closeWindow() {
    ipcRenderer.send('close-window');
}

// Cart management
function addItem() {
    const randomProduct = sampleProducts[Math.floor(Math.random() * sampleProducts.length)];
    const existingItem = cart.find(item => item.id === randomProduct.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...randomProduct,
            quantity: 1
        });
    }
    
    updateCartDisplay();
}

function removeItem() {
    if (cart.length > 0) {
        cart.pop();
        updateCartDisplay();
    }
}

function updateCartDisplay() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p style="text-align: center; color: #6c757d; padding: 20px;">No items in cart</p>';
        return;
    }
    
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <span>${item.name} (${item.quantity}x)</span>
            <span>€${(item.price * item.quantity).toFixed(2)}</span>
        `;
        cartContainer.appendChild(itemElement);
    });
}

function updateSummaryDisplay() {
    const summaryContainer = document.getElementById('summary-items');
    const summaryTotal = document.getElementById('summary-total');
    const finalTotal = document.getElementById('final-total');
    
    summaryContainer.innerHTML = '';
    
    if (cart.length === 0) {
        summaryContainer.innerHTML = '<p style="text-align: center; color: #6c757d; padding: 20px;">No items in cart</p>';
        summaryTotal.textContent = '€0.00';
        finalTotal.textContent = '€0.00';
        return;
    }
    
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const itemElement = document.createElement('div');
        itemElement.className = 'summary-item';
        itemElement.innerHTML = `
            <span>${item.name} (${item.quantity}x)</span>
            <span>€${itemTotal.toFixed(2)}</span>
        `;
        summaryContainer.appendChild(itemElement);
    });
    
    summaryTotal.textContent = `€${total.toFixed(2)}`;
    finalTotal.textContent = `€${total.toFixed(2)}`;
}

// QR Code generation
async function generateQRCode() {
    const qrContainer = document.getElementById('qr-code-container');
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const paymentData = {
        amount: total,
        items: cart,
        timestamp: new Date().toISOString(),
        transactionId: `TXN${Date.now()}`
    };
    
    try {
        const qrCodeDataUrl = await ipcRenderer.invoke('generate-qr-code', paymentData);
        if (qrCodeDataUrl) {
            qrContainer.innerHTML = `<img src="${qrCodeDataUrl}" alt="QR Code" style="max-width: 100%; height: auto;">`;
        } else {
            qrContainer.innerHTML = '<p style="color: #6c757d;">QR Code generation failed</p>';
        }
    } catch (error) {
        console.error('Error generating QR code:', error);
        qrContainer.innerHTML = '<p style="color: #6c757d;">QR Code generation failed</p>';
    }
}

// Payment processing
async function processUPIPayment() {
    await processPayment('UPI');
}

async function processCardPayment() {
    await processPayment('CARD');
}

async function processPayment(method) {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const paymentData = {
        method: method,
        amount: total,
        items: cart,
        timestamp: new Date().toISOString()
    };
    
    try {
        const result = await ipcRenderer.invoke('process-payment', paymentData);
        
        if (result.success) {
            showScreen('success-screen');
        } else {
            showScreen('failed-screen');
        }
    } catch (error) {
        console.error('Payment processing error:', error);
        showScreen('failed-screen');
    }
}

function retryPayment() {
    showScreen('payment-options-screen');
}

function resetApp() {
    cart = [];
    showScreen('start-screen');
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    // Set up initial screen
    showScreen('start-screen');
    
    // Add some sample items to cart for demo
    setTimeout(() => {
        if (cart.length === 0) {
            addItem();
            addItem();
        }
    }, 1000);
});

// Handle window controls
ipcRenderer.on('minimize-window', () => {
    // This would be handled by the main process
});

ipcRenderer.on('close-window', () => {
    // This would be handled by the main process
}); 