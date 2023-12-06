import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './HomePage/HomePage'
import OverviewPage from './OverviewPage/OverviewPage'
import RecentPage from './RecentPage/RecentPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/recent" element={<RecentPage />} />
        <Route exact path="/overview" element={<OverviewPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
