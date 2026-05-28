import { Dashboard } from './components/Dashboard'
import { AgentAssistant } from './components/AgentAssistant'
import { useState } from 'react'
import './App.css'

function App() {
  const [showAgent, setShowAgent] = useState(false)

  return (
    <div className="app-layout">
      <Dashboard />
      {showAgent && (
        <div className="agent-panel">
          <button className="close-agent" onClick={() => setShowAgent(false)}>✕</button>
          <AgentAssistant />
        </div>
      )}
      {!showAgent && (
        <button className="open-agent" onClick={() => setShowAgent(true)}>
          💬 AI Assistant
        </button>
      )}
    </div>
  )
}

export default App
