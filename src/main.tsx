import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.tsx'
//import TalentSearchComponent from './TalentSearch.tsx'
import Footer from './footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Footer />
  </StrictMode>,
)
