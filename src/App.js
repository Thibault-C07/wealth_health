import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import EmployeeList from './pages/EmployeeList'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/employee-list" element={<EmployeeList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
