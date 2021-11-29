// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }

const User = function(id, firstname, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs) {
    this.id = id;
    this.firstname = firstname;
    this.username = username;
    this.email = email;

    this.address = {
        street,
        suite,
        city,
        zipcode,

        geo: {
            lat,
            lng,
        }
    }
    this.phone = phone;
    this.website = website;

    this.company = {
        companyName,
        catchPhrase,
        bs,
    }
};

const newUser = new User(1, 'Peter', 'Spidey', 'spman@gmail.com', 'kenmare st.', 'Apt. 236', 'New York', '79018', '-37.3159', '81.1496', '1-770-736-8031 x56442', 'spiderman.com', 'sony pictures', 'with great power comes great responsibility', 'superhero');
console.log(newUser)

//
//
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

let TagInfo = function (titleOfTag, action, titleOfAttr, actionOfAttr, titleOfAttr2, actionOfAttr2, titleOfAttr3, actionOfAttr3) {
    this.titleOfTag = titleOfTag;
    this.action = action;
    this.attrs = [
        {
            titleOfAttr,
            actionOfAttr,
        },
        {
            titleOfAttr2,
            actionOfAttr2,
        },
        {
            titleOfAttr3,
            actionOfAttr3,
        }
    ];
};

let tagA = new TagInfo ('<a>', 'тег <a> устанавливает ссылку или якорь', 'accesskey', 'Активация ссылки с помощью комбинации клавиш', 'coords', 'Устанавливает координаты активной области', 'download', 'Предлагает скачать указанный по ссылке файл');
let tagDiv = new TagInfo('<div>', 'предназначен для выделения фрагмента документа с целью изменения вида содержимого', 'align', 'Задает выравнивание содержимого тега <div>', 'title', 'Добавляет всплывающую подсказку к содержимому', 'eсть только два атрибута', '');
let tagH1 = new TagInfo('<h1>', 'представляет собой наиболее важный заголовок первого уровня', 'align', 'Определяет выравнивание заголовка', '', '', '', '');
let tagSpan = new TagInfo('<span>', 'предназначен для определения строчных элементов документа', 'contenteditable', 'Сообщает, что элемент доступен для редактирования пользователем', 'contextmenu', 'Устанавливает контекстное меню для элемента', 'hidden', 'Скрывает содержимое элемента от просмотра');
let tagInput = new TagInfo('<input>', 'предназначен для создания текстовых полей, различных кнопок, переключателей и флажков', 'accept', 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов', 'checked', 'Предварительно активированный переключатель или флажок', 'disabled', 'Блокирует доступ и изменение элемента');
let tagForm = new TagInfo('<form>', 'устанавливает форму на веб-странице', 'accept-charset', 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные', 'autocomplete', 'Включает автозаполнение полей формы', 'enctype', 'Способ кодирования данных формы');
let tagOption = new TagInfo('<option>', 'определяет отдельные пункты списка, создаваемого с помощью контейнера <select>', 'disabled', 'Заблокировать для доступа элемент списка', 'label', 'Указание метки пункта списка', 'selected', 'Заранее устанавливает определенный пункт списка выделенным');
let tagSelect = new TagInfo('<select>', 'позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором', 'autofocus', 'Устанавливает, что список получает фокус после загрузки страницы', 'form', 'Связывает список с формой', 'multiple', 'Позволяет одновременно выбирать сразу несколько элементов списка');
console.log(tagA, tagDiv, tagH1, tagSpan, tagInput, tagForm, tagOption, tagSelect);
