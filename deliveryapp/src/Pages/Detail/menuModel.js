class MenuModel{
    constructor(image,name,price,id) {
        this.image = image;
        this.name =name ;
        this.price = price;
        this.id = id;
    }
}

export const menuConverter = {
    toFirestore: function (menuItem){
        return {
            image:menuItem.image,
            name:menuItem.name,
            price:menuItem.price,
            id:menuItem.id,
        }
    },
    fromFirestore(snapshot, options) {
        const data = snapshot.data(options);
        return new MenuModel(
            data.image,
            data.name,
            data.price,
            snapshot.id,
        )
    }
}