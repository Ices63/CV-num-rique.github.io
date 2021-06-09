let brice = document.getElementById('briceContainer');
let langage = document.getElementById('careerContainer');
let skills = document.getElementById('skillsContainer');
let contact = document.getElementById('contactContainer');

langage.style.display = "none";
skills.style.display = "none";
contact.style.display = "none";

document.getElementById('brice').addEventListener('click',function () {
    brice.style.display = "block";
    langage.style.display = "none";
    skills.style.display = "none";
    contact.style.display = "none";
});

document.getElementById('langage').addEventListener('click',function () {
    brice.style.display = "none";
    langage.style.display = "block";
    skills.style.display = "none";
    contact.style.display = "none";
});

document.getElementById('skills').addEventListener('click',function () {
    brice.style.display = "none";
    langage.style.display = "none";
    skills.style.display = "block";
    contact.style.display = "none";
});

document.getElementById('contact').addEventListener('click',function() {
    brice.style.display = "none";
    langage.style.display = "none";
    skills.style.display = "none";
    contact.style.display = "block";
});

// ***** ***** ****** Gauges de compétences ***** ****** ***** //

var canvas;
var ctx;
var grad;
var skillLevel;
// var x = 0;

canvas = document.getElementById('HTML');
gaugeSetup();

canvas = document.getElementById('Bootstrap');
gaugeSetup();

canvas = document.getElementById('CSS');
gaugeSetup();

canvas = document.getElementById('JavaScript');
gaugeSetup();

function gaugeSetup() {

    ctx = canvas.getContext('2d');

    canvas.width = 150;
    canvas.height = 150;

    // anim();

    // function anim() {

        // requestAnimationFrame(anim);
        // ctx.clearRect(0,0,canvas.width,canvas.height);

    grad = ctx.createLinearGradient(0,0,100,120);
    grad.addColorStop(0,"cyan");
    grad.addColorStop(0.5,"cornflowerblue");
    grad.addColorStop(0.7,"cornflowerblue");
    grad.addColorStop(1,"blue");
        
    ctx.beginPath();
    ctx.arc(75, 75, 75, 0, 2 * Math.PI);
    ctx.fillStyle = grad;
    ctx.fill();
    ctx.stroke();

        // x = x + 0.001;
        
    // }

    function Level() {

        ctx.fillStyle = "grey";
        ctx.strokeStyle = "grey";

        ctx.beginPath();
        ctx.moveTo(75, 75);
        ctx.arc(75, 75, 75, skillLevel, 1 * Math.PI);
        ctx.fill();
        ctx.stroke();
        
    }

    if (canvas.id == "HTML") {
        skillLevel = 1;
        Level();
        
    }

    if (canvas.id == "Bootstrap") {
        skillLevel = 0;
        Level();

    }

    if (canvas.id == "CSS") {
        skillLevel = 1;
        Level();

    }

    if (canvas.id == "JavaScript") {
        skillLevel = 1;
        Level();

    }

    ctx.fillStyle = "black";
    ctx.strokeStyle = "black";

    // les trois lignes faisant la séparation des niveaux
    ctx.beginPath();
    ctx.moveTo(25, 0);
    ctx.lineTo(125, 150);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 75);
    ctx.lineTo(150, 75);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(25, 150);
    ctx.lineTo(125, 0);
    ctx.lineWidth = 5;
    ctx.stroke();

    // le coin cacher de la jauge
    ctx.beginPath();
    ctx.moveTo(75, 75);
    ctx.rotate(1);
    ctx.arc(75, 75, 75, 0, 0.85 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.rotate(-1);

    // le cercle centrale où positionner le texte
    ctx.beginPath();
    ctx.arc(75, 75, 45, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.font = "15pt Noticia Text, serif";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(canvas.id, canvas.width/2, canvas.height/2+5);

};
