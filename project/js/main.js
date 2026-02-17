document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Function to create book card HTML
    function createBookCard(book) {
        return `
            <div class="book-card">
                <div class="book-image-container">
                    <img src="${book.image}" alt="${book.title}" class="book-image">
                </div>
                <div class="book-info">
                    <h3 class="book-title">${book.title}</h3>
                    <p class="book-author">${book.author}</p>
                    <p class="book-description">${book.description}</p>
                    <div class="book-footer">
                        <span class="book-price">$${book.price}</span>
                        <button class="btn-add-cart">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
    }

    // Home Page Logic
    const featuredGrid = document.getElementById('featured-books-grid');
    const popularGrid = document.getElementById('popular-books-grid');

    if (featuredGrid && typeof books !== 'undefined') {
        // Render first 4 books as featured
        const featuredBooks = books.slice(0, 4);
        featuredGrid.innerHTML = featuredBooks.map(createBookCard).join('');
    }

    if (popularGrid && typeof books !== 'undefined') {
        // Render random 4 books as popular (just slicing different set for demo)
        const popularBooks = books.slice(2, 6);
        popularGrid.innerHTML = popularBooks.map(createBookCard).join('');
    }

    // Category Pages Logic
    const categoryGrid = document.getElementById('category-books-grid');
    if (categoryGrid && typeof books !== 'undefined') {
        const currentPath = window.location.pathname;
        let category = '';

        if (currentPath.includes('comic-books.html')) category = 'comic';
        else if (currentPath.includes('life-books.html')) category = 'life';
        else if (currentPath.includes('maxins-books.html')) category = 'maxins';

        if (category) {
            const categoryBooks = books.filter(book => book.category === category);
            if (categoryBooks.length > 0) {
                categoryGrid.innerHTML = categoryBooks.map(createBookCard).join('');
            } else {
                categoryGrid.innerHTML = '<p>No books found in this category yet.</p>';
            }
        }
    }
});
