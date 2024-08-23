import React, { useEffect, useState } from 'react';
import JobListing from './JobListing';
import Spinner from './Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { jobLoadAction } from '../redux/actions/jobAction';

const JobListings = ({ isHome = false }) => {
    const { jobs = [], pages } = useSelector(state => state.loadJobs); // Default jobs to an empty array
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(jobLoadAction());
    }, [dispatch]);

    // Optional: Check if jobs are loading or not
    useEffect(() => {
        if (jobs.length > 0) {
            setLoading(false);
        }
    }, [jobs]);

    return (
        <>
            {/* <!-- Browse Jobs --> */}
            <section className="bg-blue-50 px-4 py-10">
                <div className="container-xl lg:container m-auto">
                    <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                        {isHome ? "Recent Jobs" : "Browse Jobs"}
                    </h2>

                    {loading ? (
                        <Spinner loading={loading} />
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {jobs.map((job) => (
                                <JobListing key={job._id} job={job} />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default JobListings;
