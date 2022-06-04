import { useState } from 'react'

import { DataDeletion, Home, TermsOfService, PrivacyPolicy} from "./components";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route exact path="/request-data-deletion" element={<DataDeletion/>} />
          <Route exact path="/terms-of-service" element={<TermsOfService/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
