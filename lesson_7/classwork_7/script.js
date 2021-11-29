// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

let Car = function (model, manufacturer, yearOfProduce, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.yearOfProduce = yearOfProduce;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info = function () {
        for (const key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key} - ${this[key]}`);
            }
        }
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    };
    this.changeYear = function (newValue) {
        this.yearOfProduce = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver
    };
};
let car = new Car('civic EK9', 'Honda', 1997, 225, 1600);
car.drive();
car.info();
car.increaseMaxSpeed(20);
car.changeYear(2000);

//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class CarCreator {
    constructor(model, manufacturer, yearOfProduce, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearOfProduce = yearOfProduce;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
        this.drive = function () {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
        };
        this.info = function () {
            for (const key in this) {
                if (typeof this[key] !== 'function') {
                    console.log(`${key} - ${this[key]}`);
                }
            }
        };
        this.increaseMaxSpeed = function (newSpeed) {
            this.maxSpeed += newSpeed;
        };
        this.changeYear = function (newValue) {
            this.yearOfProduce = newValue;
        };
        this.addDriver = function (driver) {
            this.driver = driver
        };
    }
};

let car2 = new CarCreator('Silvia S13', 'Nissan', 1995, 235, 2400);
car2.drive();
car2.info();
car2.increaseMaxSpeed(40);
car2.changeYear(1998);


//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

let Cinderella = function (username, age, footSize) {
    this.username = username;
    this.age = age;
    this.footSize = footSize;
};

let arrOfCinderellas = [
    new Cinderella('lisa', 19, 33),
    new Cinderella('Julia', 21, 35),
    new Cinderella('Angelina', 20, 35),
    new Cinderella('lisa', 18, 33),
    new Cinderella('Allie', 23, 36),
    new Cinderella('Angelina', 20, 35),
    new Cinderella('Allie', 23, 36),
    new Cinderella('Abby', 20, 34),
    new Cinderella('Allie', 23, 36),
    new Cinderella('Julia', 21, 35),
];

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name, age, foundShoeSize) {
        this.name = name;
        this.age = age;
        this.foundShoeSize = foundShoeSize;
    }
};

let prince1 = new Prince('Vincent', 22, 34);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const arrOfCinderella of arrOfCinderellas) {
        if (arrOfCinderella['footSize'] === prince1['foundShoeSize']) {
            console.log(`${arrOfCinderella.username} approach to ${prince1['name']}`);
        }
}
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let findedCinderella = arrOfCinderellas.find(index => index['footSize'] === prince1['foundShoeSize']);
console.log(findedCinderella);
