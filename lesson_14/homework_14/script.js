//  TODO HW
// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі


let btnAsAw = document.createElement('button');
btnAsAw.innerText = 'sync with async, await';
document.body.append(btnAsAw);

let wakeup = function (isDoing) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isDoing) {
                resolve('прокинувся')
            } else {
                reject('графік порушено')
            }
        }, 5000)
    })
};

let washHands = function (isDoing) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isDoing) {
                resolve('помив руки')
            } else {
                reject('графік порушено')
            }
        }, 2000)
    })
};

let eat = function (isDoing) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isDoing) {
                resolve('поїв')
            } else {
                reject('графік порушено')
            }
        }, 750)
    })
};

let brushTeeth = function (isDoing) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isDoing) {
                resolve('почистив зуби')
            } else {
                reject('графік порушено')
            }
        }, 320)
    })
};

let takeShower = function (isDoing) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isDoing) {
                resolve('прийняв душ')
            } else {
                reject('графік порушено')
            }
        }, 2500)
    })
};

let watchVideo = function (isDoing) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isDoing) {
                resolve('подивився відео в youtube')
            } else {
                reject('графік порушено')
            }
        }, 700)
    })
};

let checkTheLesson = function (isDoing) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isDoing) {
                resolve('перегляд минулих уроків')
            } else {
                reject('графік порушено')
            }
        }, 1000)
    })
};

let makeHw = function (isDoing) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isDoing) {
                resolve('Виконав ДЗ')
            } else {
                reject('графік порушено')
            }
        }, 3000)
    })
};

let haveLunch = function (isDoing) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isDoing) {
                resolve('пообідав')
            } else {
                reject('графік порушено')
            }
        }, 250)
    })
};

let goWalk = function (isDoing) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isDoing) {
                resolve('пішов на двір')
            } else {
                reject('графік порушено')
            }
        }, 5000)
    })
};

async function todo() {
    try {
        let first = await wakeup(true);
        console.log(first);
        let second = await washHands(true);
        console.log(second);
        let third = await eat(true);
        console.log(third);
        let fourth = await brushTeeth(true);
        console.log(fourth);
        let fifth = await takeShower(true);
        console.log(fifth);
        let sixth = await watchVideo(true);
        console.log(sixth);
        let seventh = await checkTheLesson(true);
        console.log(seventh);
        let eighth = await makeHw(true);
        console.log(eighth);
        let ninth = await haveLunch(true);
        console.log(ninth);
        let tenth = await goWalk(true);
        console.log(tenth);

    } catch (e) {
        console.error(e);
    }

}

btnAsAw.onclick = function () {
    todo();
}

// with promises

let btnPr = document.createElement('button');
btnPr.innerText = 'sync with promises';
document.body.append(btnPr);

let wakeupPr = function (isDoing) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isDoing) {
                resolve('прокинувся')
            } else {
                reject('графік порушено')
            }
        }, 5000)
    })
};

let washHandsPr = function (isDoing) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isDoing) {
                resolve('помив руки')
            } else {
                reject('графік порушено')
            }
        }, 2000)
    })
};

let eatPr = function (isDoing) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isDoing) {
                resolve('поїв')
            } else {
                reject('графік порушено')
            }
        }, 750)
    })
};

let brushTeethPr = function (isDoing) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isDoing) {
                resolve('почистив зуби')
            } else {
                reject('графік порушено')
            }
        }, 320)
    })
};

let takeShowerPr = function (isDoing) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isDoing) {
                resolve('прийняв душ')
            } else {
                reject('графік порушено')
            }
        }, 2500)
    })
};

let watchVideoPr = function (isDoing) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isDoing) {
                resolve('подивився відео в youtube')
            } else {
                reject('графік порушено')
            }
        }, 700)
    })
};

let checkTheLessonPr = function (isDoing) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isDoing) {
                resolve('перегляд минулих уроків')
            } else {
                reject('графік порушено')
            }
        }, 1000)
    })
};

let makeHwPr = function (isDoing) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isDoing) {
                resolve('Виконав ДЗ')
            } else {
                reject('графік порушено')
            }
        }, 3000)
    })
};

let rideABikePr = function (isDoing) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isDoing) {
                resolve('Катнув на споті')
            } else {
                reject('графік порушено')
            }
        }, 250)
    })
};

let goWalkPr = function (isDoing) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isDoing) {
                resolve('пішов на двір')
            } else {
                reject('графік порушено')
            }
        }, 5000)
    })
};

btnPr.onclick = function () {

    wakeupPr('waking')
        .then(standFromBed => {
            console.log(standFromBed);

            return washHandsPr('washingHands');
        })
        .then(washing => {
            console.log(washing);

            return eatPr('eat dinner');
        })
        .then(eaten => {
            console.log(eaten);

            return brushTeethPr('brushing');
        })
        .then(brushed => {
            console.log(brushed);

            return takeShowerPr('taking shower');
        })
        .then(takenShower => {
            console.log(takenShower);

            return watchVideoPr('watch turnstile live concert');
        })
        .then(watched => {
            console.log(watched);

            return checkTheLessonPr('watch lesson from okten');
        })
        .then(tryToNotGetOverdose => {
            console.log(tryToNotGetOverdose);

            return makeHwPr('coding as much as i can');
        })
        .then(myBrainIsExplode => {
            console.log(myBrainIsExplode);

            return rideABikePr('go on trails');
        })
        .then(exhausted => {
            console.log(exhausted);

            return goWalkPr('adventure time');
        })
        .then(cantFeelMyLegs => {
            console.log(cantFeelMyLegs);
        })
        .catch(e => {
            console.error(e);
        });
}

// with callbacks

let btnCb = document.createElement('button');
btnCb.innerText = 'sync with callbacks';
document.body.append(btnCb);

let wakeupCb = function (isDoing = true, cb) {
    setTimeout(() => {
        if (isDoing) {
            cb(null, 'прокинувся')
        } else {
            cb('графік порушено')
        }
    }, 5000)
};

let washHandsCb = function (isDoing, cb) {
    setTimeout(() => {
        if (isDoing) {
            cb(null, 'помив руки')
        } else {
            cb('графік порушено')
        }
    }, 2000)
};

let eatCb = function (isDoing, cb) {
    setTimeout(() => {
        if (isDoing) {
            cb(null, 'поїв')
        } else {
            cb('графік порушено')
        }
    }, 750)
};

let brushTeethCb = function (isDoing, cb) {
    setTimeout(() => {
        if (isDoing) {
            cb(null, 'почистив зуби')
        } else {
            cb('графік порушено')
        }
    }, 320)
};

let takeShowerCb = function (isDoing, cb) {
    setTimeout(() => {
        if (isDoing) {
            cb(null, 'прийняв душ')
        } else {
            cb('графік порушено')
        }
    }, 2500)
};

let watchVideoCb = function (isDoing, cb) {
    setTimeout(() => {
        if (isDoing) {
            cb(null, 'подивився відео в youtube')
        } else {
            cb('графік порушено')
        }
    }, 700)
};

let checkTheLessonCb = function (isDoing, cb) {
    setTimeout(() => {
        if (isDoing) {
            cb(null, 'перегляд минулих уроків')
        } else {
            cb('графік порушено')
        }
    }, 1000)
};

let makeHwCb = function (isDoing, cb) {
    setTimeout(() => {
        if (isDoing) {
            cb(null, 'Виконав ДЗ')
        } else {
            cb('графік порушено')
        }
    }, 3000)
};

let rideABikeCb = function (isDoing, cb) {
    setTimeout(() => {
        if (isDoing) {
            cb(null, 'Катнув на споті')
        } else {
            cb('графік порушено')
        }
    }, 250)
};

let goWalkCb = function (isDoing, cb) {
    setTimeout(() => {
        if (isDoing) {
            cb(null, 'пішов на двір')
        } else {
            cb('графік порушено')
        }
    }, 5000)
};

btnCb.onclick = function () {

    wakeupCb(true, (error, done) => {
        if (error) {
            console.error(error);
            return
        }
        console.log(done)

        washHandsCb(true, (error, done) => {
            if (error) {
                console.error(error);
                return
            }
            console.log(done);

            eatCb(true, (error, done) => {
                if (error) {
                    console.error(error);
                    return
                }
                console.log(done);

                brushTeethCb(true, (error, done) => {
                    if (error) {
                        console.error(error);
                        return
                    }
                    console.log(done);

                    takeShowerCb(true, (error, done) => {
                        if (error) {
                            console.error(error);
                            return
                        }
                        console.log(done);

                        watchVideoCb(true, (error, done) => {
                            if (error) {
                                console.error(error);
                                return
                            }
                            console.log(done);

                            checkTheLessonCb(true, (error, done) => {
                                if (error) {
                                    console.error(error);
                                    return
                                }
                                console.log(done);

                                makeHwCb(true, (error, done) => {
                                    if (error) {
                                        console.error(error);
                                        return
                                    }
                                    console.log(done);

                                    rideABikeCb(true, (error, done) => {
                                        if (error) {
                                            console.error(error);
                                            return
                                        }
                                        console.log(done);

                                        goWalkCb(true, (error, done) => {
                                            if (error) {
                                                console.error(error);
                                                return
                                            }
                                            console.log(done);
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}