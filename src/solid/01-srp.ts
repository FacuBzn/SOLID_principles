(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    class ProductService {

        getProduct(id: number){
            // Realiza un proceso para obtener el producto y retornarlo
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product );
        }
        notifyClients(){
            console.log('Notificando a los clientes');
        }

    }

    class Mailer {

        private masterEmail: string = 'juanfacundobazan@gmail.com';

        sendEmail (emailList: string[], template: 'to-clients' | 'to-admins' ,message: string) {
            // Realiza el envio de un correo electronico
            console.log('Enviando correo electronico', { emailList, template, message });
        }

    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        private productService: ProductService;
        private mailer: Mailer;

        constructor(productService: ProductService, mailer: Mailer) {
            this.productService = productService;
            this.mailer = mailer;
        }
    
        loadProduct( id: number ) {
            this.productService.getProduct(id);
        }
    
        saveProduct( product: Product ) {
            this.productService.saveProduct(product);
        }
    
        notifyClients() {
            this.mailer.sendEmail( ['edu@gmail.com'], 'to-clients', 'Se ha creado un nuevo producto' );
        }
    
    }
    
    class CartBloc {

        private itemsInCart: Object[] = [];

        addToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
 
    }

    const productService = new ProductService();
    const mailer = new Mailer();

    const productBloc = new ProductBloc( productService, mailer );
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.addToCart(10);








})();