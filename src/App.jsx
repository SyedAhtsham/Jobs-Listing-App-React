import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'

const App = () => {
  return (
      <>
          
          <Navbar/>
          <Hero />
          
          {/* Wrapper compnents are the components within other compnent, Within home cards, there will be 
          card component*/}
          <HomeCards />

          <JobListings/>
          



         

          <section className="m-auto max-w-lg my-10 px-6">
              <a
                  href="jobs.html"
                  className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
              >View All Jobs</a>
          </section>

          </>
  )
}

export default App