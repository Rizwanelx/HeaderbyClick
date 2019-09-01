const divElem = document.querySelector('.batman');


divElem.addEventListener('mouseover',(e)=>{
    e.target.style.borderRight = "50px solid red ",
    e.target.style.borderLeft = "50px solid red "
    e.target.style.borderTop = "50px solid red "
    e.target.style.borderBottom = "50px solid red "

});
