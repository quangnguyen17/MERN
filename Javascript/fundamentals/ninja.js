
class Ninja {
    constructor(name, health, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName = () => console.log(`Name: ${this.name}`);
    showStats = () => console.log(`Health: ${this.health}, Speed: ${this.health}, Strength: ${this.strength}`);
    drinkSake = () => this.health += 10;
}