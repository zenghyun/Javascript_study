const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

const userId = 'u123';

const user = {
    name: 'Zenghyun',
    age: 30,
    hobbies: ['Sports', 'Cooking']
};

storeBtn.addEventListener('click', () => {
    // localStorage.setItem('userId', userId);
    sessionStorage.setItem('userId', userId);
    localStorage.setItem('user', JSON.stringify(user));
});
retrBtn.addEventListener('click', () => {
    // const extractedId = localStorage.getItem('userId');
    const extractedId = sessionStorage.getItem('userId');
    const extractedUser = JSON.parse(localStorage.getItem('user'));
    if(extractedId) {
        console.log("🚀  extractedId", extractedId)
        console.log("🚀  extractedUser", extractedUser)
    } else {
        console.log('Could not found Id');
    }
    
});