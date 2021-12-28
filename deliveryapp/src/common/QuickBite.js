import React from 'react';
import {Image,Badge,Button,Media} from 'react-bootstrap';
import PropTypes from 'prop-types'; 
import Icofont from 'react-icofont';


function QuickBite (props){

  return (
      	<div className={"p-3 border-bottom "+props.itemClass}>
		   {props.quantity===0?
	            <span className="float-right"> 
	              <Button variant='outline-secondary' onClick={()=>props.increase(props.title)} size="sm">ADD</Button>
	            </span>
	            :
	            <span className="count-number float-right">
	               <Button variant="outline-secondary" onClick={()=>props.decrease(props.title)} className="btn-sm left dec"> <Icofont icon="minus" /> </Button>
	               <input className="count-number-input" type="text" value={props.quantity} readOnly/>
	               <Button variant="outline-secondary" onClick={()=>props.increase(props.title)} className="btn-sm right inc"> <Icofont icon="icofont-plus" /> </Button>
	            </span>
	         }
		   <Media>
		      {props.image?
		      	<Image className={"mr-3 rounded-pill " +props.imageClass} src={props.image} alt={props.imageAlt} />
		      	:
		      	<div className="mr-3"><Icofont icon="ui-press" className={"text-"+props.badgeVariant+" food-item"} /></div>
		      }
		      <Media.Body>
		         <h6 className="mb-1">{props.title} {props.showBadge?<Badge variant={props.badgeVariant}>{props.badgeText}</Badge>:""}</h6>
		         <p className="text-gray mb-0">{props.priceUnit}{props.price}</p>
		      </Media.Body>
		   </Media>
		</div>
    );
}


QuickBite.propTypes = {
  itemClass:PropTypes.string,
  title: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  image: PropTypes.string,
  imageClass: PropTypes.string,
  showBadge: PropTypes.bool,
  badgeVariant: PropTypes.string,
  badgeText: PropTypes.string,
  price: PropTypes.number.isRequired,
  priceUnit: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  qty: PropTypes.number,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  getValue: PropTypes.func.isRequired
};
QuickBite.defaultProps = {
  itemClass:'gold-members',
  imageAlt:'',
  imageClass:'',
  showBadge: false,
  price: '',
  priceUnit:'$',
  showPromoted: false,
  badgeVariant: 'danger',
  restaurantID:'',
}

export default QuickBite;