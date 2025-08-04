/**
 * Main Entry Point for ADmyBRAND AI Suite
 * 
 * This file serves as the application's entry point, responsible for:
 * - Rendering the root React component into the DOM
 * - Importing global styles and configurations
 * - Initializing the React application
 */

import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create and render the root React component
// Uses the modern createRoot API for React 18+ concurrent features
createRoot(document.getElementById("root")!).render(<App />);
