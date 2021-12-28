import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import {Button} from 'react-bootstrap';
import Icofont from 'react-icofont';

class CheckoutItem extends Component {

  render() {
    return (
    	<div className="gold-members p-2 border-bottom">
           <p className="text-gray mb-0 float-right ml-2">{this.props.priceUnit}{this.props.price}</p>
           <span className="count-number float-right">
               <Button variant="outline-secondary" onClick={this.props.decrease} className="btn-sm left dec"> <Icofont icon="minus" /> </Button>
               <input className="count-number-input" type="text" value={this.props.qty} readOnly/>
               <Button variant="outline-secondary" onClick={this.props.increase} className="btn-sm right inc"> <Icofont icon="icofont-plus" /> </Button>
           </span>
           <div className="media">
              <div className="mr-2"><Icofont icon="ui-press" className="text-danger food-item" /></div>
              <div className="media-body">
                 <p className="mt-1 mb-0 text-black">{this.props.itemName}</p>
              </div>
           </div>
        </div>
    );
  }
}



export default CheckoutItem;