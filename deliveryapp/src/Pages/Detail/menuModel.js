class MenuModel{
    constructor(image,name,price) {
        this.image = image;
        this.name =name ;
        this.price = price;
    }
}

export const menuConverter = {
    toFirestore: function (review){
        return {
            image:review.image,
            name:review.name,
            price:review.price,
        }
    },
    fromFirestore(snapshot, options) {
        const data = snapshot.data(options);
        return new MenuModel(
            data.image,
            data.name,
            data.price,
        )
    }
}