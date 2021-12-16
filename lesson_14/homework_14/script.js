//  TODO HW
// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі

let wakeup = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('прокинувся')
        }, 5000)
    })
};

let washHands = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('помив руки')
        }, 2000)
    })
};

let eat = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('поїв')
        }, 750)
    })
};

let brushTeeth = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('почистив зуби')
        }, 320)
    })
};

let takeShower = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('прийняв душ')
        }, 2500)
    })
};

let watchVideo = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('подивився відео в youtube')
        }, 700)
    })
};

let checkTheLesson = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('перегляд минулих уроків')
        }, 1000)
    })
};

let makeHw = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Виконав ДЗ')
        }, 3000)
    })
};

let haveLunch = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('пообідав')
        }, 250)
    })
};

let goWalk = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('пішов на двір')
        }, 5000)
    })
};
async function todo() {
    let first = await wakeup();
    let second = await washHands();
    let third = await eat();
    let fourth = await brushTeeth();
    let fifth = await takeShower();
    let sixth = await watchVideo();
    let seventh = await checkTheLesson();
    let eighth = await makeHw();
    let ninth = await haveLunch();
    let tenth = await goWalk();

    console.log(first);
    console.log(second);
    console.log(third);
    console.log(fourth);
    console.log(fifth);
    console.log(sixth);
    console.log(seventh);
    console.log(eighth);
    console.log(ninth);
    console.log(tenth);
}

todo();