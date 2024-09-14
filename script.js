const style = document.createElement('style');
style.innerHTML = `
  /* Global Styles */
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  body {
      font-family: 'Arial', sans-serif;
  }

  a {
      text-decoration: none;
      color: black;
  }

  .first-navbar {
      background-color: black;
      color: white;
      text-align: center;
      padding: 10px;
      font-size: 16px;
  }

  .container {
      width: 90%;
      margin: 0 auto;
  }

  .product-container {
      width: 60%;
      margin: 0 auto;
  }

  .second-navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 0;
      position: relative;
  }

  .nav-left,
  .nav-right {
      display: flex;
  }

  .nav-left li,
  .nav-right li {
      list-style: none;
      padding: 0 15px;
      font-size: 16px;
  }

  .logo h1 {
      font-size: 24px;
      font-weight: bold;
      letter-spacing: 1px;
  }

  .hamburger {
      display: none;
      flex-direction: column;
      cursor: pointer;
  }

  .hamburger .bar {
      width: 25px;
      height: 3px;
      background-color: black;
      margin: 4px 0;
      transition: 0.3s ease;
  }

  .active .nav-left,
  .active .nav-right {
      display: flex;
      flex-direction: column;
      background-color: white;
      position: absolute;
      top: 70px;
      left: 0;
      right: 0;
      padding: 10px;
      z-index: 1;
  }

  .hero-section {
      background-image: url('https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
      background-size: cover;
      background-position: center;
      height: 80vh;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: white;
  }

  .hero-content h1 {
      font-size: 48px;
      font-weight: bold;
  }

  .hero-content h2 {
      font-size: 24px;
  }

  .hero-content p {
      margin: 10px 0;
      font-size: 18px;
  }

  .hero-content button {
      padding: 10px 20px;
      background-color: white;
      color: black;
      border: none;
      cursor: pointer;
      font-size: 16px;
  }

  .hero-content button:hover {
      background-color: grey;
      color: white;
  }

  .products {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      padding-top: 40px;
      padding-bottom: 40px;
  }

  .product {
      background-color: #fffdf0;
      width: 300px;
      height: auto;
      padding: 20px;
      margin: 20px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s, box-shadow 0.3s;
      text-align: center;
  }

  .product:hover {
      transform: translateY(-10px);
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  }

  .product img {
      width: 100%;
      max-width: 200px;
      margin-bottom: 15px;
      border-radius: 50%;
  }

  .product p {
      margin-top: 10px;
      font-size: 18px;
      font-weight: bold;
      color: #333;
  }

  .product p a {
      text-decoration: none;
      color: black;
      transition: color 0.3s ease;
  }

  .product p a:hover {
      color: black;
  }

  @media (max-width: 1024px) {
      .second-navbar {
          flex-direction: column;
          align-items: center;
      }

      .nav-left,
      .nav-right {
          flex-direction: column;
          text-align: center;
      }
  }

  @media (max-width: 768px) {
      .second-navbar {
          flex-direction: column;
          align-items: flex-start;
      }

      .product-container {
          width: 90%;
          margin: 0 auto;
      }

      .hamburger {
          display: flex;
      }

      .logo {
          display: none;
      }

      .nav-left,
      .nav-right {
          display: none;
          width: 100%;
          flex-direction: column;
          text-align: left;
      }

      .nav-left.active,
      .nav-right.active {
          display: block;
      }

      .hero-section {
          height: 60vh;
      }

      .hero-content h1 {
          font-size: 36px;
      }

      .products {
          flex-direction: column;
          align-items: center;
      }

      .product {
          margin-bottom: 20px;
      }
  }

  @media (max-width: 480px) {
      .hero-content h1 {
          font-size: 24px;
      }

      .product-container {
          width: 90%;
          margin: 0 auto;
      }

      .logo {
          display: none;
      }

      .hero-content p {
          font-size: 14px;
      }

      .hero-content button {
          padding: 8px 16px;
          font-size: 14px;
      }
  }
`;
document.head.appendChild(style);

const firstNavbar = document.createElement('div');
firstNavbar.className = 'first-navbar';
firstNavbar.innerHTML = '<h4>Free US Shipping on Orders $100+</h4>';
document.body.insertBefore(firstNavbar, document.body.firstChild);

const container = document.createElement('section');
container.className = 'container';
container.innerHTML = `
  <div class="second-navbar">
      <div class="hamburger" id="hamburger">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
      </div>
      <ul class="nav-left" id="nav-left">
          <li><a href="/collections/jm-best-sellers">Best Sellers</a></li>
          <li><a href="/collections/jm-new-arrivals">New</a></li>
          <li><a href="/collections/personalized">Personalized</a></li>
          <li><a href="/collections/clearance">Clearance</a></li>
      </ul>
      <div class="logo">
          <h1>JAMES MICHELLE</h1>
      </div>
      <ul class="nav-right" id="nav-right">
          <li><a href="#">Search</a></li>
          <li><a href="#">Account</a></li>
          <li><a href="#">Cart</a></li>
      </ul>
  </div>
`;
document.body.insertBefore(container, document.body.children[1]);



document.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.createElement('div');
    navContainer.setAttribute('id', 'mobile-nav-container');
    
    navContainer.style.display = 'flex';
    navContainer.style.justifyContent = 'center';
    navContainer.style.overflowX = 'scroll';
    navContainer.style.padding = '10px';
    navContainer.style.margin = '20px 0';
    navContainer.style.borderBottom = '1px solid #ccc';

    const navItems = [
        {
            name: 'Best Sellers',
            imgSrc: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/best-sellers.png',
            link: '/collections/jm-best-sellers',
        },
        {
            name: 'New',
            imgSrc: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/new.png',
            link: '/collections/jm-new-arrivals',
        },
        {
            name: 'Necklaces',
            imgSrc: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/necklaces.png',
            link: '/collections/necklaces',
        },
        {
            name: 'Rings',
            imgSrc: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/rings.png',
            link: '/collections/rings',
        },
        {
            name: 'Earrings',
            imgSrc: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/bracelets.png',
            link: '/collections/bracelets',
        },
        {
            name: 'Personalized',
            imgSrc: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/personalized.png',
            link: '/collections/personalized',
        },
        {
            name: 'Fine',
            imgSrc: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/fine.png',
            link: '/collections/fine',
        },
        {
            name: 'Clearance',
            imgSrc: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/clearance.png',
            link: '/collections/clearance',
        },
        {
            name: 'Sale',
            imgSrc: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/jm-fine-sample.png',
            link: '/collections/fine-sample-sale',
        },
    ];

    navItems.forEach(item => {
        const navItem = document.createElement('div');
        navItem.style.textAlign = 'center';
        navItem.style.margin = '0 10px';

        const navImg = document.createElement('img');
        navImg.src = item.imgSrc;
        navImg.style.width = '100px';
        navImg.style.height = '100px';
        navImg.style.objectFit = 'cover';
        navImg.style.cursor = 'pointer';

        const navLink = document.createElement('a');
        navLink.href = item.link;
        navLink.innerText = item.name;
        navLink.style.display = 'block';
        navLink.style.marginTop = '5px';
        navLink.style.color = '#000';
        navLink.style.textDecoration = 'none';
        navLink.style.fontSize = '14px';

        navItem.appendChild(navImg);
        navItem.appendChild(navLink);

        navContainer.appendChild(navItem);
    });

    const heroSection = document.querySelector('.hero-section');
    heroSection.parentNode.insertBefore(navContainer, heroSection);

    const style = document.createElement('style');
    style.textContent = `
        #mobile-nav-container {
            display: flex;
            justify-content: center;
            overflow-x: auto;
        }

        #mobile-nav-container div {
            flex: 0 0 auto;
            text-align: center;
        }

        @media (max-width: 768px) {
            #mobile-nav-container {
                justify-content: flex-start;
            }
        }
    `;
    document.head.appendChild(style);
});



const heroSection = document.createElement('section');
heroSection.className = 'hero-section';
heroSection.innerHTML = `
  <div class="hero-content">
      <h2>Up to</h2>
      <h1>30% OFF SITEWIDE</h1>
      <p>30% Off Sitewide | Code: MEMORIAL30</p>
      <p>20% Off Fine | Code: FINE20</p>
      <button>Shop The Sale</button>
  </div>
`;
document.body.insertBefore(heroSection, document.body.children[2]);

const productContainer = document.createElement('section');
productContainer.className = 'product-container products';
productContainer.innerHTML = `
  <div class="product">
      <img src="https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/necklaces.png" alt="Necklaces">
      <p><a href="/collections/necklaces">Necklaces</a></p>
  </div>
  <div class="product">
      <img src="https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/bracelets.png" alt="Earrings">
      <p><a href="/collections/bracelets">Bracelets</a></p>
  </div>
  <div class="product">
      <img src="https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/earrings.png" alt="Earrings">
      <p><a href="/collections/earrings">Earrings</a></p>
  </div>
  <div class="product">
      <img src="https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/rings.png" alt="Rings">
      <p><a href="/collections/rings">Rings</a></p>
  </div>
`;
document.body.appendChild(productContainer);

document.getElementById('hamburger').addEventListener('click', function () {
    const navLeft = document.getElementById('nav-left');
    const navRight = document.getElementById('nav-right');
    navLeft.classList.toggle('active');
    navRight.classList.toggle('active');
});
