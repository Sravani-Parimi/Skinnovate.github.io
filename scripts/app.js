const recommendations = {
    hydration: [
        {
            name: "Hyaluronic Acid Serum",
            price: 499,
            link: "https://www.amazon.in/hyaluronic-acid-serum/s?k=hyaluronic+acid+serum",
            range: "below500",
            image: "images/hydration.jpg"
        },
        {
            name: "Cetaphil Optimal Hydration Lightweight Serum",
            price: 652,
            link: "https://www.amazon.in/Cetaphil-Activation-Lightweight-Dermatologist-Recommended/dp/B0C532BV2V",
            range: "500to1000",
            image: "images/cetaphil.jpg"
        }
    ],
    pigmentation: [
        {
            name: "Niacinamide Serum",
            price: 650,
            link: "https://www.amazon.in/niacinamide-serum/s?k=niacinamide+serum",
            range: "500to1000",
            image: "images/niacinamide.jpg"
        },
        {
            name: "Vitamin C Serum",
            price: 1200,
            link: "https://www.amazon.in/vitamin-c-serum/s?k=vitamin+c+serum",
            range: "above1000",
            image: "images/vitamin-c.jpg"
        }
    ],
    sensitivity: [
        {
            name: "Cica Cream",
            price: 400,
            link: "https://www.amazon.in/cica-cream/s?k=cica+cream",
            range: "below500",
            image: "images/cica.jpg"
        },
        {
            name: "La Roche-Posay Moisturizer",
            price: 1400,
            link: "https://www.amazon.in/La-Roche-Posay-Moisturizer/s?k=La+Roche-Posay+Moisturizer",
            range: "above1000",
            image: "images/la-roche.jpg"
        }
    ],
    acne: [
        {
            name: "Salicylic Acid Cleanser",
            price: 700,
            link: "https://www.amazon.in/salicylic-acid-cleanser/s?k=salicylic+acid+cleanser",
            range: "500to1000",
            image: "images/salicylic.jpg"
        },
        {
            name: "Benzoyl Peroxide Gel",
            price: 300,
            link: "https://www.amazon.in/benzoyl-peroxide-gel/s?k=benzoyl+peroxide+gel",
            range: "below500",
            image: "images/benzoyl.jpg"
        }
    ],
    aging: [
        {
            name: "Retinol Serum",
            price: 900,
            link: "https://www.amazon.in/retinol-serum/s?k=retinol+serum",
            range: "500to1000",
            image: "images/retinol.jpg"
        },
        {
            name: "Peptide Cream",
            price: 1500,
            link: "https://www.amazon.in/peptide-cream/s?k=peptide+cream",
            range: "above1000",
            image: "images/peptide.jpg"
        }
    ]
};

if (document.getElementById("skin-form")) {
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
                    <div class="card mb-4">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">Price: ₹${product.price}</p>
                            <a href="${product.link}" class="btn btn-primary" target="_blank">Buy Now</a>
                        </div>
                    </div>
                </div>
            `;
            recommendationsDiv.innerHTML += card;
        });
    }
}
