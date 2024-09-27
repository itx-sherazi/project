import React, { useState } from 'react';
import { Col } from 'react-bootstrap';

// Define the Props component
function Props(props) {
    // State to manage the current image
    const [currentImage, setCurrentImage] = useState(props.imgUral); // Use props to set initial state

    return (
        <Col md={6}sm={12} className='pt-6'>
            <img 
                src={currentImage} 
                alt={props.title} 
                onMouseEnter={() => setCurrentImage(props.hoverImg)} // Change image on mouse enter
                onMouseLeave={() => setCurrentImage(props.imgUral)} // Revert image on mouse leave
                className="img-fluid cursor-pointer w-100 h-30 mt-5 mb-4 ml-2"
            />
            <h1 className='text-center p-1'>{props.title}</h1>
            <h2 className='text-center font-bold p-1'>{props.price}</h2>
            <h6 className='text-center p-1'>{props.subtitle}</h6>
        </Col>
    );
}

export default Props;
