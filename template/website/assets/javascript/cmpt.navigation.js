var website = window.website || {};
website.component = website.component || {};

website.component.Navigation = function () {
	var publics = this;

	publics.name = "navigation";

    publics.loadAnimation = function () {
        var start = document.querySelector("." + publics.name + "--start button"),
            documentation = document.querySelector("." + publics.name + "--documentation button");

        setTimeout(function () {
            start.classList.add("is-loaded");
            setTimeout(function () {
                documentation.classList.add("is-loaded");
            }, 1000);
        }, 2000);
    };

    publics.openSubMenu = function () {
        var chevrons = document.querySelectorAll("." + publics.name + "--menu .fa");

        Array.prototype.forEach.call(chevrons, function (chevron) {
            var menu = chevron.nextElementSibling;
            
            chevron.addEventListener("click", function () {
                chevron.classList.toggle("fa-chevron-down");
                chevron.classList.toggle("fa-chevron-up");
                menu.classList.toggle("is-opened");
            });
        });
    };

    publics.toggleMenu = function () {
        var toggle = document.getElementsByClassName(publics.name + "--menu--toggle")[0],
            inner = document.getElementsByClassName(publics.name + "--menu--list--inner")[0],
            menu = document.getElementsByClassName(publics.name + "--menu")[0];

        inner.addEventListener("click", function () {
            menu.classList.remove("is-opened");
            setTimeout(function () {
                menu.classList.remove("is-front");
            }, 1000);
        });
        toggle.addEventListener("click", function () {
            if (menu.classList.value.indexOf("is-opened") === -1) {
                menu.classList.add("is-front");
                setTimeout(function () {
                    menu.classList.add("is-opened");
                }, 0);
            } else {
                menu.classList.remove("is-opened");
                setTimeout(function () {
                    menu.classList.remove("is-front");
                }, 1000);
            }
        });
    };

    publics.goTo = function () {
        var start = document.querySelectorAll("." + publics.name + "--start button, ." + publics.name + "--home--logo"),
            menu = document.querySelectorAll("." + publics.name + "--home--back, ." + publics.name + "--menu a, ." + publics.name + "--documentation button"),
            download = document.querySelector("." + publics.name + "--home--back span");

        download.addEventListener("click", function (e) {
            e.preventDefault();
            website.scrollSmoothTo(200, 4);
        });
        Array.prototype.forEach.call(start, function (item) {
            item.addEventListener("click", function () {
                website.scrollSmoothTo(5, 4);
            });
        });
        Array.prototype.forEach.call(menu, function (item) {
            item.addEventListener("click", function () {
                website.scrollSmoothTo(350, 4);
            });
        });
    };

	publics.init = function () {
		publics.loadAnimation();
        publics.openSubMenu();
        publics.toggleMenu();
        publics.goTo();
	};
};