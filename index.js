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

// Определение верхней навигации и задание событий клика
const nav = document.querySelectorAll('.radio');
nav[0].addEventListener('click', () => {
    nav[0].querySelector('input').toggleAttribute('checked');
    changePic(0);
});
nav[1].addEventListener('click', () => {
    nav[1].querySelector('input').toggleAttribute('checked');
    changePic(1);

});
nav[2].addEventListener('click', () => {
    nav[2].querySelector('input').toggleAttribute('checked');
    changePic(2);
});

// Определение положения стрелок и задание событий клика
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


// Определение точек прокрутки и задача события клика
const dots = document.querySelectorAll('.dots');
dots[0].style = 'fill: #E3B873';

dots[0].addEventListener('click', (elem) => {
    changePic(0);
});
dots[1].addEventListener('click', (elem) => {
    changePic(1);
});
dots[2].addEventListener('click', elem => {
    changePic(2);
});

function changePic(num){
    // Очистка выделений исходного выделения
    dots.forEach(elem => elem.style = 'fill: #fff');
    nav.forEach(elem => elem.querySelector('input').removeAttribute('checked'));

    // Назначение нового "слайда"
    nav[num].querySelector('input').toggleAttribute('checked');
    dots[num].style = 'fill:#E3B873';
    city.innerHTML = data[num].city;
    area.innerText = data[num].area;
    time.innerText = data[num].time;
    cost.innerText = data[num].cost;
    photo.src = data[num].img;

    curNum = num;
}


