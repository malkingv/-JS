let data = [
    {
        img: 'images/completed-projects1.png',
        city: `Rostov-on-Don <br>LCD admiral`,
        area: '81 m2',
        time: '3,5 months',
        cost: 'Upon request'
    },
    {
        img: 'images/completed-projects2.png',
        city: 'Sochi <br>Thieves',
        area: '105 m2',
        time: '4 months',
        cost: 'Upon request'
    },
    {
        img: 'images/completed-projects3.png',
        city: 'Rostov-on-Don <br>Patriotic',
        area: '93 m2',
        time: '3 months',
        cost: 'Upon request'
    }
]

// Начальное значение при загрузке страницы
let curNum = 0;

// Определение ячеек, которые необзодимо будет изменять
const city = document.querySelector('.city').querySelector('p');
const area = document.querySelector('.area').querySelector('p');
const time = document.querySelector('.time').querySelector('p');
const cost = document.querySelector('.cost').querySelector('p');
const photo = document.querySelector('.photo').querySelector('img');

// Определение верхней навигации, установка изначального значения и описание события клика
const nav = document.querySelectorAll('li');
nav[0].classList.add('checked');
nav[0].addEventListener('click', () => changePic(0) );
nav[1].addEventListener('click', () => changePic(1) );
nav[2].addEventListener('click', () => changePic(2) );

// Определение положения стрелок и описание событий клика
const arrowLeft = document.querySelectorAll('.arrows')[0];
const arrowRight = document.querySelectorAll('.arrows')[1];

arrowLeft.addEventListener('click', () => {
    console.log('left');
    if (curNum !== 0){
        changePic(curNum - 1)
    } else {
        changePic(dots.length - 1)
    }
});
arrowRight.addEventListener('click', () => {
    console.log('right');
    if (curNum !== dots.length - 1){
        changePic(curNum + 1)
    } else {
        changePic(0)
    }
});

// Определение точек прокрутки, начального значения и описание события клика
const dots = document.querySelectorAll('.dots');
dots[0].style = 'fill: #E3B873';
dots[0].addEventListener('click', () => changePic(0) );
dots[1].addEventListener('click', () => changePic(1) );
dots[2].addEventListener('click', () => changePic(2) );

function changePic(num){
    // Очистка выделений исходного выделения
    dots.forEach(elem => elem.style = 'fill: #fff');
    nav[curNum].classList.remove('checked');

    // Перекраска навигации и dots
    nav[num].classList.add('checked');
    dots[num].style = 'fill:#E3B873';

    // Замена значений
    city.innerHTML = data[num].city;
    area.innerText = data[num].area;
    time.innerText = data[num].time;
    cost.innerText = data[num].cost;
    photo.src = data[num].img;

    // Обновление индекса текущего элемента
    curNum = num;
}