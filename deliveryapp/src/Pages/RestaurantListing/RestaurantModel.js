class RestaurantModel{
    constructor(name,deliveryHours,openingHours,profileImage,tags,canDeliver, stars, address, menu, id, backgroundImage) {
        this.name = name;
        this.deliveryHours =deliveryHours ;
        this.openingHours = openingHours;
        this.profileImage = profileImage;
        this.tags = tags;
        this.canDeliver = canDeliver;
        this.stars = stars;
        this.address = address;
        this.menu = menu;
        this.id = id;
        this.backgroundImage= backgroundImage;
    }
}

export const restaurantConverter = {
    toFirestore: function (restaurant){
        return {
            name:restaurant.name,
            deliveryHours:restaurant.deliveryHours,
            openingHours:restaurant.openingHours,
            profileImage:restaurant.profileImage,
            tags:restaurant.tags,
            canDeliver:restaurant.canDeliver,
            stars:restaurant.stars,
            address:restaurant.address,
            menu:restaurant.menu,
            id:restaurant.id,
            backgroundImage:restaurant.backgroundImage

        }
    },
    fromFirestore(snapshot, options) {
        const data = snapshot.data(options);
        return new RestaurantModel(
            data.name,
            data.deliveryHours,
            data.openingHours,
            data.profileImage,
            data.tags,
            data.canDeliver,
            data.stars,
            data.address,
            data.menu,
            snapshot.id,
            data.backgroundImage
        )
    }
}