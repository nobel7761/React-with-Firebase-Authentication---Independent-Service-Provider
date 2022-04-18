import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Services from '../Services/Services';

const ServiceList = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("Services.json")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    return (
        <div>
            {
                <Container className="py-5">
                    <h2 className="text-center ">My Service List</h2>
                    <div className="d-flex justify-content-center mb-4 ">
                        <div className=" under-line bg-danger"></div>
                    </div>
                    <Row xs={1} md={3} className="g-4">
                        {Array.from({ length: 1 }).map((_, idx) =>
                            services.map((service) => (
                                <Services key={service.id} service={service}></Services>
                            ))
                        )}
                    </Row>
                </Container>
            }
        </div>
    );
};

export default ServiceList;