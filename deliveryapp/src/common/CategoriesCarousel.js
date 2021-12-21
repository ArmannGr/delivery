import React from 'react';
import OwlCarousel from 'react-owl-carousel3';
import ProductBox from '../home/ProductBox';

class CategoriesCarousel extends React.Component {

	render() {
    	return (
	      <OwlCarousel nav loop {...options} className="owl-carousel-category owl-theme">
	         <div className="item">
	         	<ProductBox 
	         		boxClass='osahan-category-item'
	         		title='Baguette'
	         		counting='156'
			   		image='../../public/img/cake-1850011_640.jpg'
			   		imageClass='img-fluid'
			   		imageAlt='carousel'
			   		linkUrl='#'
			   	/>
	         </div>
	         <div className="item">
	         	<ProductBox 
	         		boxClass='osahan-category-item'
	         		title='Pizza'
	         		counting='120'
			   		image='img/list/2.png'
			   		imageClass='img-fluid'
			   		imageAlt='carousel'
			   		linkUrl='#'
			   	/>
	         </div>
	         <div className="item">
	         	<ProductBox 
	         		boxClass='osahan-category-item'
	         		title='Wraps'
	         		counting='130'
			   		image='img/list/3.png'
			   		imageClass='img-fluid'
			   		imageAlt='carousel'
			   		linkUrl='#'
			   	/>
	         </div>
	         <div className="item">
	         	<ProductBox 
	         		boxClass='osahan-category-item'
	         		title='Vegetarian'
	         		counting='120'
			   		image='img/list/4.png'
			   		imageClass='img-fluid'
			   		imageAlt='carousel'
			   		linkUrl='#'
			   	/>
	         </div>
	         <div className="item">
	         	<ProductBox 
	         		boxClass='osahan-category-item'
	         		title='Hamburgers'
	         		counting='958'
			   		image='img/list/6.png'
			   		imageClass='img-fluid'
			   		imageAlt='carousel'
			   		linkUrl='#'
			   	/>
	         </div>
	         <div className="item">
	         	<ProductBox 
	         		boxClass='osahan-category-item'
	         		title='Dessert'
	         		counting='56'
			   		image='https://firebasestorage.googleapis.com/v0/b/delivery-c718a.appspot.com/o/categoryImg%2Fcake-1850011_640.jpg?alt=media&token=6fb991b9-42bb-435d-b4c2-9beef3e9d9df'
			   		imageClass='img-fluid'
			   		imageAlt='carousel'
			   		linkUrl='#'
			   	/>
	         </div>
	         <div className="item">
	         	<ProductBox 
	         		boxClass='osahan-category-item'
	         		title='Chicken'
	         		counting='40'
			   		image='deliveryapp/public/bilder/fried-chicken-4977369_640.jpg'
			   		imageClass='img-fluid'
			   		imageAlt='carousel'
			   		linkUrl='#'
			   	/>
	         </div>
	         <div className="item">
	         	<ProductBox 
	         		boxClass='osahan-category-item'
	         		title='Indian'
	         		counting='156'
			   		image='img/list/9.png'
			   		imageClass='img-fluid'
			   		imageAlt='carousel'
			   		linkUrl='#'
			   	/>
	         </div>
			  <div className="item">
				  <ProductBox
					  boxClass='osahan-category-item'
					  title='Fingerfood'
					  counting='156'
					  image='img/list/9.png'
					  imageClass='img-fluid'
					  imageAlt='carousel'
					  linkUrl='#'
				  />
			  </div>
			  <div className="item">
				  <ProductBox
					  boxClass='osahan-category-item'
					  title='Noodels'
					  counting='156'
					  image='img/list/9.png'
					  imageClass='img-fluid'
					  imageAlt='carousel'
					  linkUrl='#'
				  />
			  </div>
			  <div className="item">
				  <ProductBox
					  boxClass='osahan-category-item'
					  title='Salad'
					  counting='156'
					  image='img/list/9.png'
					  imageClass='img-fluid'
					  imageAlt='carousel'
					  linkUrl='#'
				  />
			  </div>
			  <div className="item">
				  <ProductBox
					  boxClass='osahan-category-item'
					  title='Meat'
					  counting='156'
					  image='img/list/9.png'
					  imageClass='img-fluid'
					  imageAlt='carousel'
					  linkUrl='#'
				  />
			  </div>
	      </OwlCarousel>
	    );
	}
}

const options={
	responsive: {
        0:{
            items:3,
        },
        600:{
            items:4,
        },
        1000: {
          items: 6,
        },
        1200: {
          items: 8,
        },
      },
      loop: true,
      lazyLoad: true,
      autoplay: true,
      dots: false,
      autoplaySpeed: 1000,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      nav: true,
      navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
}

export default CategoriesCarousel;