import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PortfolioV2, PortfolioV3, PortfolioV4, PortfolioV5 } from './variants/PortfolioVariants.jsx'

const pageKey = window.location.pathname
  .replace(/\/+$/, '')
  .split('/')
  .filter(Boolean)
  .at(-1)

const pages = {
  v2: PortfolioV2,
  v3: PortfolioV3,
  v4: PortfolioV4,
  v5: PortfolioV5,
}

const PortfolioPage = pages[pageKey] ?? App

document.documentElement.dataset.portfolioVersion = pages[pageKey] ? pageKey : 'v1'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PortfolioPage />
  </StrictMode>,
)
