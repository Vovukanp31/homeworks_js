// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

let User = function (id, username, surname, email, phone) {
    this.userId = id;
    this.username = username;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let arrOfUsers = [
new User(1, 'Volodymyr', 'Papeta', 'vp@gmail.com', +380932013915 ),
new User(2, 'Andrew', 'Dizhak', 'andr@gmail.com', +380932013915 ),
new User(3, 'Jack', 'Sparrow', 'sprw@gmail.com', +380932013915 ),
new User(4, 'Donald', 'Trump', 'maga@gmail.com', +380932013915 ),
new User(5, 'Peter', 'Parker', 'spMan@gmail.com', +380932013915 ),
new User(6, 'Ozzy', 'Osbourne', 'blckSbth@gmail.com', +380932013915 ),
new User(7, 'Jacoby', 'Shaddix', 'PRoach@gmail.com', +380932013915 ),
new User(8, 'Jack', 'London', 'callOfTheWld@gmail.com', +380932013915 ),
new User(9, 'Stephen', 'King', 'IT@gmail.com', +380932013915 ),
new User(10, 'Takumi', 'Fujiwara', 'trueno86@gmail.com', +380932013915 )
];

//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

arrOfUsers = arrOfUsers.filter(element => element['userId'] % 2 === 0);

//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(arrOfUsers.sort((a, b) => a['userId'] - b['userId']));

//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {

    constructor(userId, username, surname, email, phone, orders) {
        this.userId = userId;
        this.username = username;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.orders = orders;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client

let arrOfClients = [
    new Client(1, 'Volodymyr', 'Papeta', 'vp@gmail.com', +380932013915, ['books', 'toys', 'drinks']),
    new Client(2, 'Andrew', 'Dizhak', 'andr@gmail.com', +380932013915, ['videogames', 'magazines']),
    new Client(3, 'Jack', 'Sparrow', 'sprw@gmail.com', +380932013915, ['videogames', 'magazines', 'food']),
    new Client(4, 'Donald', 'Trump', 'maga@gmail.com', +380932013915, ['videogames', 'magazines']),
    new Client(5, 'Peter', 'Parker', 'spMan@gmail.com', +380932013915, ['videogames', 'magazines', 'clothes', 'food']),
    new Client(6, 'Ozzy', 'Osbourne', 'blckSbth@gmail.com', +380932013915, ['books']),
    new Client(7, 'Jacoby', 'Shaddix', 'PRoach@gmail.com', +380932013915, ['pens', 'smartphone']),
    new Client(8, 'Jack', 'London', 'callOfTheWld@gmail.com', +380932013915, ['books', 'toys', 'smartphone', 'clothes', 'shoes', 'food']),
    new Client(9, 'Stephen', 'King', 'IT@gmail.com', +380932013915, ['books', 'toys'] ),
    new Client(10, 'Takumi', 'Fujiwara', 'trueno86@gmail.com', +380932013915, ['books', 'toys', 'shoes'])
];

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(arrOfClients.sort((a, b) => a['orders'].length - b['orders'].length));