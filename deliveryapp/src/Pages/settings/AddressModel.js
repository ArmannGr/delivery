class AddressModel{
    constructor(name, address, area, email, postalCode, streetNumber) {
        this.name = name;
        this.address = address;
        this.area = area;
        this.email = email;
        this.postalCode = postalCode;
        this.streetNumber = streetNumber;
    }
}

export const addressConverter = {
    toFirestore: function (address){
        return {
            name:address.name,
            address:address.address,
            area:address.area,
            email:address.email,
            postalCode:address.postalCode,
            streetNumber:address.streetNumber
        }
    },
    fromFirestore(snapshot, options) {
        const data = snapshot.data(options);
        return new AddressModel(
            data.name,
            data.address,
            data.area,
            data.email,
            data.postalCode,
            data.streetNumber
        )
    }
}