const products = [
    {   
        "title":"To Kill a Mockingbird",
        "author":"Harper Lee",
        "genre":"Fiction",
        "image":"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1553383690i/2657.jpg"
    },

    { 
        "title":"Pride and Prejudice",
        "author":" Jane Austen",
        "genre":"Romance",
        "image": "https://readaloudrevival.com/wp-content/uploads/2016/05/Pride-and-Prejudice.png.webp"
    },

    { 
        "title":"The Great Gatsby",
        "author":" F. Scott Fitzgerald",
        "genre":"Fiction",
        "image":"https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg" 
    },

    {
        "title":"War and Peace",
        "author":"Leo Tolstoy",
        "genre":"Non-fiction",
        "image":"https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781476789477/war-and-peace-9781476789477_hr.jpg"
    },

    {
        "title":"The Catcher in the Rye",
        "author":"J.D. Salinger",
        "genre":"Fiction",
        "image":"https://npr.brightspotcdn.com/dims4/default/f735808/2147483647/strip/true/crop/363x574+0+0/resize/880x1392!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fwkar%2Ffiles%2Fcatcher_in_the_rye_cover.png"
    },

    {
        "title":"The Hobbit",
        "author":"J.R.R. Tolkien",
        "genre":"Fantasy",
        "image":"https://m.media-amazon.com/images/I/71sR56IWUHL._AC_UF1000,1000_QL80_.jpg"
    },

    {
        "title":"One Hundred Years of Solitude","author":"Gabriel Garcia Marquez",
        "genre":"Non-fiction",
        "image":"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327881361i/320.jpg"
    },

    {
        "title":"The Lord of the Rings",
        "author":"J.R.R. Tolkien",
        "genre":"Fantasy",
        "image":"https://m.media-amazon.com/images/I/7125+5E40JL._AC_UF1000,1000_QL80_.jpg"
    },

    {
        "title":"1984",
        "author":"George Orwell",
        "genre":"Fiction",
        "image":"https://m.media-amazon.com/images/I/612ADI+BVlL._AC_UF1000,1000_QL80_.jpg"},

];

function renderProducts(products) { 
    const productContainer = document.getElementById('products-container');
    productContainer.innerHTML = ''; 


    products.forEach(product => {

        const productCard = document.createElement('div');
        productCard.className = 'product';

        productCard.innerHTML = `
        <img src="${product.image} alt="${product.title}"/>
        <h3>${product.title}</h3>
        <p>${product.author}</p>
        
        `;

        productContainer.appendChild(productCard);
    });
}




document.getElementById('filter').addEventListener('change', (event) => {
    const selectedGenre = event.target.value;
    const filteredProducts = selectedGenre === 'all' ? products : products.filter(product => product.genre === selectedGenre);
    renderProducts(filteredProducts);
});



renderProducts(products);
