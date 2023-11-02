
type Size = '' |'small' | 'medium' | 'large';


class Product{
    constructor(
        private name: string = '', 
        private price: number = 0,
        private size: Size = '',
        ){}

    
    toString(){

        if (this.name.length <= 0 ) throw Error('The name is empty');
        if (this.price === 0 ) throw Error('The price is zero');
        if (this.size.length <= 0 ) throw Error('The size is empty');

        return `Product: ${this.name}, ( Price:$${this.price} ) and Size: ${this.size}`;
    }

}

(() => {

    const blueShirt = new Product('Blue Shirt', 20, 'small');
    console.log(blueShirt.toString());

})();