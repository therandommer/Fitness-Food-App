import 'bootstrap/dist/css/bootstrap.min.css';


// creating the carousel to dispaly pictures of the body transformation for the users who have used our app.

export default function Homepage() {
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
              <img src="../assets/2nd-image.png" alt="Image 1" />
            </div>
            <div className="carousel-item">
              <img src="image2.jpg" alt="Image 2" />
            </div>
            <div className="carousel-item">
              <img src="image3.jpg" alt="Image 3" />
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










