const wrapper = document.querySelector('.wrapper');
const login = document.querySelector('.login-link');
const register = document.querySelector('.register-link');
const btn_popup = document.querySelector('.btn-login');
const icon_close = document.querySelector('.icon-close');
register.addEventListener('click', ()=>{
wrapper.classList.add('active');
});
login.addEventListener('click',()=>{
wrapper.classList.remove('active');
});
btn_popup.addEventListener('click',()=>{
wrapper.classList.add('active-popup');
});
icon_close.addEventListener('click',()=>{
wrapper.classList.remove('active-popup');
});
