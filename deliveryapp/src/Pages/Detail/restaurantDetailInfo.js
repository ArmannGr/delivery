import Icofont from "react-icofont";
import {Badge} from "react-bootstrap";
import {Link} from "react-router-dom";
import React from "react";
import PrettifyAddress from "../../utils/AddressPrettifier";
import PrettifyOpeningHours from "../../utils/OpeningHoursPrettifier";

export default function RestaurantDetailInfo(props) {
    return <div id="restaurant-info"
                className="bg-white rounded shadow-sm p-4 mb-4">

        <h5 className="mb-4">Restaurant Info</h5>

        <p className="mb-3">
            {PrettifyAddress(props.restaurant.address)}
        </p>

        {props.restaurant.phoneNumber &&
            <p className="mb-2 text-black"><Icofont
                icon="phone-circle text-primary mr-2"/>
                {props.restaurant.phoneNumber}
            </p>
        }
        {props.restaurant.email &&
            <p className="mb-2 text-black"><Icofont
                icon="email text-primary mr-2"/>
                {props.restaurant.email}
            </p>
        }

        <p className="mb-2 text-black"><Icofont
            icon="clock-time text-primary mr-2"/>

            {PrettifyOpeningHours(props.restaurant.openingHours)}

            {/*<Badge variant="success" className='ml-1'> OPEN NOW </Badge>*/}
        </p>

        <hr className="clearfix"/>
        <h5 className="mt-4 mb-4">More Info</h5>
        <p className="mb-3">{props.restaurant.tags.map(tag => " "+tag + ",")}</p>

        {/*<div className="border-btn-main mb-4">*/}

        {/*    <Link className="border-btn text-success mr-2" to="#"><Icofont*/}
        {/*        icon="check-circled"/> Breakfast</Link>*/}

        {/*</div>*/}
    </div>;
}