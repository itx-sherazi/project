import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import  { useState } from 'react';
import Accordion from "react-bootstrap/Accordion";
import Props from "../Sub-components/Props";

import Footersecound from "../Footersecound";

function Secound(props) {
  const [img1, setImg1] = useState('center1.webp');
  const [img2, setImg2] = useState('center1.webp');
  const [img3, setImg3] = useState('center1.webp');
  return (
    <>
      <Container fluid>
        <div className="text-center text-3xl py-2">
          <span>CHANTELLE</span>
        </div>
        <hr />

        {/* Product Count */}
        <div className="text-center text-xl py-2">
          <span>35 Products</span>
        </div>
        <hr className="w-full" />
        <Container fluid>
          <Row>
            {/* Accordion section */}
            <Col sm={3}>
  <div
    className="hidden lg:block sticky top-40"
    style={{ width: "100%", maxWidth: "450px", height: "1000px", paddingLeft: '0px', marginLeft: '0px' }}
  >
    <Accordion
      defaultActiveKey="0"
      style={{ height: "100%", overflowY: "auto", width: "100%" }}
    >
      <Accordion.Item eventKey="0">
        <Accordion.Header>Availability</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Product type</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Type</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Fabric</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Size</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Pieces</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Product Style </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </div>
</Col>


            {/* <img 
                src={currentImage} 
                alt={props.title} 
                onMouseEnter={() => setCurrentImage(props.hoverImg)} // Change image on mouse enter
                onMouseLeave={() => setCurrentImage(props.imgUral)} // Revert image on mouse leave
            /> */}

            {/* Product images section */}
            <Col sm={9} className="text-clip mt-2">
            <Row>
             
            <Row>
  <Col md={6}sm={12}>
    <Link to="/Cartshop">
      <div style={{ textAlign: 'center' }}>
        <img
          className="zoom-img img-fluid cursor-pointer"
          src={img1}
          alt="Shawls"
          title="EMBROIDERED PRINTED LAWN"
          onMouseLeave={() => setImg1('center1.webp')}
          onMouseEnter={() => setImg1('https://baroque.pk/cdn/shop/files/02_Banner182.jpg?v=1726828421&width=600')}
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
        <div style={{ marginTop: '10px' }}>
          <h6 style={{ margin: '5px 0', fontSize: '1rem' }}>EMBROIDERED PRINTED LAWN</h6>
          <p style={{ margin: '5px 0' }}><b>PKR 8,990.00 </b></p>
          <p style={{ margin: '5px 0' }}>UF-711</p>
        </div>
      </div>
    </Link>
  </Col>

  <Col md={6}sm={12}>
    <Link to="/Cartshop">
      <div style={{ textAlign: 'center' }}>
        <img
          className="zoom-img img-fluid cursor-pointer"
          src={img2}
          alt="Shawls"
          title="EMBROIDERED PRINTED LAWN"
          onMouseLeave={() => setImg2('center1.webp')}
          onMouseEnter={() => setImg2('https://baroque.pk/cdn/shop/files/02_Banner192.jpg?v=1726834863&width=600')}
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
        <div style={{ marginTop: '10px' }}>
          <h6 style={{ margin: '5px 0', fontSize: '1rem' }}>EMBROIDERED PRINTED LAWN</h6>
          <p style={{ margin: '5px 0' }}><b>PKR 8,990.00 </b></p>
          <p style={{ margin: '5px 0' }}>UF-711</p>
        </div>
      </div>
    </Link>
  </Col>
  <Col md={6}sm={12}>
    <Link to="/Cartshop">
      <div style={{ textAlign: 'center' }}>
        <img
          className="zoom-img img-fluid cursor-pointer"
          src={img2}
          alt="Shawls"
          title="EMBROIDERED PRINTED LAWN"
          onMouseLeave={() => setImg2('center1.webp')}
          onMouseEnter={() => setImg2('https://baroque.pk/cdn/shop/files/02_Banner192.jpg?v=1726834863&width=600')}
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
        <div style={{ marginTop: '10px' }}>
          <h6 style={{ margin: '5px 0', fontSize: '1rem' }}>EMBROIDERED PRINTED LAWN</h6>
          <p style={{ margin: '5px 0' }}><b>PKR 8,990.00 </b></p>
          <p style={{ margin: '5px 0' }}>UF-711</p>
        </div>
      </div>
    </Link>
  </Col>

  <Col md={6}sm={12}>
    <Link to="/Cartshop">
      <div style={{ textAlign: 'center' }}>
        <img
          className="zoom-img img-fluid cursor-pointer"
          src={img3}
          alt="Shawls"
          title="EMBROIDERED PRINTED LAWN"
          onMouseLeave={() => setImg3('center1.webp')}
          onMouseEnter={() => setImg3('https://baroque.pk/cdn/shop/files/02_Banner192.jpg?v=1726834863&width=600')}
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
        <div style={{ marginTop: '10px' }}>
          <h6 style={{ margin: '5px 0', fontSize: '1rem' }}>EMBROIDERED PRINTED LAWN</h6>
          <p style={{ margin: '5px 0' }}>
            <b>PKR 8,990.00 </b></p>
          <p style={{ margin: '5px 0' }}>UF-711</p>
        </div>
      </div>
    </Link>
  </Col>
</Row>

              <Row>
              <Props
                imgUral="center1.webp"
                hoverImg="https://baroque.pk/cdn/shop/files/02_Banner192.jpg?v=1726834863&width=600"
                title="EMBROIDERED PRINTED LAWN"
                price="PKR 8,990.00"
                subtitle="UF-711"
              />

              <Props
                imgUral="center1.webp"
                hoverImg="https://baroque.pk/cdn/shop/files/02_Banner192.jpg?v=1726834863&width=600"
                title="EMBROIDERED PRINTED LAWN"
                price="PKR 8,990.00"
                subtitle="UF-711"
              />

              <Props
                imgUral="center1.webp"
                hoverImg="https://baroque.pk/cdn/shop/files/02_Banner192.jpg?v=1726834863&width=600"
                title="EMBROIDERED PRINTED LAWN"
                price="PKR 8,990.00"
                subtitle="UF-711"
              />

              <Props
                imgUral="center1.webp"
                hoverImg="https://baroque.pk/cdn/shop/files/02_Banner192.jpg?v=1726834863&width=600"
                title="EMBROIDERED PRINTED LAWN"
                price="PKR 8,990.00"
                subtitle="UF-711"
              />

              <Props
                imgUral="center1.webp"
                hoverImg="https://baroque.pk/cdn/shop/files/02_Banner192.jpg?v=1726834863&width=600"
                title="EMBROIDERED PRINTED LAWN"
                price="PKR 8,990.00"
                subtitle="UF-711"
              />
              <Props
                imgUral="center1.webp"
                hoverImg="https://baroque.pk/cdn/shop/files/02_Banner192.jpg?v=1726834863&width=600"
                title="EMBROIDERED PRINTED LAWN"
                price="PKR 8,990.00"
                subtitle="UF-711"
              />
              <Props
                imgUral="center1.webp"
                hoverImg="https://baroque.pk/cdn/shop/files/02_Banner192.jpg?v=1726834863&width=600"
                title="EMBROIDERED PRINTED LAWN"
                price="PKR 8,990.00"
                subtitle="UF-711"
              />
              <Props
                imgUral="center1.webp"
                hoverImg="https://baroque.pk/cdn/shop/files/02_Banner192.jpg?v=1726834863&width=600"
                title="EMBROIDERED PRINTED LAWN"
                price="PKR 8,990.00"
                subtitle="UF-711"
              />
              <Props
                imgUral="center1.webp"
                hoverImg="https://baroque.pk/cdn/shop/files/02_Banner192.jpg?v=1726834863&width=600"
                title="EMBROIDERED PRINTED LAWN"
                price="PKR 8,990.00"
                subtitle="UF-711"
              />
              <Props
                imgUral="center1.webp"
                hoverImg="https://baroque.pk/cdn/shop/files/02_Banner192.jpg?v=1726834863&width=600"
                title="EMBROIDERED PRINTED LAWN"
                price="PKR 8,990.00"
                subtitle="UF-711"
              />
              <Props
                imgUral="center1.webp"
                hoverImg="https://baroque.pk/cdn/shop/files/02_Banner192.jpg?v=1726834863&width=600"
                title="EMBROIDERED PRINTED LAWN"
                price="PKR 8,990.00"
                subtitle="UF-711"
              />
              <Props
                imgUral="center1.webp"
                hoverImg="https://baroque.pk/cdn/shop/files/02_Banner192.jpg?v=1726834863&width=600"
                title="EMBROIDERED PRINTED LAWN"
                price="PKR 8,990.00"
                subtitle="UF-711"
              />
              <Props
                imgUral="center1.webp"
                hoverImg="https://baroque.pk/cdn/shop/files/02_Banner192.jpg?v=1726834863&width=600"
                title="EMBROIDERED PRINTED LAWN"
                price="PKR 8,990.00"
                subtitle="UF-711"
              />
              <Props
                imgUral="center1.webp"
                hoverImg="https://baroque.pk/cdn/shop/files/02_Banner192.jpg?v=1726834863&width=600"
                title="EMBROIDERED PRINTED LAWN"
                price="PKR 8,990.00"
                subtitle="UF-711"
              />
              <Props
                imgUral="center1.webp"
                hoverImg="https://baroque.pk/cdn/shop/files/02_Banner192.jpg?v=1726834863&width=600"
                title="EMBROIDERED PRINTED LAWN"
                price="PKR 8,990.00"
                subtitle="UF-711"
              />
              <Props
                imgUral="center1.webp"
                hoverImg="https://baroque.pk/cdn/shop/files/02_Banner192.jpg?v=1726834863&width=600"
                title="EMBROIDERED PRINTED LAWN"
                price="PKR 8,990.00"
                subtitle="UF-711"
              />
              <Props
                imgUral="center1.webp"
                hoverImg="https://baroque.pk/cdn/shop/files/02_Banner192.jpg?v=1726834863&width=600"
                title="EMBROIDERED PRINTED LAWN"
                price="PKR 8,990.00"
                subtitle="UF-711"
              />
              <Props
                imgUral="center1.webp"
                hoverImg="https://baroque.pk/cdn/shop/files/02_Banner192.jpg?v=1726834863&width=600"
                title="EMBROIDERED PRINTED LAWN"
                price="PKR 8,990.00"
                subtitle="UF-711"
              />
              </Row>

              </Row>



           
            </Col>
          </Row>
        </Container>
      </Container>
      <Footersecound className="mt-10" />
    </>
  );
}

export default Secound;
