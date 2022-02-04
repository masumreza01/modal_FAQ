
// Modal
const modal_button = document.getElementById('modal_button');
const new_modal = document.getElementById('new_modal');
const close = document.getElementById('close');

modal_button.addEventListener('click', (e)=>{
    e.preventDefault();
    
    new_modal.classList.add('active')
})
close.addEventListener('click', (e)=>{
    e.preventDefault();
   
    new_modal.classList.remove('active')

})








// ----------FAQ------------------------------------

const FAQ_Header = document.querySelectorAll('.FAQ_Header');

FAQ_Header.forEach(item => {
    item.addEventListener('click', ()=> {
        item.classList.toggle('active');
       if (item.classList.contains('active')) {
           item.nextElementSibling.style.height = '100px'
       } else {
        item.nextElementSibling.style.height = '0px'
       }
    });
});