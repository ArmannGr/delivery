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
			   		image='https://firebasestorage.googleapis.com/v0/b/delivery-c718a.appspot.com/o/categoryImg%2Fbaguette-g44bebcf2b_1920-2.jpg?alt=media&token=c2082d4f-ae80-485d-9b0a-e715c2148b90'
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
			   		image='https://firebasestorage.googleapis.com/v0/b/delivery-c718a.appspot.com/o/categoryImg%2Fpizza-3007395_640.jpg?alt=media&token=d7efa936-92e3-4d4b-9e4f-a3e558a3fcfa'
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
			   		image='https://firebasestorage.googleapis.com/v0/b/delivery-c718a.appspot.com/o/categoryImg%2Fwrap-6305489_640.jpg?alt=media&token=71db537b-b15f-468b-9127-ead21e1e903b'
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
			   		image='https://firebasestorage.googleapis.com/v0/b/delivery-c718a.appspot.com/o/categoryImg%2Fitalian-cuisine-gb2afb067d_1920-2.jpg?alt=media&token=05245f22-812c-4b84-a7ab-b6b6cfa536f6'
			   		imageClass='img-fluid'
			   		imageAlt='carousel'
			   		linkUrl='#'
			   	/>
	         </div>
	         <div className="item">
	         	<ProductBox 
	         		boxClass='osahan-category-item'
	         		title='Burger'
	         		counting='958'
			   		image='https://firebasestorage.googleapis.com/v0/b/delivery-c718a.appspot.com/o/categoryImg%2Fabstract-ga8206eb5d_640-2.jpg?alt=media&token=786f15ca-159e-4471-a4eb-984c9c39d1bd'
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
			   		image='https://firebasestorage.googleapis.com/v0/b/delivery-c718a.appspot.com/o/categoryImg%2Ffried-chicken-4977369_640.jpg?alt=media&token=38f3c3e4-8ab8-40c2-9999-b450753defba'
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
			   		image='https://firebasestorage.googleapis.com/v0/b/delivery-c718a.appspot.com/o/categoryImg%2Findian-food-3856044_640.jpg?alt=media&token=57d7f03e-ea9b-45c7-8fb9-8be5c51f62c3'
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
					  image='https://firebasestorage.googleapis.com/v0/b/delivery-c718a.appspot.com/o/categoryImg%2Fcrunchy-g0929bdfa4_1920-2.jpg?alt=media&token=e94cbcd5-c00d-4fc4-997e-6b74b73e9ce1'
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
					  image='https://firebasestorage.googleapis.com/v0/b/delivery-c718a.appspot.com/o/categoryImg%2Fchicken-chowmein-3380834_640.jpg?alt=media&token=b810b242-953b-435a-bcbb-68a6332ac4ea'
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
					  image='https://firebasestorage.googleapis.com/v0/b/delivery-c718a.appspot.com/o/categoryImg%2Fsalad-g135286a71_640-2.jpg?alt=media&token=c1e8fae2-1a60-4f31-8ba2-5e45af62b615'
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
					  image='https://firebasestorage.googleapis.com/v0/b/delivery-c718a.appspot.com/o/categoryImg%2Fsteak-g5e85badba_1920-2.jpg?alt=media&token=95d9b8d6-3a39-4a31-ac4b-b66c55afeadd'
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