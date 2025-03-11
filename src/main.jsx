
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

import { SidebarProvider } from './context/contextSideBar.jsx'
import { HeaderProvider } from './context/contextApi.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<HeaderProvider>
<SidebarProvider>
<App />

</SidebarProvider>

</HeaderProvider>

</BrowserRouter>


)
