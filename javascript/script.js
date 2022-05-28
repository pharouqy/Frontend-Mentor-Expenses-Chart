let charts = document.getElementsByClassName('chart');
let titles = document.getElementsByClassName('title');
console.log(titles);
for (let i = 0; i < charts.length; i++) {
	charts[i].addEventListener('mouseover', function () {
		charts[i].classList.add('active');
		titles[i].style.display = 'block';
	});
	charts[i].addEventListener('mouseleave', function () {
		charts[i].classList.remove('active');
		titles[i].style.display = 'none';
	});
}
