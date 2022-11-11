class Comment {
    constructor(id, comment) {
        this.userId = id;
        this.comment = comment;
        this.date = new Date().toDateString();
    }
}

function saveProductsData() {
    fetch('./js/dummy.json')
        .then(res => res.json())
        .then(productData => {
            localStorage.setItem('products', JSON.stringify(productData));
        });

}
saveProductsData();

function getProduct(productId){
    let products  =   JSON.parse(localStorage.getItem('products'));

    let product = products.find(item => item.id === productId)
    return product

}




function addComment(productId, comment) {
    let userId = sessionStorage.getItem('currentUserId');
    let newComment = new Comment(userId, comment);
    console.log(newComment);


    let product =  getProduct(productId);
    product?.reviews.push(newComment);
    console.log(product);

    refreshProduct(product);

}

addComment('42405529', 'bunu men cox beyendnm');

function refreshProduct(newProduct){
    let products  =   JSON.parse(localStorage.getItem('products'));

   let updatedProducts =  products.map(product =>{
        if(product.id == newProduct.id ){
            return newProduct;
        }
        return product
    })

    localStorage.setItem('products',updatedProducts)
    console.log(updatedProducts);

}