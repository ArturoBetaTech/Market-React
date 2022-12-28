import { Component } from "react";
import './product.css'

class InfoCar extends Component {
    render() {
        const { car } = this.props
        return (
            <div className="infoCar">
                <ul>
                    {car.map(x => <li key={x.name}>
                        <img alt={x.name} src={x.img} width='50' height='32'/>
                        {x.name}
                        <span>{x.amount}</span>
                    </li>)}
                </ul>
            </div>
        )
    }
}
export default InfoCar