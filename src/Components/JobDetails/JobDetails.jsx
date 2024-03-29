import { useLoaderData, useParams } from "react-router-dom";
import { CiDollar, CiPhone } from "react-icons/ci";
import { IoCalendarOutline, IoLocationOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { saveAppliedJob } from "../../Utilities/localstorage/localstorage";

const JobDetails = () => {
  const { id } = useParams();
  const jobs = useLoaderData();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  const {
    job_responsibility,
    job_description,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = job;
  const handleApplyBtn = () => {
    saveAppliedJob(idInt);
  };
  return (
    <div>
      <div className="min-h-20 bg-blue-300 text-center content-center">
        <h3>Job Details: {id}</h3>
      </div>
      <div className="mx-48 mt-32 grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <p>
            <span className="font-semibold">Job Description:</span>
            {job_description}
          </p>
          <p>
            <span className="font-semibold">Job Responsibility:</span>
            {job_responsibility}
          </p>
          <h3 className="font-semibold">Educational Requirements:</h3>
          <p>{educational_requirements}</p>
          <h3 className="font-semibold">Experience:</h3>
          <p>{experiences}</p>
        </div>
        <div className="bg-violet-100 p-8 rounded-lg">
          <div>
            <h3>Job Details</h3>
            <hr />
            <div className="flex items-center gap-1">
              <CiDollar></CiDollar>
              <p>
                <span className="font-semibold">Salary : </span> {salary} (per
                month)
              </p>
            </div>
            <div className="flex items-center gap-1">
              <IoCalendarOutline></IoCalendarOutline>
              <p>
                <span className="font-semibold">Title : </span> {job_title}
              </p>
            </div>
            <h2>Contact Information</h2>
            <hr />
            <div className="flex items-center gap-1">
              <CiPhone />
              <p>
                <span className="font-semibold">Phone : </span>
                {contact_information.phone}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <HiOutlineMail />
              <h3>
                <span className="font-semibold">Email : </span>
                {contact_information.email}
              </h3>
            </div>
            <div>
              <div className="flex">
                <div>
                  <IoLocationOutline />
                </div>
                <p>
                  <span className="font-semibold">Address : </span>
                  {contact_information.address}
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={handleApplyBtn}
            className="bg-blue-400 px-5 py-3 w-full text-xl font-semibold text-white rounded-lg"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
