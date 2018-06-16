import React, { Component } from 'react';
import styled from 'styled-components';

const CheckboxContainer = styled.div.attrs({
  className: 'column'
})`
  && {
    flex-basis: 5%;
  }
`;

class SellingItem extends Component {
  render() {
    return (
      <div className="row selling-item">
        <CheckboxContainer>
          <input type="checkbox" />
        </CheckboxContainer>
        <div className="column selling-item__title">{this.props.title}</div>
        <div className="column selling-item__price">50,000円</div>
        <div className="column selling-item__photos">Photos</div>
        <div className="column selling-item__description">
          Mid-2014, 256GB SSD, 8GB RAM
        </div>
        <div className="column selling-item__condition">
          Condition: Excellent
        </div>
        <div className="column selling-item__status">Listed</div>
      </div>
    );
  }
}

export default SellingItem;
