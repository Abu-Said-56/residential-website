import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    console.error(error);

    return (
        <div className="text-center mx-auto my-auto border-green-800 py-10">
            <h2 className="text-5xl font-bold ">Error Status : <span className="text-red-500">{error.status}</span></h2>
            <p className="text-5xl font-bold ">StatusText : <span className="text-red-500">{error.statusText}</span></p>
            <div className="py-5">
            <Link to="/"><button className="btn btn-secondary">Go to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;