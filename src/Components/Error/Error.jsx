import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="flex flex-col min-h-screen justify-center items-center">
            <h3>Ekahe ki tor vhai</h3>
            <Link to={'/'}>Go back</Link>
        </div>
    );
};

export default Error;