class ReviewModel{
    constructor(username,rating,review,profileImage,uid) {
        this.username = username;
        this.rating =rating ;
        this.review = review;
        this.profileImage = profileImage;
        this.uid = uid;
    }
}

export const reviewConverter = {
    toFirestore: function (review){
        return {
            username:review.username,
            rating:review.rating,
            review:review.review,
            profileImage:review.profileImage,
            uid:review.uid,

        }
    },
    fromFirestore(snapshot, options) {
        const data = snapshot.data(options);
        return new ReviewModel(
            data.username,
            data.rating,
            data.review,
            data.profileImage,
            data.uid,
        )
    }
}