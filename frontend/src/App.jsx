import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <div className="app">

      <Sidebar />

      <div className="main-content">

        <Topbar />

        <main>
          <Dashboard />
        </main>

      </div>

    </div>
  )
}

export default App