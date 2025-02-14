import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import axios from 'axios'
axios.defaults.baseURL ="https://66fe29606993693089574432.mockapi.io/user-list/react-axios"

createRoot(document.getElementById('root')).render(
    <App />
)
