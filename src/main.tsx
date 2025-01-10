import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { Provider } from './components/ui/provider'
import { GlobalStyles } from './GlobalStyles'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <GlobalStyles />
      <App />
    </Provider>
  </StrictMode>,
)
