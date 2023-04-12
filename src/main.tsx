import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter} from "react-router-dom";
import {AuthProvider} from "react-auth-kit";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <AuthProvider authType={"cookie"} authName={"_auth"} cookieSecure={false} cookieDomain={window.location.hostname}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </AuthProvider>
  </React.StrictMode>,
)
