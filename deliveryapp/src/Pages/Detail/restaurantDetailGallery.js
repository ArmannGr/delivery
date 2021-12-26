import GalleryCarousel from "../../common/GalleryCarousel";
import React from "react";

export default function RestaurantDetailGallery(props) {
    return <div className='position-relative'>
        <GalleryCarousel restaurant={props.restaurant} />
    </div>;
}