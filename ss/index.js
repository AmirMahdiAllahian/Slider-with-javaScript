'use strict'
const panelEl=document.querySelectorAll('.panel')
function removeActiveClass(){
    for(let i =0;i<panelEl.length;i++){
        panelEl[i].classList.remove('active')
    }
}
for(let i =0;i<panelEl.length;i++){

    panelEl[i].addEventListener('click',()=>{
        removeActiveClass()
        panelEl[i].classList.add('active')
    })
}
