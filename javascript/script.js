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

data();
function data() {
	fetch('../data.json')
		.then(response => response.json())
		.then(data => {
			let titles = document.getElementsByClassName('title');
			let span_weekdays = document.querySelectorAll('div.chart-single span');
			for (let j = 0; j < data.length; j++) {
				console.log(data);
				span_weekdays[j].textContent = data[j].day;
				titles[j].textContent = data[j].amount + '$';
			}
		});
}
