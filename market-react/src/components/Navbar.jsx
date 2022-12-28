import { Component } from "react";
import Car from './Car'

class Navbar extends Component {
    render() {
        const{car, isActive, viewCar}=this.props
        return (
            <nav className="navbar_products">
                <p className="title_market">Shop</p>
                <Car 
                    car={car}
                    isActive={isActive}
                    viewCar={viewCar}/>
            </nav>
        )
    }
}
export default Navbar