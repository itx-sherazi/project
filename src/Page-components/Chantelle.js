import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Props from '../Sub-components/Props';

import Footersecound from '../Footersecound';

function Chantelle(props) {
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



          {/* Product images section */}
          <Col sm={9}  className="text-clip mt-2">
            <Row>
              
                <Props imgUral="https://baroque.pk/cdn/shop/files/06_07e8b545-794a-41e5-bfef-19770d37ad20.jpg?v=1705561039&width=1000"  hoverImg="https://baroque.pk/cdn/shop/files/01_d6888945-3a13-4ed1-bd17-da18cde3f068.jpg?v=1705561039&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/files/13_db6af676-9e10-4618-8633-b3aebaca4521.jpg?v=1705663522&width=600"  hoverImg="https://baroque.pk/cdn/shop/files/13_db6af676-9e10-4618-8633-b3aebaca4521.jpg?v=1705663522&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/files/43_5e82d93e-481b-4c53-9c9e-72067008c85e.jpg?v=1705564154&width=1000"  hoverImg="https://baroque.pk/cdn/shop/files/37_2985eb17-832d-4738-8e32-971c51040675.jpg?v=1705664484&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/files/58_de5e11d4-73d0-4602-b519-e05c5b22818f.jpg?v=1705564218&width=1000"  hoverImg="https://baroque.pk/cdn/shop/files/52_21d554c2-8ef6-4627-9847-3a0ce772f43c.jpg?v=1705564218&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/files/81_bda2ea26-0a1f-47d0-83b1-4a65bda38160.jpg?v=1705564318&width=1000"  hoverImg="https://baroque.pk/cdn/shop/files/71_734b1969-aebe-442c-a05e-1f7c6add575d.jpg?v=1705736543&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/files/103_967139cc-d1e1-46d5-8e3e-a82c7aaccb7e.jpg?v=1705564352&width=1000"  hoverImg="https://baroque.pk/cdn/shop/files/93_d9e554c5-5fa6-47ec-8845-5f1107d03181.jpg?v=1705734823&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/files/13_db6af676-9e10-4618-8633-b3aebaca4521.jpg?v=1705663522&width=600"  hoverImg="https://baroque.pk/cdn/shop/files/13_db6af676-9e10-4618-8633-b3aebaca4521.jpg?v=1705663522&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/files/06_07e8b545-794a-41e5-bfef-19770d37ad20.jpg?v=1705561039&width=1000"  hoverImg="https://baroque.pk/cdn/shop/files/01_d6888945-3a13-4ed1-bd17-da18cde3f068.jpg?v=1705561039&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/files/43_5e82d93e-481b-4c53-9c9e-72067008c85e.jpg?v=1705564154&width=1000"  hoverImg="https://baroque.pk/cdn/shop/files/37_2985eb17-832d-4738-8e32-971c51040675.jpg?v=1705664484&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/files/58_de5e11d4-73d0-4602-b519-e05c5b22818f.jpg?v=1705564218&width=1000"  hoverImg="https://baroque.pk/cdn/shop/files/52_21d554c2-8ef6-4627-9847-3a0ce772f43c.jpg?v=1705564218&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
              
            </Row>
          </Col>
        </Row>
        </Container>
      </Container>
      <Footersecound className="mt-10" />
    </>
  );
}

export default Chantelle;
