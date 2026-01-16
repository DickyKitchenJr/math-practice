import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MathPracticeSettingsProvider } from './MathPracticeContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MathPracticeSettingsProvider>
      <App />
    </MathPracticeSettingsProvider>
  </React.StrictMode>,
)
