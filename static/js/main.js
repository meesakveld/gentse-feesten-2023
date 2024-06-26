import { addElementToDOM, backToRoot, randomNumber, addEventlistenerToElement, addEventlistenerToElements, toggleClassToClasslistOfElement, toggleClassToClasslistOfElements, checkPageURL, checkDayFromURL } from './exports/helpers.js';

function checkPage(id) {
    const currentPage = window.location.pathname.split('/').pop()
    if (currentPage === id + '.html') {
        return 'active'
    }
}

const randomNumberValue = randomNumber(6) + 1
const randomLetter = {
    number: randomNumberValue,
    letter: 'GENTSE'[randomNumberValue - 1]
}

function addHTMLForHeader(randomLetter) {
    const html = `
        <nav class="relative max-width">
            <div class="nav--left">
                <a href="${backToRoot()}index.html" class="nav__logo"><img src="${backToRoot()}static/img/logos/GF-logo-2023-${randomLetter.number}-${randomLetter.letter}.svg" alt="logo"></a>
                <ul class="nav__ul">
                    <li class="${checkPage('news')}" id="news"><a href="${backToRoot()}news.html"><strong>Nieuws</strong></a></li>
                    <li class="${checkPage('day')}" id="day"><a href="${backToRoot()}events/day.html"><strong>Programma</strong></a></li>
                    <li><a href="#"><strong>Praktisch</strong></a></li>
                    <li><a href="#"><strong>Live parkeerinfo</strong></a></li>
                </ul>
            </div>
            <div class="nav--right">
                <ul>
                    <li><a href="#"><strong>Hoe naar GF23</strong></a></li>
                </ul>
                <div>
                    <button class="nav__languages hover--red">
                        <p><strong>NL</strong></p>
                        <svg class="nav__languages__chevron" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                            <path
                                d="m15.7 10 8.261 8.26a1.5 1.5 0 1 1-2.12 2.12l-.001-.001-6.14-6.138-6.14 6.139a1.5 1.5 0 1 1-2.122-2.121l8.261-8.26z" />
                        </svg>
                    </button>
                    <div class="nav__languages--options">
                        <a href="#" class="hover--red--background">EN</a>
                        <a href="#" class="hover--red--background">FR</a>
                    </div>
                </div>
                <a class="nav__search hover--red" href="${backToRoot()}search.html"><svg xmlns="http://www.w3.org/2000/svg" width="32"
                        height="32">
                        <path
                            d="m31.474 28.951-6.043-6.025a14.08 14.08 0 0 0 3.004-8.708A14.22 14.22 0 0 0 4.163 4.164a14.215 14.215 0 0 0-3.082 15.495 14.217 14.217 0 0 0 13.136 8.777 14.072 14.072 0 0 0 8.708-3.004l6.025 6.043a1.77 1.77 0 0 0 1.262.526 1.776 1.776 0 0 0 1.261-.526 1.77 1.77 0 0 0 .526-1.261 1.77 1.77 0 0 0-.526-1.262zM3.554 14.218a10.659 10.659 0 0 1 6.583-9.851 10.667 10.667 0 0 1 11.621 2.311 10.66 10.66 0 0 1 2.311 11.621 10.663 10.663 0 0 1-20.514-4.081z" />
                    </svg></a>
                <button class="full-menu__btn hover--red">
                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="32">
                        <path
                            d="M0 0h54.825v3.404H0V0zm11.072 14.298h32.681v3.404H11.072v-3.404zM0 28.596h54.825V32H0v-3.404z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="53" height="32"><path d="m53.378 29.173-23.79-13.215 23.64-13.131L51.658 0 26.259 14.108 1.722.478.152 3.305l22.777 12.652L.001 28.693l1.57 2.827 24.688-13.713 25.55 14.192z"/></svg>
                </button>
            </div>
        </nav>

        <!-- Full menu -->
        <div class="full-menu max-width">
            <div class="full-menu__nav">
                <ul class="full-menu__nav__menu">
                    <li id="news" class="${checkPageURL("news")}"><a href="${backToRoot()}news.html"><strong>Nieuws</strong></a></li>
                    <li id="day" class="${checkPageURL("day")}">
                        <a class="relative" href="${backToRoot()}events/day.html">
                            <strong>Programma</strong>
                            <svg class="days-arrow" xmlns="http://www.w3.org/2000/svg" width="85" height="32"><path d="m68.393 0-3.434 3.808 9.845 8.881H.001v5.129h74.828l-9.865 8.848 3.424 3.817 16.946-15.2z"/></svg>
                        </a>
                    </li>
                    <li><a href="#"><strong>Praktisch</strong></a></li>
                    <li><a href="#"><strong>Live parkeerinfo</strong></a></li>
                    <li><a href="#"><strong>Hoe naar GF23</strong></a></li>
                </ul>
                <ul class="full-menu__nav__days">
                    <li class="${checkDayFromURL("14")}"><a href="${backToRoot()}events/day.html?day=14"><strong>Vrijdag 14 juli</strong></a></li>
                    <li class="${checkDayFromURL("15")}"><a href="${backToRoot()}events/day.html?day=15"><strong>Zaterdag 15 juli</strong></a></li>
                    <li class="${checkDayFromURL("16")}"><a href="${backToRoot()}events/day.html?day=16"><strong>Zondag 16 juli</strong></a></li>
                    <li class="${checkDayFromURL("17")}"><a href="${backToRoot()}events/day.html?day=17"><strong>Maandag 17 juli</strong></a></li>
                    <li class="${checkDayFromURL("18")}"><a href="${backToRoot()}events/day.html?day=18"><strong>Dinsdag 18 juli</strong></a></li>
                    <li class="${checkDayFromURL("19")}"><a href="${backToRoot()}events/day.html?day=19"><strong>Woensdag 19 juli</strong></a></li>
                    <li class="${checkDayFromURL("20")}"><a href="${backToRoot()}events/day.html?day=20"><strong>Donderdag 20 juli</strong></a></li>
                    <li class="${checkDayFromURL("21")}"><a href="${backToRoot()}events/day.html?day=21"><strong>Vrijdag 21 juli</strong></a></li>
                    <li class="${checkDayFromURL("22")}"><a href="${backToRoot()}events/day.html?day=22"><strong>Zaterdag 22 juli</strong></a></li>
                    <li class="${checkDayFromURL("23")}"><a href="${backToRoot()}events/day.html?day=23"><strong>Zondag 23 juli</strong></a></li>
                    <li><a href="${backToRoot()}events/day.html?day=14"><strong>Programma</strong></a></li>
                </ul>
            </div>
            <div class="campagne-img">
                <img src="${backToRoot()}static/img/logos/campagne-${randomLetter.number}-${randomLetter.letter}.png">
            </div>
        </div>
    `

    addElementToDOM(html, 'header')
}

function addHTMLForFooter(randomLetter) {
    const html = `
        <section class="footer__cta relative">
            <div class="footer__cta__media max-width">
                <a href="#" class="btn arrow--right">
                    <h2>Spot onze foto's</h2>
                    <div class="arrow right">
                        <svg class="arrow-right" viewBox="0 0 1197 269" aria-hidden="true"><path d="M-0.159,111.093l639.756,0l-85.15,-76.855l29.643,-32.816l144.777,131.216l-143.608,129.655l-30.23,-32.081l84.144,-76.315l-639.756,0l0.424,-42.804Z" fill="#000"></path></svg>
                    </div>
                </a>
                <br>
                <a href="#" class="btn arrow--left">
                    <div class="arrow left">
                        <svg class="arrow-left" viewBox="0 0 1197 269" aria-hidden="true"><path d="M-0.159,111.093l639.756,0l-85.15,-76.855l29.643,-32.816l144.777,131.216l-143.608,129.655l-30.23,-32.081l84.144,-76.315l-639.756,0l0.424,-42.804Z" fill="#000"></path></svg>
                    </div>
                    <h2>Aanschouw onze video's</h2>
                </a>
            </div>

            <div class="footer__cta__mail max-width">
                <img src="${backToRoot()}static/img/logos/campagne-${randomLetter.number}-${randomLetter.letter}.png">
                <div class="keep-in-touch">
                    <h2>Blijf op de hoogte</h2>
                    <p>Schrijf je in op de nieuwsbrief van de Gentse Feesten</p>
                    <form>
                        <input type="email" name"user_email" required placeholder="Jouw e-mailadres">
                        <input type="submit" value="Inschrijven">
                    </form>
                    <p class="disclaimer">De Stad Gent zal de persoonsgegevens die je invult met respect voor jouw <a href="#">privacy</a> behandelen.</p>
                </div>
            </div>
            
        </section>
        
        <acticle class="footer__black">

            <section class="footer__top__container max-width relative">
                <p class="date-circle"><strong>14 - 23 juli</strong></p>

                <div class="footer__top">
                    <a href="${backToRoot()}index.html" class="footer__logo"><img src="${backToRoot()}static/img/logos/GF-logo-2023-${randomLetter.number}-${randomLetter.letter}.svg" alt="logo"></a>
                    <div class="socials__container">
                        <a href="#"><svg class="social hover--red--background" xmlns="http://www.w3.org/2000/svg" width="32" height="32"><path d="M17.49 25v-8.21h2.95l.44-3.2h-3.39v-2.043c0-.927.276-1.558 1.697-1.558L21 9.988V7.126A25.196 25.196 0 0 0 18.445 7h-.091.005c-2.614 0-4.403 1.491-4.403 4.23v2.36H11v3.2h2.956V25h3.535z"/></svg></a>
                        <a href="#"><svg class="social hover--red--background" xmlns="http://www.w3.org/2000/svg" width="32" height="32"><path d="M11.034 12c2.228 0 4.034 1.791 4.034 4 0 2.21-1.806 4-4.034 4S7 18.21 7 16c0-2.209 1.806-4 4.034-4zM25 16c0 2.21-1.806 4-4.034 4s-4.034-1.79-4.034-4c0-2.209 1.806-4 4.034-4S25 13.791 25 16z"/></svg></a>
                        <a href="#"><svg class="social hover--red--background" xmlns="http://www.w3.org/2000/svg" width="32" height="32"><path d="M26.8 12.1c0-.3-.3-1.9-1.1-2.7C25 8.7 24 8.3 23 8.2h-.2C19.8 8 16.2 8 16 8s-3.8 0-6.8.2H9c-1 0-1.9.5-2.6 1.2-.8.8-1.1 2.4-1.1 2.7-.2 1.2-.3 2.4-.3 3.6v1.6c0 1.2.1 2.4.2 3.6 0 .3.3 1.8 1.1 2.7.8.7 1.7 1.1 2.7 1.1H9.3c1.7.2 6.4.2 6.6.2.2 0 3.8 0 6.8-.2h.2c1 0 1.9-.5 2.6-1.2.8-.8 1.1-2.4 1.1-2.7.1-1.2.2-2.4.2-3.6v-1.6c.2-1.1.1-2.3 0-3.5zm-13.7 7.8v-7.4l7.1 3.7-7.1 3.7z"/></svg></a>
                    </div>
                </div>
                <div class="footer__top">
                    <p class="footer__hashtag"><strong>#GF23</strong></p>
                    <div class="footer__partners">
                        <a href="#"><img src="${backToRoot()}static/img/icons/partner-avs.white.svg" alt="AVS logo"></a>
                        <a href="#"><img src="${backToRoot()}static/img/icons/partner-stad-gent.white.svg" alt="Stad Gent logo"></a>
                    </div>
                </div>
            </section>

            <section class="footer__bottom max-width">
                <div class="footer__bottom__links">
                    <a href="#" class="hover--underline">Privacy</a>
                    <a href="#" class="hover--underline">Cookie instellingen</a>
                </div>
                <p class="footer__bottom__disclaimer">Deze website is louter informatief en geldt niet als aanbod, mogelijke fouten op de website zijn niet de aansprakelijkheid van Stad Gent.</p>
            </section>
        </acticle>
    `
    addElementToDOM(html, 'footer')
}

function loadHeader(randomLetter) {
    // Load content
    addHTMLForHeader(randomLetter)

    /* ———————— Add eventlisteners ———————— */
    // Languages
    addEventlistenerToElement('.nav__languages', 'click', () => {
        toggleClassToClasslistOfElement('.nav__languages--options', 'open')
    });
    
    // Full menu
    addEventlistenerToElements('.full-menu__btn', 'click', () => {
        toggleClassToClasslistOfElement('.full-menu', 'open')
        toggleClassToClasslistOfElement('header', 'open')
        toggleClassToClasslistOfElement('body', 'open')
        toggleClassToClasslistOfElements('.hover--red', 'hover--white')
    });
}

function loadTodayToEnjoyImage(randomLetter) {
    const element = document.querySelector('.today-to-enjoy__img')
    if (element) {
        const html = `
            <img src="${backToRoot()}static/img/logos/campagne-${randomLetter.number}-${randomLetter.letter}.png">
        `
        addElementToDOM(html, '.today-to-enjoy__img')
    }
}

function switchViewMode() {
    const $resultsElement = document.querySelector('.search-results__results')
    const $boxElementSwitch = document.querySelector('span.box')
    const $listElementSwitch = document.querySelector('span.list')

    if ($resultsElement && $boxElementSwitch && $listElementSwitch) {

        $boxElementSwitch.addEventListener('click', () => {
            $boxElementSwitch.classList.add('active')
            $listElementSwitch.classList.remove('active')
            
            const $articlesElements = document.querySelectorAll('.search-results__results .activity')
            $articlesElements.forEach(article => {
                $resultsElement.classList.add('box')

                article.classList.remove('list')
                article.classList.add('box')
            })
        })

        $listElementSwitch.addEventListener('click', () => {
            $listElementSwitch.classList.add('active')
            $boxElementSwitch.classList.remove('active')
            
            const $articlesElements = document.querySelectorAll('.search-results__results .activity')
            $articlesElements.forEach(article => {
                $resultsElement.classList.remove('box')

                article.classList.remove('box')
                article.classList.add('list')
            })
        })

    }
}

function searchBarLoadWhatsSearched() {
    const $searchBar = document.querySelector('.searchbar')
    if (!$searchBar) { return }
    
    const $searchbarButton = $searchBar.querySelector('.submit')
    
    $searchbarButton.addEventListener('click', (ev) => {
        ev.preventDefault()
        const searchbarValue = $searchBar.querySelector('input').value
        window.open(`${backToRoot()}search.html?query=${searchbarValue}`, '_self')
    })
}


function init() {
    loadHeader(randomLetter)
    addHTMLForFooter(randomLetter)
    loadTodayToEnjoyImage(randomLetter)
    switchViewMode()
    searchBarLoadWhatsSearched()
};

init();