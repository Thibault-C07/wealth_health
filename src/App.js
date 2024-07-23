import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import EmployeeList from './pages/EmployeeList'
import { EmployeeProvider } from './components/EmployeeContext'

function App() {
  return (
    <>
      <EmployeeProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/employee-list" element={<EmployeeList />}></Route>
          </Routes>
        </BrowserRouter>
      </EmployeeProvider>
    </>
  )
}

export default App
