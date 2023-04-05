const btn = document.querySelector('button');

const buttonClickHandler = (event) => {
    // event.target.disabled = true; 
    // console.log(event);
}

const anotherButtonClickHandler = () => {
    alert('This was clicked!');
}

const boundFn = buttonClickHandler.bind(this);

// btn.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
//     btn.removeEventListener('click', buttonClickHandler);
// }, 2000);

// btns.forEach(btn => {
//     btn.addEventListener('click', buttonClickHandler);
// });

window.addEventListener('scroll', event => {
    console.log(event);
});

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event);
})

const div = document.querySelector('div');

div.addEventListener('click', event => {
    console.log('CLICKED DIV');
    console.log(event);
});

btn.addEventListener('click', event => {
    event.stopPropagation();
    console.log('CLICKED BUTTON');
    console.log(event);
});

//  const listItems = document.querySelectorAll('li');

//  listItems.forEach(listItem => {
//     listItem.addEventListener('click', event => {
//         event.target.classList.toggle('highlight');
//     });
//  });

const list = document.querySelector('ul');

list.addEventListener('click', event => {
    // event.target.classList.toggle('highlight');
    event.target.closest('li').classList.toggle('highlight');
});