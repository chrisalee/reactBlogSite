import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

const PageNotFound = () => {
  return (
    <div className='pageNotFound'>
        <h1>404 Error</h1>
        <h1>Page Not Found</h1>
        <Link to='/'>
            Go back to the homepage
        </Link>
    </div>
  )
}

export default PageNotFound