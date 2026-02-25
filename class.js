// class in js are blueprints for creating objects. They provide a way to define the structure and behavior of objects.

// class syntax
class Car{
    constructor(brand, model, year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    // method to display car information
    displayInfo(){
       return  console.log(`This car is a car of year ${this.year} ,brand ${this.brand}, model ${this.model}.`);
    }
    accelerate(){
        return console.log(`${this.brand} ${this.model} is moving very fast.`);
    }
    brake(){
        return console.log(`${this.brand} ${this.model} is slowing down.`);
    }
    upgradeCar(){
        this.year += 1;
        return console.log(`The car has been upgraded to year ${this.year}.`);
    }
}

// creating an instance of the Car class
let myCar = new Car("Toyota", "Camry", 2020);
myCar.displayInfo();
myCar.accelerate();
myCar.brake();
myCar.upgradeCar();