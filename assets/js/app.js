let brice = document.getElementById('briceContainer');
let langage = document.getElementById('langageContainer');
let portfolio = document.getElementById('portfolioContainer');
let contact = document.getElementById('contactContainer');

langage.style.display = "none";
portfolio.style.display = "none";

document.getElementById('brice').addEventListener('click',function () {
    brice.style.display = "block";
    langage.style.display = "none";
    portfolio.style.display = "none";
});

document.getElementById('langage').addEventListener('click',function () {
    brice.style.display = "none";
    langage.style.display = "block";
    portfolio.style.display = "none";
});

document.getElementById('portfolio').addEventListener('click',function () {
    brice.style.display = "none";
    langage.style.display = "none";
    portfolio.style.display = "block";
});

document.getElementById('contact').addEventListener('clic',function() {
    contact.style.display = "block";
});