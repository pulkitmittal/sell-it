import React, { Component } from 'react';
import App from '../../components/app/App';
import Container from '../../components/container/Container';
import LocationBreadcrumb from './components/location-breadcrumb/LocationBreadcrumb';
import SellingItem from './components/selling-item/SellingItem';

class Listing extends Component {
  render() {
    return (
      <App>
        <Container>
          <LocationBreadcrumb />
          <div className="row">
            <div className="column">
              <h3>Moving Out - Urgent Sale - Appliances, Furniture</h3>
            </div>
          </div>
          <div className="row offset-bottom-1">
            <div className="column column-33">
              Seller: <a href="/seller/pulkit-mittal">Pulkit Mittal</a>
            </div>
            <div className="column column-40">
              Member Since: August 25, 2017
            </div>
            <div className="column">Rating: 4.5</div>
          </div>
          <div className="row">
            <div className="column">
              Created: 2 days ago<br />
              Updated: 5 hours ago<br />
              Views: 200
            </div>
            <div className="column column-66">
              Tags: Appliances, Furniture, Household, Refrigerator, Apple,
              Macbook, Washing Machine
            </div>
          </div>
          <br />
          <div className="row">
            <div className="column">
              <button>Express Interest</button>
              <button className="offset-left-1">Contact Seller</button>
            </div>
          </div>
          <br />
          <SellingItem title="Apple Macbook Pro" />
          <SellingItem title="Haier Washing Machine" />
          <SellingItem title="Panasonic Refrigerator" />
        </Container>
      </App>
    );
  }
}

export default Listing;
