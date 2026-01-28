import { ChevronLeft, Gauge, Menu, User, X } from 'lucide-react'
import React, { use, useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import { Link } from 'react-router'


function Navbar() {
  const [isScroll, setIsScroolled] = useState(false)
  const [isOpen, SetisOpen] = useState(false)
  useEffect(() => {
    const HandleScroll = () => {
      setIsScroolled(window.scrollY > 50)
      window.addEventListener("scroll", HandleScroll)
      return () => window.removeEventListener("scroll", HandleScroll)
    }
  }, [])
  // const Navlink Data
  const navLinks = [
    {
      name: "home",
      path: "/"
    },
    {
      name: "fleet",
      path: "/fleet"
    },
    {
      name: "About Us",
      path: "/about"
    }
  ]
  //Mobile Navlinks Classes
  const GetNavMobileLinks =({isActive}) => isActive ? "text-white p-5 bg-zinc-950 transition" : "hover:text-white text-zinc-800 border-b border-b-zinc-200 p-5 hover:bg-zinc-900 transition"
  return (
    <header className={`fixed cursor-pointer top-3.5 left-1/2 -translate-x-1/2 z-90 transition-all  duration-300 rounded-full h-14 ${isScroll ? " bg-zinc-900/50 backdrop-blur-xl border border-white/10 scale-95 w-[90%] max-w-3xl" : "bg-zinc-200 w-[95%] max-w-4xl"
      }`}>
      <div className='mx-auto h-full px-6"'>
        <nav className="centered-row justify-between h-full">
          <NavLink to="/" className="flex items-center">
            {/* LOGO Of website */}
            <div className="h-auto relative centered-row gap-1">
              <Gauge className={`h-8 w-9 ml-3 md:ml-6 ${isScroll ? "text-zinc-100" : "text-zinc-700/60"
                }`} />
              <p className={`tracking-tighter cursor-pointer text-xl font-medium ${isScroll ? "text-zinc-200" : "text-zinc-700"
                }`}>DriveWell <sup className='text-xs ml-0.5'>TM</sup></p>
            </div>
          </NavLink>
          {/* DeskTop Navigation */}
          <div className="hidden sm:centered-row max-[653px]:  gap-6  centered-row">
            {
              navLinks.map((item, index) => (
                <a key={index} href={item.path} className={`
                text-md md:text-lg hover:font-semibold hover:-translate-y-1 ease-out transition-all duration-300  relative max-[653px]:right-10  sm:left-[30%]  whitespace-nowrap lg:left-[80%] ${isScroll ? "text-white hover:text-yellow-300" : "text-zinc-800"
                  }
                `}>{item.name}</a>
              ))
            }

          </div>
          <div className=" sm:centered-row pr-14 md:pr-14  ml-auto hidden">
            <Link className='/rent'>
              <button className="clash-display text-base bg-gradient-to-r from-zinc-700 to-zinc-950 px-4 py-2 rounded-full  cursor-pointer hover:-translate-y-0.5 duration-200 transition-all ease-out">
                Rent Today
              </button>
            </Link>
          </div>
          <div className="w-10 h-10  sm:centered-row  hidden bg-zinc-800 rounded-full centered-row cursor-pointer relative sm:right-10 ">
            <User />
          </div>

          {/* Mobile */}
          <div className="sm:hidden  ml-auto pr-6  rounded-md ">
            <button className="md:hidden text-white  hover:text-zinc-400 hover:text transition-colors" onClick={() =>
              SetisOpen(!isOpen)
            }>
              {
                isOpen ? <X size={30} className='text-zinc-700 mt-2' /> : <Menu size={30} className="text-zinc-800 mt-2" />
              }

            </button>

          </div>

              {/* Mobile MenuBar */}
          <div className={`absolute md:hidden -top-5 w-full h-screen bg-zinc-50 backdrop-blur-lg transition-transform duration-300 ease-in-out z-[999] flex flex-col justify-between ${
            isOpen ? "-translate-x-15" : "-translate-x-[1500px]"
          }`}>

            <div className="flex items-center h-16 border-b border-b-zinc-500/80">
              <button onClick={()=> SetisOpen(false)} className="centered-row  gap-1 mr-auto pl-14 duration-1000">
                <ChevronLeft className='text-zinc-800 ' size={22}  />
                <p className="text-lg clash-display text-zinc-800">Back</p>
              </button >
              </div>
              <div className="col flex-1 text-zinc-800 pb- ">
               {
                ["/",  "/fleet", "/about", "/rent"].map((path,i)=>(
                  <NavLink   to={path} className={GetNavMobileLinks}>
                    <button onClick={() => SetisOpen(false)} className="text-xl w-full clash-display">
                      {
                        ["Home", "fleet", "About us", "Rent Now"][i]
                      }
                    </button>
                  </NavLink>
                ))
               }
              </div>

         <div className="text-center text-sm pt-8 pb-8 text-zinc-500">
          &copy; {new Date().getFullYear()} <span className="font-bold">DriveWell </span>All Rights Reserved
         </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar