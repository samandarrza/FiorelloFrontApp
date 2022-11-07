const generateUniqueId = (array) => {
    let newId = Math.floor((1000000 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    let isUnique = array.every(item => item.id !== newId);
    if(!isUnique)
    generateUniqueId(products);
    return newId
};
let products = [];

let link1 = 'https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-11-img.jpg';
let link2 = 'https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-12-img.jpg';
let link3 = 'https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-13-img.jpg';
let link4 = 'https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-14-img.jpg';
let  desc = "ntium laboriosam? Iure quibusdam perspiciatis tempora culpa beatae veritatis est repellat saepe ipsa adipisci sit, consequatur rerum soluta incidunt voluptate inventore molestias dolor eveniet nesciunt obcaecati harum possimus officiis.";



//CACTUSES  EXOTIC  GREENS  POPULAR  VARIOUS WINTER
let category = {
    cactuses:"CACTUSES",
    exotic:"EXOTIC",
    greens:"GREENS",
    popular: "POULAR",
    various: "VARIOUS",
    winter: "WINTER"
}

class Product {
    constructor(name,categories, price, count, url, desc) {
        this.id = generateUniqueId(products);
        this.category = [...categories];
        this.name = name;
        this.price = price;
        this.count = count;
        this.url = url;
        this.desc = desc;
    };

    sellProduct(count) {
        if (this.count - count >= 0)
            this.count -= count;
        else
            console.error('There is no enough product');
    }
};


for (let i = 0; i < 20; i++) {
    let newProduct1 = new Product('Rose',[category.popular], 12.4, 15, link1,desc);
    let newProduct2 = new Product('SWEET ',[category.cactuses, category.winter], 5.69, 1, link2,desc);
    let newProduct3 = new Product('FOXGLOVE',[category.exotic], 75.55, 16, link3,desc);
    let newProduct4 = new Product('SUMMER SAVORY',[category.greens,category.various], 485.55, 100, link4,desc)
    products.push(newProduct1,newProduct2,newProduct3,newProduct4)
}

console.log(JSON.stringify(products));

