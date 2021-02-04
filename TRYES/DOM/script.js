
let a = document.querySelector('a');
let oldHref = a.getAttribute('href');

a.setAttribute('href', 'http://ya.ru');
a.setAttribute('title', 'go to Yandex')
a.textContent = 'Yandex';


console.log(a.attributes);



