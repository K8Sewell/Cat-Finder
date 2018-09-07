import React, { Component } from 'react'
import Cats from "./Cats.js";
import Carousel from 'nuka-carousel';
import { Card, Header, Body, Title, Text, Badge
} from 'react-bootstrap'



class Home extends Component {
  render() {

    return (
      <Carousel slidesToShow={3} cellAlign="center" cellSpacing={30} slideWidth={0.75}>

      <div className="card-body">
      <h1>Peter</h1>
      <img src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/42515955/1/?bust=1534809794"/>
      <span class="badge badge-pill badge-success">Ready for Adoption</span>
      <p className="card-text">"Some quick example text to build on the card title and make up the bulk of the card's content."</p>
      </div>



      <div className="card-body">
      <h1>Henry</h1>
      <img src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/42446360/1/?bust=1535798677&width=1439" />
      <span class="badge badge-pill badge-success">Ready for Adoption</span>
      <p className="card-text">"Some quick example text to build on the card title and make up the bulk of the card's content."</p>
      </div>


      <div className="card-body">
      <h1>Miss Willow</h1>
      <img src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/42341026/1/?bust=1535798680&width=1439" />
      <span class="badge badge-pill badge-success">Ready for Adoption</span>
      <p className="card-text">"Some quick example text to build on the card title and make up the bulk of the card's content."</p>
      </div>


      <div className="card-body">
      <h1>Opaline</h1>
      <img src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/42279160/1/?bust=1534141733" />
      <span class="badge badge-pill badge-success">Ready for Adoption</span>
      <p className="card-text">"Some quick example text to build on the card title and make up the bulk of the card's content."</p>
      </div>


      <div className="card-body">
      <h1>Yahtzee</h1>
      <img src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/42377263/1/?bust=1533345481&width=1439" />
      <span class="badge badge-pill badge-success">Ready for Adoption</span>
      <p className="card-text">"Some quick example text to build on the card title and make up the bulk of the card's content."</p>
      </div>


      <div className="card-body">
      <h1>Daisy</h1>
      <img src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/42515953/1/?bust=1534809792" />
      <span class="badge badge-pill badge-success">Ready for Adoption</span>
      <p className="card-text">"Some quick example text to build on the card title and make up the bulk of the card's content."</p>
      </div>

      </Carousel>

    );
  }
}

export default Home;
