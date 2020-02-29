

class Ninja {
    constructor(name, health = 10, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName = () => console.log(`Name: ${this.name}`);
    showStats = () => console.log(`Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    drinkSake() { this.health += 10 };
}

const ninja1 = new Ninja('Hyabusa');
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();

class Sensei extends Ninja {
    constructor(name, wishdom = 10) {
        super(name, 200, 10, 10);
        this.wishdom = wishdom;
    }

    speakWishdom = () => {
        super.drinkSake();
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWishdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"