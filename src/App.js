import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/Login'
import ProtectedTest from './pages/ProtectedTest'
import CreateGladiator from './pages/CreateGladiator'
import Register from './pages/Register'

function App() {
  return (
    <Router>
      <div className="flex">
        <main className="flex-1">
          <div className="py-4">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8"></div>
            <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
              <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="protected" element={<ProtectedTest />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="gladiator" element={<CreateGladiator />} />
                <Route path="register" element={<Register />} />
              </Routes>
            </div>
          </div>
        </main>
      </div>
    </Router>
  )
}
export default App
