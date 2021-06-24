const Pi = Math.PI

class Circle {
    constructor(radius) {
        this.radius = radius
    }
// ==================================

    get diameter() {
        return radius * 2
    }

    get circumference() {
        return Pi * this.radius
    }

    get area() {
        //return (this.radius * this.radius) * Pi
        return ( Math.pow(this.radius, 2) ) * Pi
        // M E T H O D ▲ base expression to the specified power
    }

// ==================================

    set diameter(inputValue) {
        this.radius = inputValue
    }

}