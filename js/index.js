const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Nav starts here

// document.querySelector('a:first-child').textContent = 'Services'

document.querySelector('a:first-child').textContent = siteContent['nav']['nav-item-1']

document.querySelector('nav a:nth-child(2)').textContent =  siteContent['nav']['nav-item-2']

document.querySelector('nav a:nth-child(3)').textContent = siteContent['nav']['nav-item-3']

document.querySelector('nav a:nth-child(4)').textContent = siteContent['nav']['nav-item-4']

document.querySelector('nav a:nth-child(5)').textContent = siteContent['nav']['nav-item-5']

document.querySelector('a:last-child').textContent = siteContent['nav']['nav-item-6']

const newHome = document.createElement('a');

const newFAQ = document.createElement('a')

newHome.textContent = 'Home'

newFAQ.textContent = 'FAQ';

const parentElement = document.querySelector('nav');

parentElement.prepend(newHome)

parentElement.appendChild(newFAQ);

const navColor = document.getElementsByTagName('a')

Array.from(navColor).forEach(element => {
  element.style.color = 'green';
})

// This closes the nav 

// CTA begins here 

document.querySelector('h1').textContent = siteContent['cta']['h1']

document.querySelector('button').textContent = siteContent['cta']['button']

document.getElementById('cta-img').src = siteContent['cta']['img-src']

// This closes CTA 

// Main-content begins here 

document.getElementsByTagName('h4')[0].textContent = siteContent['main-content']['features-h4']

document.getElementsByTagName('p')[0].textContent = siteContent['main-content']['features-content']

document.getElementsByTagName('h4')[1].textContent = siteContent['main-content']['about-h4']

document.getElementsByTagName('p')[1].textContent = siteContent['main-content']['about-content']

document.getElementsByTagName('h4')[2].textContent = siteContent['main-content']['services-h4']

document.getElementsByTagName('p')[2].textContent = siteContent['main-content']['services-content']

document.getElementsByTagName('h4')[3].textContent = siteContent['main-content']['product-h4']

document.getElementsByTagName('p')[3].textContent = siteContent['main-content']['product-content']

document.getElementsByTagName('h4')[4].textContent = siteContent['main-content']['vision-h4']

document.getElementsByTagName('p')[4].textContent = siteContent['main-content']['vision-content']

document.getElementById('middle-img').src = siteContent['main-content']['middle-img-src']

// This closes main-content

// Contact section begins here

document.getElementsByTagName('h4')[5].textContent = siteContent['contact']['contact-h4']

document.getElementsByTagName('p')[5].textContent = siteContent['contact']['address']

document.getElementsByTagName('p')[6].textContent = siteContent['contact']['phone']

document.getElementsByTagName('p')[7].textContent = siteContent['contact']['email']

// This closes contact section

// Footer begins here 

document.getElementsByTagName('p')[8].textContent = siteContent['footer']['copyright']

// This closes the footer


