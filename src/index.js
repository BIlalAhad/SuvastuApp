import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { FirebaseProvider } from './Context/Firebase'
import './index.css'
import reportWebVitals from './reportWebVitals'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <FirebaseProvider>
    <App />
  </FirebaseProvider>
)

reportWebVitals()
