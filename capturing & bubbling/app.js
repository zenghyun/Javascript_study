// 예시 1

// const lists = document.querySelectorAll('li');

// const activeHandler = event => {
//     event.target.classList.toggle('active');
// };

// lists.forEach(list => {
//     list.addEventListener('click', activeHandler);
// });

// 예시 2 

const ul = document.querySelector('ul'); 

const activeHandler = event => {
    event.target.closest('li').classList.toggle('active');
}

ul.addEventListener('click', activeHandler);