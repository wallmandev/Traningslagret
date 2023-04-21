const burger = document.getElementById('burger')
const nav = document.getElementById('main-nav')

burger.addEventListener('click', function(e){
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});

document.querySelectorAll('nav').forEach(nav => nav.addEventListener('click', () => {
	burger.classList.remove('is-open');
	nav.classList.remove('is-open');
}))