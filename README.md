# Puck Editor - Elementor-Style Visual Page Builder

Puck Editor is a powerful, embeddable drag-and-drop visual page builder built on top of the [Puck](https://puckeditor.com/) framework. It enables non-technical users and developers to create responsive, pixel-perfect web pages using a rich library of pre-built components.

## Features

- **Drag-and-Drop Interface**: Intuitive two-panel layout with a component panel and live canvas.
- **Responsive Layout System**: Section, Container, and Column components with per-breakpoint controls (Desktop, Tablet, Mobile).
- **Rich Component Library**: Heading, Text, Image, Video, Button, Divider, Spacer, and Icon.
- **Tiptap Rich Text**: Inline editing with full formatting, stored as JSON for maximum flexibility.
- **Interactive Elements**: Embla Carousel slider, Accordions, and Tabs.
- **Dynamic Content**: Repeated sections powered by REST API data binding and field mapping.
- **Advanced Controls**: Granular spacing (margin/padding), typography, and color pickers.

## Tech Stack

- **React 18.3.1**
- **TypeScript**
- **Vite**
- **Tailwind CSS v4**
- **@measured/puck**
- **Tiptap**
- **TanStack React Query**
- **Zustand**
- **Lucide React**

## Installation

### Prerequisites

- Node.js 18 or 20+
- npm 9+

### Step-by-Step Guide

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd puck-editor
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Access the editor**:
   Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Compiles the project using TypeScript and Vite for production.
- `npm run test`: Runs unit tests using Vitest.
- `npm run lint`: Checks for linting errors using ESLint.
- `npm run preview`: Locally previews the production build.
- `npx playwright test`: Runs end-to-end tests.

## Project Structure

```text
src/
├── puck/           # Puck configuration and custom logic
│   ├── components/ # Visual components (Heading, Slider, etc.)
│   ├── fields/     # Custom field components (Color, Spacing, etc.)
│   └── config.tsx  # Central Puck registry
├── editor/         # Custom editor shell and UI components
├── hooks/          # Shared React hooks
├── utils/          # Helper functions and utilities
└── App.tsx         # Main entry component
```

## Contributing

Please ensure all tests pass before submitting a pull request:
```bash
npm run test
npx playwright test
```

## License

MIT
