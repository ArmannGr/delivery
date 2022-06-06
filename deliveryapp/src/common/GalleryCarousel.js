import React from 'react';
import OwlCarousel from 'react-owl-carousel3';
import { ReactPhotoCollage } from "react-photo-collage";
import {Col, Image} from "react-bootstrap";


class GalleryCarousel extends React.Component {
   constructor(props){
    super(props);
    this.state = {
      itemscount: 0,
      showing:0
    }; 
    this.Carousel
        = React.createRef();
  }



	render() {
        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
        };
        const img = {
            width: "auto",
            height: "100px"
        };
        const setting = {
            width: '530px',
            height: ['250px', '170px'],
            layout: [1, 4],
            photos: [
                { source: this.props.restaurant.image1 },
                { source: this.props.restaurant.backgroundImage },
                { source: this.props.restaurant.image3 },
                { source: this.props.restaurant.image4 },
                { source: this.props.restaurant.image2},
                { source: this.props.restaurant.profileImage },


            ],
            showNumOfRemainingPhotos: true
        };
    	return (

              <ReactPhotoCollage {...setting} />



	    );
	}
}

const options={
	responsive: {
        0:{
            items:2,
        },
        764:{
            items:2,
        },
        765: {
          items: 1,
        },
        1200: {
          items: 1,
        },
      },
      lazyLoad: true,
      loop: true,
      autoplay: true,
      autoplaySpeed: 1000,
      dots: false,
      nav: true,
      navText:["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
}

export default GalleryCarousel;