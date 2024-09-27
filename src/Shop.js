import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

function Shop() {

  // chANGE PIC FUNCTION
  const [img1, setImg1] = useState('https://baroque.pk/cdn/shop/files/180_ee43143b-f263-4253-a4d2-db41370a2ddd.jpg?v=1726814476&width=600');
  // first pic function Zomming
  const [isZoomed1, setIsZoomed1] = useState(false);
  const [isZoomed2, setIsZoomed2] = useState(false);
  const [isZoomed3, setIsZoomed3] = useState(false);

  // Mouse over functions for first image
  const handleMouseEnter1 = () => {
    setIsZoomed1(true);
  };
  const handleMouseLeave1 = () => {
    setIsZoomed1(false);
  };

  // Mouse over functions for second image
  const handleMouseEnter2 = () => {
    setIsZoomed2(true);
  };
  const handleMouseLeave2 = () => {
    setIsZoomed2(false);
  };

  // Mouse over functions for third image
  const handleMouseEnter3 = () => {
    setIsZoomed3(true);
  };
  const handleMouseLeave3 = () => {
    setIsZoomed3(false);
  };

  return (
    <Container fluid>
      {/* First section: three images */}
      <Row className='justify-content-evenly py-5'>
        <Col md={4} sm={12} className='text-center mb-4'>
          <Link to="/secound">
            <div
              style={{
                width: '100%',
                height: 'auto',
                overflow: 'hidden',
                position: 'relative',
                cursor: 'zoom-in',
              }}
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
            >
              <img
                className='zoom-img img-fluid cursor-pointer'
                src='https://baroque.pk/cdn/shop/files/02_Banner182.jpg?v=1726828421&width=600'
                alt='Shawls'
                style={{
                  width: '100%',
                  height: 'auto',
                  transition: 'transform 1.5s ease',
                  transform: isZoomed1 ? 'scale(1.3)' : 'scale(1)',
                }}
              />
            </div>
          </Link>
          <span style={{ display: 'block', marginTop: '10px', fontSize: '25px' }}>
            Ready to Wear
          </span>
          <Link to="/secound"><Button variant="dark" className="mt-2">Shop Now</Button></Link>
        </Col>

        <Col md={4} sm={12} className='text-center mb-4'>
        <Link to="/secound">
            <div
              style={{
                width: '100%',
                height: 'auto',
                overflow: 'hidden',
                position: 'relative',
                cursor: 'zoom-in',
              }}
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
            >
              <img
                className='zoom-img img-fluid cursor-pointer'
                src='https://baroque.pk/cdn/shop/files/02_Banner192.jpg?v=1726834863&width=600'
                alt='Shawls'
                style={{
                  width: '100%',
                  height: 'auto',
                  transition: 'transform 1.5s ease',
                  transform: isZoomed2 ? 'scale(1.3)' : 'scale(1)',
                }}
              />
            </div>
          </Link>
          <span style={{ display: 'block', marginTop: '10px', fontSize: '25px' }}>Shawls</span>
          <Link to="/secound"><Button variant="dark" className="mt-2">Shop Now</Button></Link>
        </Col>

        <Col md={4} sm={12} className='text-center mb-4'>
        <Link to="/secound">
            <div
              style={{
                width: '100%',
                height: 'auto',
                overflow: 'hidden',
                position: 'relative',
                cursor: 'zoom-in',
              }}
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
            >
              <img
                className='zoom-img img-fluid cursor-pointer'
                src='https://baroque.pk/cdn/shop/files/02_Banner191.jpg?v=1726830824&width=600'
                alt='Shawls'
                style={{
                  width: '100%',
                  height: 'auto',
                  transition: 'transform 1.5s ease',
                  transform: isZoomed3 ? 'scale(1.3)' : 'scale(1)',
                }}
              />
            </div>
          </Link>
          <span style={{ display: 'block', marginTop: '10px', fontSize: '25px' }}>Unstitched</span>
          <Link to="/secound"><Button variant="dark" className="mt-2">Shop Now</Button></Link>
        </Col>
      </Row>
      <hr />
       {/* Shop the look section */}
       <div style={{ textAlign: 'center', fontSize: '30px', textDecoration: 'underline', padding: '50px' }}>
        SHOP THE LOOK
      </div>
      <hr />

      {/* Big and Small Image Section */}
      <Row className="justify-content-around p-5 pb-0">
        <Col md={6} sm={12}>
          <img src='https://baroque.pk/cdn/shop/files/Shop_The_Look77.jpg?v=1725975311&width=700' alt='Big Image' className="img-fluid cursor-pointer" style={{ width: '100%', height: '80%' }} />
        </Col>

        <Col md={6} sm={12} className="text-center"> 
        <img
      src={img1}  // Use curly braces to evaluate the img1 state
      className="img-fluid cursor-pointer w-1/2 h-30 mt-5 mb-4 ml-28"
      alt="Small Image"
      onMouseLeave={() => setImg1('https://baroque.pk/cdn/shop/files/180_ee43143b-f263-4253-a4d2-db41370a2ddd.jpg?v=1726814476&width=600')}
      onMouseEnter={() => setImg1('https://baroque.pk/cdn/shop/files/179_29e9d280-19b7-4ec2-ac48-16684623253a.jpg?v=1726814477&width=1000')}
    />
 
 



  <div className="mt-2 ml-1"> {/* Adjusted margin-top for the text */}
    <span>EMBROIDERED PRINTED LAWN</span><br />
    <span>UF-711</span><br />
    <span>PKR 8,990.00</span><br />
    <Link to='/Secound'> <Button variant="dark" className="mt-2 cursor-pointer">VIEW PRODUCT</Button></Link>
  </div>
</Col>

      </Row>
      <hr />
      {/* Be Inspired Section */}
      <div style={{ textAlign: 'center', fontSize: '35px', paddingTop: '70px', textDecoration: 'underline' }}>
        BE INSPIRED
      </div>
      <hr />

      {/* Video Section */}
      <Row className='justify-content-evenly py-5'>
      <Col md={4} sm={12} className='text-center mb-4'>
  <div className="relative">
    <video autoPlay className="img-fluid cursor-pointer" src="video1.mp4" type="video/mp4" />
    
<Link to='/Secound'>    <button className="bg-black text-white px-9 py-2 rounded absolute bottom-14 left-1/3"> Client Love 
</button></Link>
   
  </div>
</Col>
  
        <Col md={4} sm={12} className='text-center mb-4'>
        <div className='relative'>
          <video autoPlay className="img-fluid cursor-pointer" src="video2.mp4" type="video/mp4" />
        <Link to="/Secound"><button className="bg-black text-white px-9 py-2 rounded absolute bottom-14 left-1/3"> Celebrity Style</button> </Link>
</div>
    
        </Col>
    
        <Col md={4} sm={12} className='text-center mb-4'>
            
        <div  className='relative'>
          <video autoPlay className="img-fluid cursor-pointer" src="video4.mp4" type="video/mp4" />
          <Link to="/Secound"> <button className="bg-black text-white px-9 py-2 rounded absolute bottom-14 left-1/3"> Style Spotted</button></Link>
      </div>
        </Col>
       
      </Row>

      <hr />
      <Outlet />
    </Container>
  );
}

export default Shop;
