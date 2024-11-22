const recommendations = {
    hydration: [
        { name: "Hyaluronic Acid Serum", price: 499, link: "#", range: "below500", image: "images/hydration.jpg" },
        { name: "Cetaphil Moisturizer", price: 850, link: "#", range: "500to1000", image: "images/cetaphil.jpg" }
    ],
    pigmentation: [
        { name: "Niacinamide Serum", price: 650, link: "#", range: "500to1000", image: "images/niacinamide.jpg" },
        { name: "Vitamin C Serum", price: 1200, link: "#", range: "above1000", image: "images/vitamin-c.jpg" }
    ],
    sensitivity: [
        { name: "Cica Cream", price: 400, link: "#", range: "below500", image: "images/cica.jpg" },
        { name: "La Roche-Posay Moisturizer", price: 1400, link: "#", range: "above1000", image: "images/la-roche.jpg" }
    ],
    acne: [
        { name: "Salicylic Acid Cleanser", price: 700, link: "#", range: "500to1000", image: "images/salicylic.jpg" },
        { name: "Benzoyl Peroxide Gel", price: 300, link: "#", range: "below500", image: "images/benzoyl.jpg" }
    ],
    aging: [
        { name: "Retinol Serum", price: 900, link: "#", range: "500to1000", image: "images/retinol.jpg" },
        { name: "Peptide Cream", price: 1500, link: "#", range: "above1000", image: "images/peptide.jpg" }
    ]
};

document.getElementById("skin-form").addEventListener("change", filterProducts);
document.getElementById("price-form").addEventListener("change", filterProducts);

function filterProducts() {
    const skinConcern = document.getElementById("skin-concern").value;
    const priceRange = document.getElementById("price-range").value;

    if (!skinConcern || !priceRange) return;

    const results = recommendations[skinConcern].filter(product => product.range === priceRange);
    displayProducts(results);
}

function displayProducts(products) {
    const recommendationsDiv = document.getElementById("recommendations");
    recommendationsDiv.innerHTML = "";

    if (products.length === 0) {
        recommendationsDiv.innerHTML = "<p>No products match your selection.</p>";
        return;
    }

    products.forEach(product => {
        const card = `
            <div class="col-md-6">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">Price: ₹${product.price}</p>
                        <a href="${product.link}" class="btn btn-primary">Buy Now</a>
                    </div>
                </div>
            </div>
        `;
        recommendationsDiv.innerHTML += card;
    });
}
