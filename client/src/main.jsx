import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthUserProvider } from './services/auth.user.context.jsx'
import { MovieProvider } from './services/movie.context.jsx'
import { CastProvider } from './services/cast.context.jsx'
import { ShowProvider } from './services/show.context.jsx'
import { BookingProvider } from './services/booking.context.jsx'

createRoot(document.getElementById('root')).render(
  <AuthUserProvider>
    <MovieProvider>
      <CastProvider>
        <ShowProvider>
          <BookingProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </BookingProvider>
        </ShowProvider>
      </CastProvider>
    </MovieProvider>
  </AuthUserProvider>
)