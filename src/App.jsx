import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'
import ViewAllJobs from './components/ViewAllJobs'

const App = () => {
    return (
        <>
            
            <Navbar />
            <Hero />
            {/* Wrapper compnents are the components within other compnent, Within home cards, there will be 
          card component*/}
            <HomeCards />
            <JobListings />
            <ViewAllJobs />



        </>
    )
}

export default App