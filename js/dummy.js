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

let link1 = './assets/imgs/shop-1-img.jpg';  //MAJESTY PALM
let link2 = './assets/imgs/shop-2-img.jpg';  //SCARLET SAGE
let link3 = './assets/imgs/shop-3-img.jpg';  //CACTUS IN ORANGE
let link4 = './assets/imgs/shop-4-img.jpg';  //PINK FLOWER TREE
let link5 = './assets/imgs/shop-5-img.jpg';  //WILD CACTUS
let link6 = './assets/imgs/shop-6-img.jpg';  //COLORFUL TULIPS
let link7 = './assets/imgs/shop-7-img.jpg';  //WILD ROSES
let link8 = './assets/imgs/shop-8-img.jpg';  //SUMMER SAVORY
let link9 = './assets/imgs/shop-9-img.jpg';  //ROCK SOAPWORT
let link10 = './assets/imgs/shop-10-img.jpg';  //SWEET ALYSSUM
let link11 = './assets/imgs/shop-11-img.jpg';  //SPRING SNOWFLAKE
let link12 = './assets/imgs/shop-12-img.jpg';  //SCARLET SAGE
let link13 = './assets/imgs/shop-13-img.jpg';  //FOXGLOVE FLOWER
let link14 = './assets/imgs/shop-14-img.jpg';  //SCHEFFLERA
let  desc = "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.";



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
        this.cartCount = 1;
        this.reviews =[];
    };

    sellProduct(count) {
        if (this.count - count >= 0)
            this.count -= count;
        else
            console.error('There is no enough product');
    }
};




for (let i = 0; i < 3; i++) {
    let newProduct1 = new Product('MAJESTY PALM',[category.popular,category.winter], 23.9, 90, link1,desc);
    let newProduct2 = new Product('SCARLET SAGE ',[category.popular], 15.9, 70, link2,desc);
    let newProduct3 = new Product('CACTUS IN ORANGE',[category.cactuses,category.various], 24.9, 80, link3,desc);
    let newProduct4 = new Product('PINK FLOWER TREE',[category.greens,category.various], 18.2, 85, link4,desc)
    let newProduct5 = new Product('WILD CACTUS',[category.cactuses,category.various], 23.9, 90, link5,desc)
    let newProduct6 = new Product('ROCK SOAPWORT',[category.cactuses,category.various], 25.9, 80, link9,desc)
    let newProduct7 = new Product('WILD ROSES',[category.exotic,category.various], 24.9, 75, link7,desc)
    let newProduct8 = new Product('SUMMER SAVORY',[category.greens,category.various], 23.9, 70, link8,desc)
    let newProduct9 = new Product('ORANGE AMARYLLIS',[category.exotic,category.various], 24.9, 90, link12,desc)
    let newProduct10 = new Product('SWEET ALYSSUM',[category.popular,category.winter], 23.9, 85, link10,desc)
    let newProduct11 = new Product('SPRING SNOWFLAKE',[category.popular], 17.2, 75, link11,desc)
    let newProduct12 = new Product('SCHEFFLERA',[category.greens], 26.9, 75, link14,desc)
    let newProduct13 = new Product('FOXGLOVE FLOWER',[category.popular,category.winter], 25.9, 95, link13,desc)
    let newProduct14 = new Product('COLORFUL TULIPS',[category.exotic,category.various], 25.9, 95, link6,desc)
    products.push(newProduct1,newProduct2,newProduct3,newProduct4,newProduct5,newProduct6,newProduct7,newProduct8,
        newProduct9,newProduct10,newProduct11,newProduct12,newProduct13,newProduct14)

}

// console.log(JSON.stringify(products)); 

