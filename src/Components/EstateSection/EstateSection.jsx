import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EstateSection = () => {
    const [estates, setEstates] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        fetch('/estates.json')
            .then(res => res.json())
            .then(data => setEstates(data));
    }, [])
    const handleDetails = (id) => {
        //console.log(id)
        navigate(`/estateDetails/${id}`)
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-7 w-auto">
            {estates.map(estate =>
                <div className="mx-auto text-center "
                    key={estate.id}>
                    <div className="card bg-base-100 w-96 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src={estate.image_url}
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h1 className="card-actions">ID : {estate.id}</h1>
                            <h2 className="card-title text-center">Title : {estate.estate_title}</h2>
                            <p>S.Name : {estate.segment_name}</p>
                            <p>Area : {estate.area}</p>
                            <p>Status : <span className="text-lg font-semibold text-blue-300">{estate.status}</span></p>
                            <p><span className="text-lg font-semibold text-orange-300">Price :</span> {estate.price}</p>
                            <h3><span className="text-lg font-semibold text-orange-300">Facitilities :</span> 
                                {
                                    estate.facilities.map((item,idx) => <p key={idx}> 
                                    {idx+1}.{item} </p>)
                                }
                            </h3>
                            <p>Description : {estate.description}</p>
                            <div className="card-actions">
                                <button onClick={() => handleDetails(estate.id)} className="btn btn-secondary">View Property</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default EstateSection;