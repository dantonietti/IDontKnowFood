class RestaurantInfo {

    constructor(){
        this.name = name
        this.rating = rating
        this.address = address
    }

    get name(){
        return this.name
    }

    get rating(){
        return this.rating
    }

    get address(){
        return this.address
    }

    set address(newAddress) {
        this.address = newAddress
    }

    set rating(newRating) {
        this.rating = newRating
    }

    set name(newName) {
        this.name = newName
    }
}