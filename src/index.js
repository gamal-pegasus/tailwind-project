const mode=document.getElementById('mode');
const icon=document.getElementById('icon');
const btn=document.getElementById('zoomid');
const zoom=document.getElementById('zoom');

mode.addEventListener('change',function(){
    document.documentElement.classList.toggle('dark');
    icon.classList.toggle('fa-sun');
    icon.classList.toggle('fa-moon');
})


btn.addEventListener('click',function(){
    zoom.classList.add('scale-110');

    setTimeout(()=>{
        zoom.classList.remove('scale-110');
    },1000);
    
    


})