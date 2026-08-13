import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 md:px-16 lg:px-36 w-full text-gray-300/60">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-10 pt-16">
          <div className="md:max-w-96">
              <img alt="CineVault" className="h-10 sm:h-11" src={assets.logo} />
              <p className="mt-5 text-sm leading-6">
                  Discover the latest movies, pick your seat, and enjoy a smooth booking experience built for movie nights.
              </p>
              <div className="flex items-center gap-2 mt-4">
                  <img src={assets.googlePlay} alt="Google Play" className="h-9 w-auto"/>
                  <img src={assets.appStore} alt="App Store" className="h-9 w-auto"/>
              </div>
          </div>
          <div className="flex-1 flex flex-col sm:flex-row items-start md:justify-end gap-10 sm:gap-20 md:gap-40">
              <div>
                  <h2 className="font-semibold mb-5 text-gray-100">Company</h2>
                  <ul className="text-sm space-y-2">
                      <li><a href="/">Home</a></li>
                      <li><a href="/">About us</a></li>
                      <li><a href="/">Contact us</a></li>
                      <li><a href="/">Privacy policy</a></li>
                  </ul>
              </div>
              <div>
                  <h2 className="font-semibold mb-5 text-gray-100">Get in touch</h2>
                  <div className="text-sm space-y-2">
                      <p>+1-234-567-890</p>
                      <p>contact@example.com</p>
                  </div>
              </div>
          </div>
      </div>
      <p className="pt-4 text-center text-sm pb-5">
          Copyright {new Date().getFullYear()} © CineVault - tejaskhurd. All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
