let inventory = [];
let product1 = {
    name: "Honda",
    model: "A1235",
    cost: 200000,
    quantity: 10
};
let product2 = {
    name: "mobilephone",
    model: "y20",
    cost: 2000,
    quantity: 10
};
let product3 = {
    name: "laptop",
    model: "corei5",
    cost: 3000,
    quantity: 15
};
inventory.push(product1, product2, product3);
console.log(`Quantity of the third product (laptop):${inventory[2].quantity}`);
let product4 = {
    name: "motorcycle",
    model: "y16",
    cost: 50000,
    quantity: 100
};
inventory.push(product4);
console.log("Update inventory:");
inventory.forEach(product => {
    console.log(`Name:${product.name},model:${product.model} ,cost:$${product.cost}, quantity:${product.quantity}`);
});
export {};
