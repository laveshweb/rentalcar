import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// Pages Imports
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router'


function App() {


  return (
    <div className=" min-h-screen text-zinc-100 bg-zinc-900">
      <Navbar />
      <main className="min-h-screen">
        {/* {Pages Section} */}
        <Routes>
          <Route index element={<HomePage/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
