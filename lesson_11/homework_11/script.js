// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

let userAge = document.forms['userData'].age;
let userName = document.forms['userData'].userName;
let sendBtn = document.getElementById('sendBtn');

let signToLS = (userAge, userName) => {
    let userObj = {
        name: userName,
        age: userAge,
    }
    console.log(userName)
    localStorage.setItem('user', JSON.stringify(userObj));
}

sendBtn.onclick = function () {
    signToLS(userAge.value, userName.value);
}

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let carModel = document.forms['carInfo'].model;
let carType = document.forms['carInfo'].type;
let carVolume = document.forms['carInfo'].volume;
let sendCarInf = document.getElementById('sendCarInfoBtn');

let carInfoLoader = (model, type, volume) => {
    let carInfoArr = JSON.parse(localStorage.getItem('cars')) || [];
    carInfoArr.push({model, type, volume});
    localStorage.setItem('cars', JSON.stringify(carInfoArr));
}

sendCarInf.onclick = function () {
    carInfoLoader(carModel.value, carType.value, carVolume.value);
}