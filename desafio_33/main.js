const input = document.querySelector('input');
const button = document.querySelector('button');
const nameUser = document.querySelector('#name');
const photoUser = document.querySelector('#photo');
const errorUser = document.querySelector('#error');
const successUser = document.querySelector('#success');

button.addEventListener('click', async () => {

    const username = input.value;
    const resp = await fetch(`https://api.github.com/users/${username}`);
    const data = await resp.json();
    const name = data.name;
    const photo = data.avatar_url;


    if(data !== undefined && data.message === 'Not Found' && input.value == ''){
        errorUser.style.display = 'block';
        nameUser.style.display = 'block';
        photoUser.style.display = 'block';
    }else{
        errorUser.style.display = 'none';
        successUser.style.display = 'block';
        nameUser.style.display = 'block';
        photoUser.style.display = 'block';
        nameUser.innerHTML = name;
        photoUser.setAttribute('src',photo)
    }
})
    
