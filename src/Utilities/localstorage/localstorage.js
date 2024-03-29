const getStoredCart = () => {
  const storedAppliedJobs = localStorage.getItem("appliedJob");
  if (storedAppliedJobs) {
    return JSON.parse(storedAppliedJobs);
  }
  return [];
};

const saveAppliedJob = (id) => {
    const storedAppliedJobs = getStoredCart();
    const isExists = storedAppliedJobs.find((jobId) => jobId === id);
    if (!isExists) {
        storedAppliedJobs.push(id);
        localStorage.setItem('appliedJob', JSON.stringify(storedAppliedJobs));
    }
};

export { saveAppliedJob, getStoredCart };
