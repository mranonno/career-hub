import PropTypes from "prop-types";
import { CiLocationOn, CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;
  return (
    <div className="flex flex-col border rounded-lg p-10">
      <div>
        <img src={logo} alt="" />
      </div>
      <h3 className="mt-8 mb-2 text-2xl font-extrabold text-[#474747]">
        {job_title}
      </h3>
      <p className="text-xl font-semibold text-[#757575]">{company_name}</p>
      <div className="flex gap-4 my-4">
        <button className="border-2 border-[#9873FF] rounded font-extrabold text-[#9873FF] py-2 px-5">
          {remote_or_onsite}
        </button>
        <button className="border-2 border-[#9873FF] rounded font-extrabold text-[#9873FF] py-2 px-5">
          {job_type}
        </button>
      </div>
      <div className="flex gap-5">
        <div className="flex items-center gap-1">
          <CiLocationOn />
          <p>{location}</p>
        </div>
        <div className="flex items-center gap-1">
          <CiDollar />
          <p>Salary:{salary}</p>
        </div>
      </div>
      <div>
        <Link to={`/job/${id}`}><button className="px-5 py-3 rounded bg-[#7E90FE] text-white text-xl font-extrabold">
          View Details
        </button></Link>
        
      </div>
    </div>
  );
};
Job.propTypes = {
  job: PropTypes.object,
};
export default Job;
