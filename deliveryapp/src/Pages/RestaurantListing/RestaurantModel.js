class RestaurantModel{
    constructor(name,deliveryHours,openingHours,profileImage,tags,canDeliver, stars, address, menu) {
        this.name = name;
        this.deliveryHours =deliveryHours ;
        this.openingHours = openingHours;
        this.profileImage = profileImage;
        this.tags = tags;
        this.canDeliver = canDeliver;
        this.stars = stars;
        this.address = address;
        this.menu = menu;
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
        )
    }
}