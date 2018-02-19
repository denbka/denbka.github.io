window.onload = function () {

		////// circle's height control
	var photo = document.getElementById('sectin_1_photo');
	var properties = document.querySelectorAll('.section_2_1 li .inner');

	photo.style.height = photo.offsetWidth + 'px';
	properties.forEach(function(p){
		p.style.display = 'flex';
		p.style.height = p.offsetWidth + 'px';
	})
	window.onresize = function () {
		photo.style.height = photo.offsetWidth + 'px';
		properties.forEach(function(p){
			p.style.display = 'flex';
			p.style.height = p.offsetWidth + 'px';
		})
	}


		////// scroll to
	var menuItems = document.querySelectorAll('.main_menu>.inner>ul>li');
	var headerButton = document.querySelector('.header>.bottom_panel>.arrow');

	var AboutAs = document.getElementById('section_1');
	var services = document.querySelector('.service_1');
	var whyWeAre = document.querySelector('.section_2_1');
	var portfolio = document.querySelector('.portfolio');

	//top menu
	menuItems[0].addEventListener('click', function () {
		$(window).scrollTo(services, 800);
	});

	menuItems[1].addEventListener('click', function () {
		$(window).scrollTo(whyWeAre, 800);
	});

	menuItems[2].addEventListener('click', function () {
		$(window).scrollTo(portfolio.offsetTop - 50, 800);
	});

	menuItems[3].addEventListener('click', function () {
		$(window).scrollTo(AboutAs.offsetTop-50, 800);
	});

	headerButton.addEventListener('click', function () {
		$(window).scrollTo(services, 800);
	});



		////// hamburger menu
	var menu = document.querySelector('.wrapper .main_menu .inner');
	var menuLists = document.querySelectorAll('.main_menu > .inner li');
	var menuCheckbox = document.querySelector('.main_menu #menu-checkbox');

	var hamburger = document.querySelector('.hamburger');
	hamburger.addEventListener('click', function() {
			menuCheckbox.checked = !menuCheckbox.checked
	})

	menuLists.forEach(function(l){
		l.addEventListener('click', function() {
			menu.classList.add('.hidden')
			menuCheckbox.checked = false;
		})
	})

	window.addEventListener('resize', function() {
		if (window.innerWidth > 910) {
			menu.classList.add('.hidden')
		};
		gridHeightControl()
	});

	// portfolio grid height
	var gridElements = document.querySelectorAll(".portfolio-grid .grid-el");
	var maxHeight = 0;
	gridHeightSet();

	function gridHeightSet() {
		maxHeight = 0;
		gridElements.forEach(function(e) {
			if (e.offsetHeight > maxHeight) {
				maxHeight = e.offsetHeight
			}
		});
		gridElements.forEach(function(e) {
			e.style.height = maxHeight + 'px'
		})
	}

	function gridHeightControl() {
		maxHeight = 0;
		gridElements.forEach(function(e) {
			e.style.height = "auto";
		});

		var timeOut = setTimeout(function () {
			gridElements.forEach(function(e) {
				if (e.offsetHeight > maxHeight) {
					maxHeight = e.offsetHeight
				}
			});

			gridElements.forEach(function(e) {
				e.style.height = maxHeight + 'px'
			})
		}, 1);

	}
}// window.onload
