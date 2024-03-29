import { useEffect, useState } from "react";
import axios from "axios";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    axios.get("jobs.json").then((res) => setJobs(res.data));
  }, []);
  return (
    <div className="mx-72">
      <h3 className="text-5xl text-center text-gray-950">Featured Jobs</h3>
      <p className="text-center">
        Explore thousand of job opportunities with all the information you
        needs. its your future
      </p>
      <div className="grid grid-cols-2 gap-6 px-6">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className={dataLength===jobs.length?'hidden':'text-center pt-6'}>
        <button
          onClick={() => setDataLength(jobs.length)}
          className="text-white text-2xl font-bold rounded-lg px-5 py-3 bg-[#7E90FE]"
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
