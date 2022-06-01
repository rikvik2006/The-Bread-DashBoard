import { useState } from 'react'

import { DataDeletion, Home, Legal, PrivacyPolicy} from "./components";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/legal" element={<Legal/>} />
          <Route exact path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route exact path="/request-data-deletion" element={<DataDeletion/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
