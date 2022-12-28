import { Component } from "react";
import './product.css'
import BubbleAlert from './BubbleAlert'
import InfoCar from './InfoCar'

class Car extends Component {
    render() {
        const {car, isActive, viewCar}=this.props
        const amount = car.reduce((acc, el)=> acc+ el.amount, 0)
        return (
            <div >
                <span className="bubble">
                    {amount !==0 
                    ? <BubbleAlert value={amount}/>
                    : null
                    }
                </span>
                <button onClick={viewCar} className="car">Carro</button>
                {isActive
                ?  <InfoCar car={car}/>
                : null
                }
               
            </div>
        )
    }
}
export default Car