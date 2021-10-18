import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const { DetailsId } = useParams();
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/syedhealthcare.json')
            .then(res => res.json())
            .then(data => setServices(data.services))
    }, []);
    const detaiId = parseFloat(DetailsId) - 1;
    console.log(services[detaiId]);
    const service = services[detaiId];
    // console.log(service.name);
    return (
        <div>
            <h2>Details {detaiId}</h2>
            <h2>Details  </h2>
        </div>
    );
};

export default Details;