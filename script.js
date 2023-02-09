const xmark = document.querySelector('.icon-xmark');
const topInfo = document.querySelector('.top-info');
const infoCircle = document.querySelector('.icon-info-circle');


infoCircle.addEventListener('click',  ()=>{
    topInfo.style.display = "flex"
})
xmark.addEventListener('click', ()=>{
   topInfo.style.display = "none"
})