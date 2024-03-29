import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const AppliedJobCart = () => {
    const jobs = useLoaderData();
    console.log(jobs);
    const [appliedJobs,setAppliedJobs]=useState([])
    useEffect(() => {
        const storedAppliedJobsStr = localStorage.getItem('appliedJob');
        const storedAppliedJobs = JSON.parse(storedAppliedJobsStr);
        setAppliedJobs(storedAppliedJobs);
        
    }, []);

    return (
        <div>
            <h3>applied jobs:{appliedJobs.length}</h3>
        </div>
    );
};

export default AppliedJobCart;