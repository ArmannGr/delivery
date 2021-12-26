import React, {useEffect, useState} from "react";
import {Col} from "react-bootstrap";
import CardItem from "../../common/CardItem";
import {getStorage} from "../../firebase";
import {getDownloadURL, ref} from "firebase/storage";

export function RestaurantListingItem(props) {

    function GetDownloadURLForProfileImage(){
        getDownloadURL(ref(getStorage,props.restaurantData.profileImage)).then((url)=>{
            setProfileImage(url);
        });

    }
    const [profileImage,setProfileImage] = useState('img/list/9.png');
    useEffect(()=> {
        return GetDownloadURLForProfileImage();
    }, []);


    return <Col md={4} sm={6} className="mb-4 pb-2">
        <CardItem
            title={props.restaurantData.title}
            subTitle={ props.restaurantData.tags.map(tag => "#"+tag+" ")}
            imageAlt='Product'
            image={profileImage}
            imageClass='img-fluid item-img'
            linkUrl='/detail'
            restaurantData={props.restaurantData}
            //offerText='65% off | Use Coupon OSAHAN50'
            //time='15–25 min'
            //price='$100 FOR TWO'
            showPromoted={false}
            promotedVariant='dark'
            favIcoIconColor='text-danger'
            rating={props.restaurantData.rating}
        />
    </Col>;
}
