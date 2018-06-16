import React, { Component } from 'react';

class LocationBreadcrumb extends Component {
  render() {
    return (
      <div className="row">
        <div className="column">
          <h5>
            <a href="/location?country=Japan">Japan</a>
            &nbsp;>&nbsp;
            <a href="/location?country=Japan&city=Tokyo">Tokyo</a>
            &nbsp;>&nbsp;
            <a href="/location?country=Japan&city=Tokyo&ward=Edogawa-ku">
              Edogawa-ku
            </a>
            &nbsp;>&nbsp;
            <a href="/location?country=Japan&city=Tokyo&ward=Edogawa-ku&area=Nakakasai">
              Nakakasai
            </a>
          </h5>
        </div>
      </div>
    );
  }
}

export default LocationBreadcrumb;
