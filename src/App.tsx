import './App.css'
import AppLayout from './components/layout/AppLayout'
import Topbar from './components/layout/Topbar'
import Dashboard from './pages/Dashboard'
import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

function App() {

  return (
    <>
      <MantineProvider>
        <AppLayout>
          <Topbar />
          <Dashboard />
        </AppLayout>
      </MantineProvider>

    </>
  )
}

export default App
