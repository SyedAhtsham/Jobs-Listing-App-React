import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const CompanyRoute = ({ children }) => {
    const { companyInfo } = useSelector((state) => state.companySignIn || {});

    // Optional: Redirect or take actions if companyInfo is missing
    useEffect(() => {
        if (!companyInfo) {
            <Navigate to="/jobs" />;
        }
    }, [companyInfo]);

    return companyInfo ? children : <Navigate to="/jobs" />;
};

export default CompanyRoute;
