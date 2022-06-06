import React from 'react';
import {Link} from 'react-router-dom';
import {Image, Media, OverlayTrigger, Tooltip} from 'react-bootstrap';
import StarRating from '../common/StarRating';



function Review(props) {



    // let renObjData = props.otherUsers.map((data, idx) => {
    //     return (
    //         <OverlayTrigger
    //             key={idx}
    //             placement="top"
    //             overlay={
    //                 <Tooltip id={"tooltip-top" + idx}>
    //                     {data.name}
    //                 </Tooltip>
    //             }
    //         >
    //             <Link to={data.url}><Image src={data.image} className="total-like-user rounded-pill"/></Link>
    //         </OverlayTrigger>
    //     );
    // });

    return (
        <div className="reviews-members pt-4 pb-4">
            <Media>
                <Link to="#"><Image alt={props.imageAlt} src={props.review.profileImage} className="mr-3 rounded-pill"/></Link>
                <Media.Body>
                    <div className="reviews-members-header">
                        <div className="star-rating float-right">
                            <StarRating fontSize={14} disabled={true} star={props.review.rating} getValue={() => {
                            }}/>
                        </div>
                        <h6 className="mb-1"><Link className="text-black" to='#'>{props.review.username}</Link>
                        </h6>
                        <p className="text-gray">{'missing'}</p>
                    </div>
                    <div className="reviews-members-body">
                        <p>{props.review.review}</p>
                    </div>
                    {/*<div className="reviews-members-footer">*/}
                    {/*   <Link className="total-like" to="#"><Icofont icon="thumbs-up" /> {this.props.likes}</Link> <Link className="total-like" to="#"><Icofont icon="thumbs-down" /> {this.props.dislikes}</Link> */}
                    {/*   <span className="total-like-user-main ml-2" dir="rtl">*/}
                    {/*     /!*{renObjData}*!/*/}
                    {/*   </span>*/}
                    {/*</div>*/}
                </Media.Body>
            </Media>
        </div>
    );
}


export default Review;