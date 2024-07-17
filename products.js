function calculateTotalPrice(products) {
    let totalPrice = 0;

    if (!Array.isArray(products)) {
        throw new Error("Input must be an array!");
    }

    for (let product of products) {

        if (typeof product.price !== 'number' || typeof product.quantity !== 'number') {
            throw new Error("Product price and quantity must be numbers!");
        }

        totalPrice += product.price * product.quantity;
    }

    return Number(totalPrice.toFixed(2));
};

function addProduct(products, newProduct) {
    if (!Array.isArray(products)) {
        throw new Error("Input must be an array!");
    }

    if (typeof newProduct.price !== 'number' || typeof newProduct.quantity !== 'number') {
        throw new Error("Product price and quantity must be numbers!");
    }

    products.push(newProduct);

    return products;
};

async function fetchProducts() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productsExample);
        }, 3000);
    });
};

const productsExample = [
    { name: 'Apple', price: 0.50, quantity: 3 },
    { name: 'Banana', price: 0.99, quantity: 5 },
    { name: 'Orange', price: 0.79, quantity: 2 },
];

const newProductExample = { name: 'Grapes', price: 1.99, quantity: 4 };

module.exports = {
    calculateTotalPrice,
    addProduct,
    fetchProducts
};