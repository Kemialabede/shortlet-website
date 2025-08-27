import React from 'react'
import Header from '../header'
import Footer from '../footer'

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-1 relative z-10 pt-[100px]">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Layout
