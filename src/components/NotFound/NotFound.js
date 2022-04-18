import React from 'react';
import './NotFound.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='error-page-container d-flex flex-column align-items-center h-full'>
            <h1>Oops!</h1>
            <div className='d-flex flex-column align-items-center'>
                <h2>404 - PAGE NOT FOUND</h2>
                <p>The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
                <Link to='/'>
                    <Button>GO HOME PAGE</Button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;