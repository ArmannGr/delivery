import ItemsCarousel from "../../common/ItemsCarousel";
import React from "react";

export function CheckoutRecommendation() {
    return <div className="bg-white rounded shadow-sm p-4 mb-4">
        <h6 className="mb-3">You may also like</h6>
        <ItemsCarousel/>
    </div>;
}