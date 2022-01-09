class RestaurantModel{
    constructor(name,deliveryHours,openingHours,profileImage,tags,canDeliver, stars, address, menu, id, backgroundImage,
                openingHoursNoon, image1, image2, image3, image4) {
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
        this.openingHoursNoon = openingHoursNoon;
        this.image1 = image1;
        this.image3 = image3;
        this.image2 = image2;
        this.image4 = image4;
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
            backgroundImage:restaurant.backgroundImage,
            openingHoursNoon: restaurant.openingHoursNoon,
            image1: restaurant.image1,
            image3: restaurant.image3,
            image2: restaurant.image2,
            image4: restaurant.image4,

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
            data.backgroundImage,
            data.openingHoursNoon,
            data.image1,
            data.image3,
            data.image2,
            data.image4,
        )
    }
}