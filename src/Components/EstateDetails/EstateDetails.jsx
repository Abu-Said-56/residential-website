import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EstateDetails = () => {
    const { id } = useParams();
    const numberId = parseInt(id)
    const [estates, setEstates] = useState([]);

    useEffect(() => {
        fetch('/public/estates.json')
            .then(res => res.json())
            .then(data => setEstates(data));

    }, [])

    const targateId = estates.find(Estate => Estate.id === numberId)
    // console.log(estates);

    return (
        <div className=" py-10 mx-auto  text-center rounded-xl">
            <div >
                <img
                    src={targateId?.image_url}
                    className="text-center mx-auto py-3" />
            </div>
            <div className="text-center">
                <div className="text-left w-fit mx-auto px-4">
                    <h1 className="text-lg font-semibold">Estate ID : {targateId?.id}</h1>
                    <h2 className="text-xl font-bold">Estate Title : {targateId?.estate_title}</h2>
                    <p className="text-lg font-semibold">Segment Name : {targateId?.segment_name}</p>
                    <p className="text-lg font-semibold">Area : {targateId?.area}</p>
                    <p className="text-lg font-semibold">Facilities : {targateId?.facilities}</p>
                    <h3><span className="text-lg font-semibold text-orange-300">Facitilities :</span>
                        {
                            targateId?.facilities.map((item, idx) => <p key={idx}>
                                {idx + 1}.{item} </p>)
                        }
                    </h3>
                    <p className="text-lg font-semibold">status : {targateId?.status}</p>
                    <p className="text-lg font-semibold">Price : {targateId?.price}</p>
                    <p className="text-lg font-semibold">Locatiion : {targateId?.location}</p>
                    <p className="text-lg font-semibold">Description : {targateId?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;