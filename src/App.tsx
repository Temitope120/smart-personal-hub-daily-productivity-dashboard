import './App.css'
import AppLayout from './components/layout/AppLayout'
import Topbar from './components/layout/Topbar'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <>
      <AppLayout>
        <Topbar />
        <Dashboard />
      </AppLayout>

    </>
  )
}

export default App
