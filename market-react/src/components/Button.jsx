import { Component } from "react";

class Button extends Component{
    render(){
        return(
            <button className="button_product" {...this.props}/>
        )
    }
}
export default Button