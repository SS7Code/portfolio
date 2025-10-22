document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById('year').textContent=new Date().getFullYear();
});
function handleSubmit(e){e.preventDefault();alert('Thanks — this is a demo contact form.');}