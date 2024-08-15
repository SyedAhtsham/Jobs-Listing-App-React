import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'
import ViewAllJobs from './components/ViewAllJobs'

import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
import JobPage, { jobLoader } from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'
import EditJobPage from './pages/EditJobPage'
// import JobPage from './pages/JobPage'



const App = () => {

    // Add new Job
    const addJob = async (newJob) => {

        const res = await fetch('/api/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newJob)
        });
        return;
    }

    // Delete Job
    const deleteJob = async (id) => {
        console.log(id)
        const res = await fetch(`/api/jobs/${id}`, {
            method: 'DELETE',
        });
        return;
    }

    // Update Job
    const updateJob = async (job) => {
        const res = await fetch(`/api/jobs/${job.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(job)
        });
        return;
    }

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path='/jobs' element={<JobsPage />} />
                {/* <Route path='/jobs/:id' element={<JobPage />}/> */}
                <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
                <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
                <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={ updateJob} />} loader={jobLoader} />
                <Route path='*' element={<NotFoundPage />} />


            </Route>
        )

    );

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