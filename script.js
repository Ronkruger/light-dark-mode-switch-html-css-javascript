//for toggle dark/lightmode
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function() {
  this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});

//for current year for footer
const footer = document.getElementById('footer')
let date = new Date().getFullYear();
footer.innerHTML=`<p>${date} Ron el.</p>`

