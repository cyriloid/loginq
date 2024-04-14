const form = document.querySelector('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const password = document.getElementById('password').value;

    if (password === '596') {
        location.href = "final.html";
    } else {
        alert("No darling, it's not pomegranate. What do you actually think it is? Give another go");
    }
})