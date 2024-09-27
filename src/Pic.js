
import Carousel from 'react-bootstrap/Carousel';
import { Link, Outlet } from 'react-router-dom';

function Pic() {
  return (
    <>
   <Carousel className='hidden md:block' interval={10000} controls={true} indicators={true}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://baroque.pk/cdn/shop/files/website_banner_86b73f0b-d424-41c4-91d9-ca96af3cef62.jpg?v=1727074952&width=1600"
          alt="First slide"
          style={{ height: '500px', objectFit: 'cover' }} // Control height here
        />
        <div className="absolute inset-x-0 bottom-0 flex justify-center mb-8">
          <Link to="/secound">
            <button className="bg-black text-white py-2 px-4 rounded">Shop Now</button>
          </Link>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="slide1.webp"
          alt="Second slide"
          style={{ height: '500px', objectFit: 'cover' }} // Control height here
        />
        <div className="absolute inset-x-0 bottom-0 flex justify-center mb-8">
          <Link to="/secound">
            <button className="bg-black text-white py-2 px-4 rounded">Shop Now</button>
          </Link>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="slide3.jpeg"
          alt="Third slide"
          style={{ height: '500px', objectFit: 'cover' }} // Control height here
        />
        <div className="absolute inset-x-0 bottom-0 flex justify-center mb-8">
          <Link to="/secound">
            <button className="bg-black text-white py-2 px-4 rounded">Shop Now</button>
          </Link>
        </div>
      </Carousel.Item>
    </Carousel>
    
     {/* small screen carousal */}

     <div className="block md:hidden">
        <img
          className="d-block w-100"
          src="https://baroque.pk/cdn/shop/files/mobilebanner_70_cb5cd1a5-fe68-41e7-8039-1208585bc01e.jpg?v=1727074952&width=600"
          alt="Single image"
          style={{ height: '500px', objectFit: 'cover' }} // Control height here
        />
        <div className="absolute inset-x-0 bottom-0 flex justify-center mb-8">
          <Link to="/secound">
            <button className="bg-black text-white py-2 px-4 rounded">Shop Now</button>
          </Link>
        </div>
      </div>
        </>
  );
}

export default Pic;
