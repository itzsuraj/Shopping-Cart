# Shopping Cart App

A modern self-service shopping cart application built with **Electron**, **React**, and **Vite**.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with smooth transitions
- **Complete Shopping Flow**: From start to payment completion
- **QR Code Payment**: Integrated QR code generation for UPI payments
- **Cart Management**: Add/remove items with real-time updates
- **Payment Processing**: Simulated payment processing with success/failure states
- **Cross-platform**: Runs on Windows, macOS, and Linux

## 📱 Screens

1. **Start Shopping**: Welcome screen with app branding
2. **Instructions**: Clear guidance for users on how to use the system
3. **Live Cart**: Real-time cart management with add/remove functionality
4. **Cart Summary**: Detailed breakdown of items and total
5. **Payment Options**: Choose between UPI and Card payment methods
6. **QR Payment**: QR code generation for UPI payments
7. **Payment Result**: Success or failure feedback

## 🛠️ Tech Stack

- **Electron**: Cross-platform desktop application
- **React 18**: Modern UI framework with TypeScript
- **Vite**: Fast build tool and dev server
- **Lucide React**: Beautiful icons
- **QRCode**: QR code generation
- **TypeScript**: Type safety

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Shopping-cart
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run in development mode**
   ```bash
   npm run electron:dev
   ```

4. **Build for production**
   ```bash
   npm run electron:build
   ```

## 📁 Project Structure

```
Shopping-cart/
├── electron/
│   ├── main.ts              # Main Electron process
│   └── preload.ts           # Secure IPC bridge
├── src/
│   ├── components/          # React components
│   │   ├── TitleBar.tsx
│   │   ├── StartScreen.tsx
│   │   ├── InstructionScreen.tsx
│   │   ├── CartScreen.tsx
│   │   ├── SummaryScreen.tsx
│   │   ├── PaymentOptionsScreen.tsx
│   │   ├── QRPaymentScreen.tsx
│   │   ├── SuccessScreen.tsx
│   │   └── FailedScreen.tsx
│   ├── types.ts             # TypeScript definitions
│   ├── App.tsx              # Main React app
│   ├── main.tsx             # React entry point
│   └── index.css            # Styling
├── package.json             # Dependencies & scripts
├── vite.config.ts           # Vite configuration
└── tsconfig.json            # TypeScript config
```

## 🎯 Key Features

### Cart Management
- Add random items to cart for demonstration
- Remove items from cart
- Real-time total calculation
- Quantity tracking for duplicate items

### Payment Processing
- QR code generation for UPI payments
- Simulated payment processing
- Success/failure handling
- Retry functionality

### UI/UX
- Smooth screen transitions
- Responsive design
- Modern button interactions
- Clear visual feedback

## 🔧 Development

### Available Scripts

- `npm run dev` - Start Vite dev server
- `npm run electron:dev` - Start Electron with dev server
- `npm run build` - Build React app
- `npm run electron:build` - Build for distribution
- `npm run dist` - Create distributable packages

### Customization

#### Adding Products
Edit the `sampleProducts` array in `src/App.tsx`:

```typescript
const sampleProducts = [
  { id: 1, name: 'Your Product', price: 10.00 },
  // Add more products...
]
```

#### Styling
Modify `src/index.css` to customize:
- Colors and themes
- Layout and spacing
- Animations and transitions

#### Payment Integration
Replace the simulated payment processing in `electron/main.ts` with real payment gateway integration.

## 🚀 Building for Distribution

### Windows
```bash
npm run electron:build
```

### macOS
```bash
npm run electron:build
```

### Linux
```bash
npm run electron:build
```

## 🔒 Security

- Context isolation enabled
- Preload scripts for secure IPC
- No direct nodeIntegration
- Type-safe API communication

## 🐛 Troubleshooting

### Common Issues

1. **Dependencies not found**
   ```bash
   npm install
   ```

2. **Permission errors on Linux**
   ```bash
   chmod +x node_modules/.bin/electron
   ```

3. **Build errors**
   ```bash
   npm run build --verbose
   ```

4. **Electron not starting**
   ```bash
   npm run electron:dev
   ```

## 📄 License

MIT License - feel free to use this project for your own applications.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

**Note**: This is a demonstration application. For production use, implement proper security measures, real payment processing, and data validation. 