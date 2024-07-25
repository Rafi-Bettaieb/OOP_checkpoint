//Create an object class for the product to store the properties for id, name and price of the product.
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

//Create an object class for the shopping cart item to store the properties for product and its quantity.
class CartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    getTotalPrice() {
        console.log("the total price of the item is : ", this.product.price * this.quantity);
    }
}

//Create another object class for the shopping cart which contains an array of ShoppingCartItem instances. 
class ShoppingCart {
    constructor() {
        this.items = [];
    }
    //Get the total of items inside the cart
    getTotalItems() {
        console.log("the number of items in the cart is : ", this.items.length);
    }
    //Add items
    addItem(item) {
        this.items.push(item);
        console.log("item added successfully")
    }
    //Remove items
    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index != -1) {
            this.items.splice(index, 1);
        }
        else {
            console.log("item not found");
        }
    }
    //Display cart items
    displayItems() {
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i].product,"Quantity : ",this.items[i].quantity);
        }
    }
}


const product1 = new Product(1, 'PC', 2999);
const product2 = new Product(2, 'TV', 1999);
const product3 = new Product(3, 'shoes', 199)

const cart1 = new CartItem(product1, 5);
const cart2 = new CartItem(product2, 2);
const cart3 = new CartItem(product3,10);

cart1.getTotalPrice()


const cart = new ShoppingCart();
cart.addItem(cart1);
cart.addItem(cart2);
cart.addItem(cart3);

cart.getTotalItems();
cart.displayItems();

cart.removeItem(cart2);
cart.displayItems();

cart.getTotalItems();
