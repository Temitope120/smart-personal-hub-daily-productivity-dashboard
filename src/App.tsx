import { Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import AppLayout from './components/layout/AppLayout'
import Dashboard from './pages/Dashboard'
import '@mantine/core/styles.css'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import Notes from "./pages/Notes";
import Tasks from "./pages/Tasks";
import Settings from "./pages/Settings";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="notes" element={<Notes />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
