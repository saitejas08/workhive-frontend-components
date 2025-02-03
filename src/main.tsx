import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.tsx'
//import TalentSearchComponent from './TalentSearch.tsx'
import Footer from './footer.tsx'
import SearchPage from './search.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SearchPage />
    <Footer />
  </StrictMode>,
)
