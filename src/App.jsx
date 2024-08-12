import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'
import ViewAllJobs from './components/ViewAllJobs'

import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/jobs' element={<JobsPage/>} />
        </Route>
    )

);

const App = () => {
    return <RouterProvider router={router} />;
    // <>

    //     <Navbar />
    //     <Hero />
    //     {/* Wrapper compnents are the components within other compnent, Within home cards, there will be 
    //   card component*/}
    //     <HomeCards />
    //     <JobListings />
    //     <ViewAllJobs />
    //     {/* React router is a seperate package for the routing of pages, since react is just a 
    //     library and not a complete framework */}


    // </>
}

export default App