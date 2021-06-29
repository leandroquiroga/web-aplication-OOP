class Product{
    constructor(name,price,year){
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UserInterface{
    addProduct(product){
        const listProduct = document.getElementById('product-list');
        const element = document.createElement('div');

        element.innerHTML = `<div class='card text-center mb-3'> 
                                <div class = 'card-body'>
                                    <strong>Product Name</strong>: ${product.name}
                                    <strong>Product Price</strong>: ${product.price}
                                    <strong>Product Year</strong>: ${product.year}
                                    <a href="#" name='delete' class='btn btn-danger m-2'>Delete</a>
                                </div>
                            </div>`;
        listProduct.appendChild(element)
        this.resertForm()
    }
    resertForm(){
        const productForm = document.getElementById('product-form');
        productForm.reset();
    }
    deleteProduc(elemetCaptured){
        if(elemetCaptured.name === 'delete'){
            let parent = elemetCaptured.parentElement.parentElement;
            parent.remove()
            
            this.showMessage('Product Deleted Successfylly', 'danger')
        }
    }
    
    showMessage(text, cssClass){
        const container = document.querySelector('.container');
        const div = document.createElement('div');
        const app = document.querySelectorAll('#App')[0];
        
        div.className = `alert alert-dismissible alert-${cssClass}`;
        div.appendChild(document.createTextNode(text));

        //Showing in DOM
        
        container.insertBefore(div, app);
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 350)
    }
}

// Document Object Model 
let form = document.getElementById('product-form');
let deleteListProduct = document.getElementById('product-list');

form.addEventListener('submit', (e) => { 
    e.preventDefault()

    const productName = document.getElementById('name').value;
    const productPrice = document.getElementById('price').value;
    const productYear = document.getElementById('year').value;

    const listProduct = new Product (productName,productPrice,productYear);
    const iU = new UserInterface();
    iU.addProduct(listProduct);
    iU.resertForm()
    iU.showMessage('Product Added Successfully', 'success');
});

deleteListProduct.addEventListener('click', (e) => {
    const iU = new UserInterface();
    iU.deleteProduc(e.target);
})