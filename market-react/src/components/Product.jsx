import { Component } from "react";
import Button from './Button'

class Product extends Component{
    render(){
        const {product, insertShopping}=this.props
        return(
            <div className="card_product">
               <img className="image_product" alt={product.name} src={product.img}/>
               <h3>{product.name}</h3>
               <p>{product.price}</p>
               <Button onClick={()=> insertShopping(product)}>
                Agreagar al carro
               </Button>
            </div>
        )
    }
}
export default Product