import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import TalentSearchComponent from './TalentSearch.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <TalentSearchComponent />
  </StrictMode>,
)
