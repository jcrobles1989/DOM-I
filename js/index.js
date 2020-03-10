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

document.querySelector('a:first-child').textContent = 'Services'

document.querySelector('nav a:nth-child(2)').textContent = 'Product'

document.querySelector('nav a:nth-child(3)').textContent = 'Vision'

document.querySelector('nav a:nth-child(4)').textContent = 'Features'

document.querySelector('nav a:nth-child(5)').textContent = 'About'

document.querySelector('a:last-child').textContent = 'Contact'

const navColor = document.getElementsByTagName('a')

for (i = 0; i < navColor.length; i++) {
  navColor[i].style.color = 'green';
}

// This closes the nav 

// CTA begins here 

document.querySelector('h1').textContent = 'DOM Is Awesome'

document.querySelector('button').textContent = 'Get Started'

document.getElementById('cta-img').src = 'img/header-img.png'

// This closes CTA 

// Main-content begins here 

document.getElementsByTagName('h4')[0].textContent = 'Features'

document.getElementsByTagName('p')[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

document.getElementsByTagName('h4')[1].textContent = 'About'

document.getElementsByTagName('p')[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

document.getElementsByTagName('h4')[2].textContent = 'Services'

document.getElementsByTagName('p')[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

document.getElementsByTagName('h4')[3].textContent = 'Product'

document.getElementsByTagName('p')[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

document.getElementsByTagName('h4')[4].textContent = 'Vision'

document.getElementsByTagName('p')[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

document.getElementById('middle-img').src = 'img/mid-page-accent.jpg'

// This closes main-content

// Contact section begins here

document.getElementsByTagName('h4')[5].textContent = 'Contact'

document.getElementsByTagName('p')[5].textContent = '123 Way 456 Street Somewhere, USA'

document.getElementsByTagName('p')[6].textContent = '1 (888) 888-8888'

document.getElementsByTagName('p')[7].textContent = 'sales@greatidea.io'

// This closes contact section

// Footer begins here 

document.getElementsByTagName('p')[8].textContent = 'Copyright Great Idea! 2018'

// This closes the footer


