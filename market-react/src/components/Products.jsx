import { Component } from "react";
import Product from './Product'

class Products extends Component{
    render(){
        const {products, insertShopping} = this.props
        return (
            <div className="cont_products">
                {products.map(product =>
                    <Product
                        insertShopping={insertShopping}
                        key={product.name}
                        product={product}
                    />
                    )}
            </div>
        )
    }
}
export default Products