function myfunction(){
    const x = 1024; //min value
    const y = 9999; // max value
    const deg = Math.floor(Math.random() * (x - y)) + y;

    document.getElementById('box').style.transform = "rotate("+deg+"deg)";

    const element = document.getElementById('mainbox');
    element.classList.remove('animate');
    setTimeout(function(){
        element.classList.add('animate');
    }, 5000);
}
