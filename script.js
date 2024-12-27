document.getElementById('submitButton').addEventListener('click', function() {
    var inputText = document.getElementById('inputText');
    var textValue = inputText.value;

    if (textValue.match(/^[А-Яа-я\s]{1,25}$/))
    {
        window.location.href = 'empty.html';
    }
    else{
        alert("Некорректный ввод")
    }
});

function toggleNav(x) {
    x.classList.toggle("change");
    let sideNav = document.getElementById("mySidenav");
    let button = document.querySelector(".side-menu-button"); 
    if (sideNav.style.width === "250px") {
        closeNav();
        button.style.left = "0px"; 
    } else {
        openNav();
        button.style.left = "250px"; 
    }
}

function openNav() {
document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
document.getElementById("mySidenav").style.width = "0px";
}

document.addEventListener('DOMContentLoaded', function(){
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = function(){
        particlesJS("snow", {
            "particles": {
                "number": {
                    "value": 200,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "opacity": {
                    "value": 0.7,
                    "random": false,
                    "anim": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "enable": false
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "enable": true,
                    "speed": 5,
                    "direction": "bottom",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 300,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": false
                    },
                    "onclick": {
                        "enable": false
                    },
                    "resize": false
                }
            },
            "retina_detect": true
        });
    }
    document.head.append(script);
});