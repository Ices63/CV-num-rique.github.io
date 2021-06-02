let brice = document.getElementById('briceContainer');
let langage = document.getElementById('careerContainer');
let skills = document.getElementById('skillsContainer');
let contact = document.getElementById('contactContainer');

langage.style.display = "none";
skills.style.display = "none";

document.getElementById('brice').addEventListener('click',function () {
    brice.style.display = "block";
    langage.style.display = "none";
    skills.style.display = "none";
});

document.getElementById('langage').addEventListener('click',function () {
    brice.style.display = "none";
    langage.style.display = "block";
    skills.style.display = "none";
});

document.getElementById('skills').addEventListener('click',function () {
    brice.style.display = "none";
    langage.style.display = "none";
    skills.style.display = "block";
});

document.getElementById('contact').addEventListener('clic',function() {
    contact.style.display = "block";
});