import './style.css'
import React, { useContext } from 'react'
import NavItem from './NavItem/index'
import NavBarContainer from './NavBarContainer'
import { Context } from '../stores'

function NavTest() {
  const context = useContext(Context)
  const cbLogOut = () => window.location.replace('/')
  const handleLogOut = () => context.auth.logout(cbLogOut)

  return (
    <div>
      <NavBarContainer>
        <NavItem>Features</NavItem>
        <NavItem>Pricing</NavItem>
        <NavItem>Documentation</NavItem>
        <NavItem onClick={handleLogOut}>Logout</NavItem>
      </NavBarContainer>

      {/* <div className="px-4">
        <div className="max-w-3xl bg-white rounded-lg mx-auto my-16 p-16">
          <h1 className="text-2xl font-medium mb-2">
            Let's Build: With Tailwind CSS
          </h1>
          <h2 className="font-medium text-sm text-indigo-400 mb-4 uppercase tracking-wide">
            Responsive Navbar
          </h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum illo
          cupiditate molestias atque consequuntur ea quo cumque, odit velit sint
          similique? Asperiores ratione aperiam tempora, alias corrupti deleniti
          quaerat molestiae.
        </div>
      </div> */}
    </div>
  )
}

export default NavTest
