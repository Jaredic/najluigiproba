
function klouz(event){
    const container=document.getElementById("login");
    container.classList.add('hidden');
    
}
function oupen(event){
    const container=document.getElementById('login');
    container.classList.remove('hidden');

}

document.getElementById("xbutton").addEventListener("click",klouz);

document.getElementById("logeen").addEventListener("click",oupen);