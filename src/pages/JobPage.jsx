// import React from 'react'
// import { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import Spinner from '../components/Spinner'

// const JobPage = () => {
//     const [job, setJob] = useState(null)
//     const { id } = useParams();
//     const [loading, setLoading] = useState(true)
    
//     useEffect(() => {
//         const fetchJob = async () => {
//             try {
//                 const res = await fetch(`/api/jobs/${id}`)
//                 const data = await res.json();
//                 setJob(data)
//             } catch {
//                 console.log('Error fetching the data', error)
//             } finally {
//                 setLoading(false)
//             }
//         }
//         fetchJob()
//     },[])
    
//     return (
//         <>
//             {loading ? <Spinner /> : (<h1>{job.title}</h1>)}
//         </>
//   )
// }



// export default JobPage

import { useParams, useLoaderData } from 'react-router-dom'
import Spinner from '../components/Spinner'

import React from 'react'

const JobPage = () => {
  const { id } = useParams();
  const job = useLoaderData();

  return (
    <>
      {/* {console.log(job)} */}
      <h1>{job.title}</h1>
    </>
  )
}


const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`)
  
  const data = await res.json()
  
  return data;
}

export {JobPage as default, jobLoader}

