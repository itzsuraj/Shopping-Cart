# Shopping Cart Electron App

A modern shopping cart application built with Electron, React, and TypeScript. This app provides a complete shopping experience with QR code payment integration.

## Features

- 🛒 **Shopping Cart Management**: Add, remove, and manage items
- 💳 **Multiple Payment Options**: UPI, QR Code, and Card payments
- 📱 **QR Code Integration**: Generate and scan QR codes for payments
- 🎨 **Modern UI**: Clean and responsive design
- ⚡ **Electron Desktop App**: Cross-platform desktop application

## Screenshots

The app includes multiple screens:
- Start Screen
- Cart Screen
- Summary Screen
- Payment Options
- QR Scanner
- Success/Failed Screens

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Desktop**: Electron
- **Build Tool**: Vite
- **Styling**: CSS3 with modern design
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/itzsuraj/Shopping-Cart.git
   cd Shopping-Cart
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   npm run electron:build
   ```

## Project Structure

```
Shopping-Cart/
├── src/
│   ├── components/          # React components
│   │   ├── CartScreen.tsx
│   │   ├── FailedScreen.tsx
│   │   ├── InstructionScreen.tsx
│   │   ├── PaymentOptionsScreen.tsx
│   │   ├── QRPaymentScreen.tsx
│   │   ├── ScannerScreen.tsx
│   │   ├── StartScreen.tsx
│   │   ├── SuccessScreen.tsx
│   │   ├── SummaryScreen.tsx
│   │   └── TitleBar.tsx
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── types.ts            # TypeScript types
├── electron/               # Electron main process
├── dist/                   # Built files
└── package.json
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run electron:dev` - Start Electron in development
- `npm run electron:build` - Build Electron app
- `npm run preview` - Preview production build

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Suraj Pandey**
- GitHub: [@itzsuraj](https://github.com/itzsuraj)

## Support

If you have any questions or need help, please open an issue on GitHub.

---

⭐ **Star this repository if you find it helpful!** 