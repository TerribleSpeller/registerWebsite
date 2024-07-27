function openNav() {
    const dropdownMenu = document.getElementById('dropdownnavmenu');
    if (dropdownMenu.classList.contains('show')) {
        dropdownMenu.classList.remove('show');
        dropdownMenu.classList.add('hide');
        //TODO: Make background appear properly
        dropdownMenu.classList.remove('hide');

        setTimeout(() => {
            dropdownMenu.style.display = 'none';
            dropdownMenu.classList.remove('hide');
        }, 1000); // for upward transition
    } else {
        dropdownMenu.style.display = 'block';
        dropdownMenu.classList.remove('hide');
        setTimeout(() => {
            dropdownMenu.classList.add('show');
        }, 10);
    }
}

document.querySelector('button[aria-label="toggler-menu"]').onclick = openNav;

const dropdownMenu1 = document.getElementById('about');
const dropdownMenu2 = document.getElementById('devs');
const dropdownMenu3 = document.getElementById('service');
const bg1 = document.getElementById('about-bg')
const bg2 = document.getElementById('devs-bg')
const bg3 = document.getElementById('service-bg')


function openBSDCity() {
    if (dropdownMenu1.classList.contains('show')) {
        dropdownMenu1.classList.remove('show');

        setTimeout(() => {
            dropdownMenu1.style.display = 'none';
            console.log("Clicked but in SetTimeout.")

        }, 500);
        console.log("Clicked but second time.")
        bg1.style.opacity = 0;
    } else {
        dropdownMenu1.style.display = 'block';
        dropdownMenu2.classList.remove('show');
        setTimeout(() => {
            dropdownMenu2.style.display = 'none';
        }, 500);
        dropdownMenu3.classList.remove('show');
        setTimeout(() => {
            dropdownMenu3.style.display = 'none';
        }, 500);
        setTimeout(() => {
            dropdownMenu1.classList.add('show');
        }, 10); // Slight delay to trigger the CSS transition
        console.log("clicked")
        bg1.style.opacity = 1;


    }

}

document.querySelector('button[aria-label="BSDButton"]').onclick = openBSDCity;

function openDev() {
    if (dropdownMenu2.classList.contains('show')) {
        dropdownMenu2.classList.remove('show');
        setTimeout(() => {
            dropdownMenu2.style.display = 'none';
        }, 500);
        bg2.style.opacity = 0;
    } else {
        dropdownMenu2.style.display = 'block';
        dropdownMenu1.classList.remove('show');
        setTimeout(() => {
            dropdownMenu1.style.display = 'none';
        }, 500);
        dropdownMenu3.classList.remove('show');
        setTimeout(() => {
            dropdownMenu3.style.display = 'none';
        }, 500);
        setTimeout(() => {
            dropdownMenu2.classList.add('show');
        }, 10);
        bg2.style.opacity = 1;
    }
}

document.querySelector('button[aria-label="DevButton"]').onclick = openDev;

function openServices() {
    if (dropdownMenu3.classList.contains('show')) {
        dropdownMenu3.classList.remove('show');
        setTimeout(() => {
            dropdownMenu3.style.display = 'none';
        }, 500);
        bg3.style.opacity = 0;
    } else {
        dropdownMenu3.style.display = 'block';
        dropdownMenu2.classList.remove('show');
        setTimeout(() => {
            dropdownMenu2.style.display = 'none';
        }, 500);
        dropdownMenu1.classList.remove('show');
        setTimeout(() => {
            dropdownMenu1.style.display = 'none';
        }, 500);
        setTimeout(() => {
            dropdownMenu3.classList.add('show');
        }, 10);
        bg3.style.opacity = 1;
    }
}

document.querySelector('button[aria-label="ServeButton"]').onclick = openServices;

function openSubmenuService() {
    const submenu = document.getElementById('service-submenu');
    const bg = document.getElementById('service-bg-submenu');
    if (submenu.classList.contains('show')) {
        submenu.classList.remove('show');
        submenu.classList.add('hide');
        setTimeout(() => {
            submenu.style.display = 'none'; // Ensure it's not clickable
        }, 500); // Match the transition duration
        bg.style.opacity = 0;
    } else {
        submenu.style.display = 'block'; // Make it visible before adding 'show' for the transition to take effect
        submenu.classList.remove('hide');
        setTimeout(() => {
            submenu.classList.add('show');
        }, 10); // Short delay to ensure 'display: block' is applied first
        bg.style.opacity = 1;
    }
}

document.querySelector('button[aria-label="Service-submenu"]').onclick = openSubmenuService

document.querySelector('button[aria-label="service-submenu-button"]').onclick = openSubmenuService

function openSubMenuAboutUs() {
    const submenu = document.getElementById('aboutus-submenu');
    const bg = document.getElementById('aboutus-bg-submenu');
    if (submenu.classList.contains('show')) {
        submenu.classList.remove('show');
        submenu.classList.add('hide');
        setTimeout(() => {
            submenu.style.display = 'none'; // Ensure it's not clickable
        }, 500); // Match the transition duration
        bg.style.opacity = 0;
    } else {
        submenu.style.display = 'block'; // Make it visible before adding 'show' for the transition to take effect
        submenu.classList.remove('hide');
        setTimeout(() => {
            submenu.classList.add('show');
        }, 10); // Short delay to ensure 'display: block' is applied first
        bg.style.opacity = 1;
    }
}

document.querySelector('button[aria-label="About-submenu"]').onclick = openSubMenuAboutUs

document.querySelector('button[aria-label="aboutus-submenu-button"]').onclick = openSubMenuAboutUs

function openSubMenuDev() {
    const submenu = document.getElementById('devs-submenu');
    const bg = document.getElementById('devs-bg-submenu');
    if (submenu.classList.contains('show')) {
        submenu.classList.remove('show');
        submenu.classList.add('hide');
        setTimeout(() => {
            submenu.style.display = 'none'; // Ensure it's not clickable
        }, 500); // Match the transition duration
        bg.style.opacity = 0;
    } else {
        submenu.style.display = 'block'; // Make it visible before adding 'show' for the transition to take effect
        submenu.classList.remove('hide');
        setTimeout(() => {
            submenu.classList.add('show');
        }, 10); // Short delay to ensure 'display: block' is applied first
        bg.style.opacity = 1;
    }
}

document.querySelector('button[aria-label="Devs-submenu"]').onclick = openSubMenuDev

document.querySelector('button[aria-label="dev-submenu-button"]').onclick = openSubMenuDev

//Search Button mechanism 

function openSearch() {
    const search = document.getElementById('search-bar');
    const elementsWithBothClasses = document.querySelectorAll('.nav-item.false');
    const elementstoReAttach = document.querySelectorAll('.nav-item.active-search');


    if (search.classList.contains('false')) {
        search.classList.remove('false');
        search.classList.add('is-open');
        //console.log("Is open added")
        elementsWithBothClasses.forEach(element => {
            //console.log(element); 
            element.classList.remove('false');
            element.classList.add('active-search')
        });
    } else {
        search.classList.remove('is-open');
        search.classList.add('false');
        //console.log("Removed")
        elementstoReAttach.forEach(element => {
            //console.log(element); 
            element.classList.remove('active-search');
            element.classList.add('false')
        });
    }

}

document.querySelector('button[aria-label="Toggler-search"]').onclick = openSearch;

document.addEventListener('DOMContentLoaded', function() {
    var clickableDiv = document.getElementById('IndoPage');
    clickableDiv.addEventListener('click', function() {
        window.location.href = 'id/index.html';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var clickableDiv = document.getElementById('EngPage');
    clickableDiv.addEventListener('click', function() {
        window.location.href = '../index.html';
    });
});

function updateMap() {
    var location = document.getElementById('locationInput').value;
    var embedBaseURL = 'https://maps.google.com/maps';
    var query = '?q=BSD%20' + encodeURIComponent(location);
    var mapTwo = document.getElementById('maptesttwo');
    var queryresult = "https://maps.google.com/maps" + query + "?t=&z=13&ie=UTF8&iwloc=&output=embed&ll=-6.29447675559863, 106.67423599242338"
    mapTwo.src = queryresult
    console.log(queryresult)
}

//Workaround

document.getElementById('locationInput').onkeydown = function(e){
    if (!e) e = window.event;
    var keyCode = e.code || e.key;
    if (keyCode == 'Enter'){
        updateMap();
    }
  }

  //Mobile Search

  
function openSearchMobile() {
    const search = document.getElementById('search-bar-mobile');
    console.log("Succress!")
    if (search.classList.contains('false')) {
        search.classList.remove('false');
        search.classList.add('is-open');
        //console.log("Is open added")
    } else {
        search.classList.remove('is-open');
        search.classList.add('false');
        //console.log("Removed")

    }
}

document.querySelector('button[aria-label="toggler-search-mobile"]').onclick = openSearchMobile;

// For index.html

