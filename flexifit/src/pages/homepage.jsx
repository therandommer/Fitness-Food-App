import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
// import CarouselImage from '../components/CarouselImages';


// creating the carousel to dispaly pictures of the body transformation for the users who have used our app.

const Homepage = () => {
  return (
    <div>
      <div className="container">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/components/Carouselimages/" alt="Man's transformation" />
            </div>
            <div className="carousel-item">
              <img src="/components/Carouselimages/1stFemaleTransfomomation.png" alt="running lady slims down" />
            </div>
            <div className="carousel-item">
              <img src="/components/Carouselimages/2ndFemaleTransfomomation.png" alt="Lady in Dinner gown" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

// import Carousel from 'react-bootstrap/Carousel';
// import CarouselImage from '../components/CarouselImages';

// function Homepage() {
//   return (
//     <Carousel>
//       <Carousel.Item interval={1000}>
//         <CarouselImage text="First slide" />
//         <Carousel.Caption>
//           <h3>Yes You Can..</h3>
//           <p> LOst 60kg using FlexiFit App in 3month. Awesome routine.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item interval={500}>
//         <CarouselImage text="Second slide" />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage text="Third slide" />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default Homepage;








