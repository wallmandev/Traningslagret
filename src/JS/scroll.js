const offers = document.querySelector('.offers-button');
const offersScroll = document.querySelector('.offers');

offers.addEventListener('click', function() {
    offersScroll.scrollIntoView({behavior: 'smooth', block: 'center'}, true);
});

const about = document.querySelector('.about-button');
const aboutScroll = document.querySelector('.map');

about.addEventListener('click', function() {
    aboutScroll.scrollIntoView({behavior: 'smooth', block: 'center'}, true);
});

const contact = document.querySelector('.contact-button');
const contactScroll = document.querySelector('.footer');

contact.addEventListener('click', function() {
    contactScroll.scrollIntoView({behavior: 'smooth', block: 'center'}, true);
});

const openHours = document.querySelector('.open-button');
const openScroll = document.querySelector('.open');

openHours.addEventListener('click', function() {
    openScroll.scrollIntoView({behavior: 'smooth', block: 'center'}, true);
});

const readMore = document.querySelector('.hero__footer-button');
const readMoreScroll = document.querySelector('.offers');

readMore.addEventListener('click', function() {
    readMoreScroll.scrollIntoView({behavior: 'smooth',}, true);
});



// TABLET-MENU

const train = document.getElementById('TrainingMobile');
const trainScroll = document.querySelector('.offers');

train.addEventListener('click', function() {
    trainScroll.scrollIntoView({behavior: 'smooth', block: 'center'}, true);
});

const AboutMobile = document.getElementById('AboutMobile');
const AboutMobileScroll = document.querySelector('.map');

AboutMobile.addEventListener('click', function() {
    AboutMobileScroll.scrollIntoView({behavior: 'smooth', block: 'center'}, true);
});

const ContactMobile = document.getElementById('ContactMobile');
const ContactMobileScroll = document.querySelector('.footer');

ContactMobile.addEventListener('click', function() {
    ContactMobileScroll.scrollIntoView({behavior: 'smooth', block: 'center'}, true);
});

const OpenTimesMobile = document.getElementById('OpenTimesMobile');
const OpenTimesScroll = document.querySelector('.open');

OpenTimesMobile.addEventListener('click', function() {
    OpenTimesScroll.scrollIntoView({behavior: 'smooth', block: 'center'}, true);
});