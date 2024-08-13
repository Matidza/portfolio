/* ================= MENU SHOW / HIDDEN ================= */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/* ===== MENU SHOW ===== */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
        console.log('Toggle button clicked!'); // Add this line for debugging
    });
}

/* ==== MENU HIDDEN ==== */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        console.log('Close icon clicked!'); // Add this line for debugging
    });
}

/* ==== REMOVE MENU MOBILE ==== */
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));




/*======== ACCORION SKILLS =========*/
const skillsContent = document.getElementsByClassName('skills__content'),
        skillHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
                let itemClass = this.parentNode.className

                for(let i = 0; i < skillsContent.length; i++){
                    skillsContent[i].className = 'skills__content skills__close';
                }
                if(itemClass === 'skills__content skills__close'){
                    this.parentNode.className = 'skills__content skills__open';
                }
}

skillHeader.forEach((el) => {
                el.addEventListener('click', toggleSkills)
})
/*======== QUALIFICATION TABS ========*/

/*======== SERVICE MODEL ========*/

/*====== == PORTFOLIO SWIPER  ========*/
let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
	
	keyboard: true,
});

/*======== TESTIMONIAL ========*/

/*======== SCROLL SECTION ACTIVE LINK ========*/
function scrolUp(){
    const scrollUp = document.getElementById('scrollup');
    if(this.scrollY >= 560) scrolUp.classList.add('show-scroll'); else scrolUp.classList.remove('show-scroolUp')

}
window.addEventListener('scroll', scrollTop)

/*======== CHANGE BACKGROUND HEADRER ========*/
