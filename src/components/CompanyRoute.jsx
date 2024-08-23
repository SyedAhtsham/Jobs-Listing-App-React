import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const CompanyRoute = ({ children }) => {
    const { companyInfo } = useSelector((state) => state.companySignIn || {});

    // Optional: Redirect or take actions if companyInfo is missing
    useEffect(() => {
        if (!companyInfo) {
            <Navigate to="/profile" />;
        }
    }, [companyInfo]);

    return companyInfo ? children : <Navigate to="/profile" />;
};

export default CompanyRoute;
