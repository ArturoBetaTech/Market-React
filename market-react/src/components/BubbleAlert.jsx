import { Component } from "react";
import './product.css'

class BubbleAlert extends Component {
    getNumber(number){
    if(!number){return ''}
    return number>9 ? '9+' :number
}
    render() {
        const{value}=this.props
        return (
            <div >
               <span className="bubbleAlert">
                {this.getNumber(value)}
               </span>
            </div>
        )
    }
}
export default BubbleAlert