// Initialize interactive functionalities for the web application

document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        });
    });

    // Product filtering
    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filterValue = this.getAttribute('data-filter');
            const products = document.querySelectorAll('.product');
            products.forEach(product => {
                if (filterValue === 'all' || product.classList.contains(filterValue)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    // Search functionality
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');
    searchButton.addEventListener('click', function () {
        const query = searchInput.value.toLowerCase();
        const products = document.querySelectorAll('.product');
        products.forEach(product => {
            const productName = product.querySelector('.product-name').textContent.toLowerCase();
            if (productName.includes(query)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });

    // Dynamic interactions
    const dynamicElements = document.querySelectorAll('.dynamic');
    dynamicElements.forEach(element => {
        element.addEventListener('mouseover', function () {
            this.classList.add('hover');
        });
        element.addEventListener('mouseout', function () {
            this.classList.remove('hover');
        });
    });
});