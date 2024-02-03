'use client'

import React from 'react'
import { Menu, X, ChevronRight } from 'lucide-react'
import logo from '../assets/logomain.png'
import {Link} from 'react-router-dom'

const menuItems = [
  {
    name: 'Home',
    href: '/homepage',
  },
  {
    name: 'Upload Innovative Item',
    href: '/iproductform',
  },
  {
    name: 'Upload Waste Requirements',
    href: '/wreqform',
  },
  {
    name: 'Satisfied Requirements',
    href: '/satisfiedRequirements'
  }
]
export function ExampleNavbarFour() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto flex max-w-8xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
        <Link to ="/homepage">
        <img src={logo} alt="Logo" className="h-14" />
        </Link>
        </div>
        <div className="hidden lg:block">
          <ul className="ml-12 inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          </div>
        <div className="ml-2 mt-2 hidden lg:block">
          <span className="relative inline-block">
            <Link to ="/profile">
            <img
              className="h-10 w-10 rounded-full"
              src="src\assets\avatar.jpg"
              alt="User"
            />
            </Link>
          </span>
        </div>
        <div className="ml-2 lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <Link to="/homepage">
                      <img src={logo} alt="Logo" className="h-14"/>
                    </Link>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                        <span>
                          <ChevronRight className="ml-3 h-4 w-4" />
                        </span>
                      </a>
                    ))}
                  </nav>
                  <span className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900">Dan Abromov</span>
                    <span className="text-sm font-medium text-gray-500">@dan_abromov</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
