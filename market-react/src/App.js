import { Component } from 'react';
import Products from './components/Products';
import Layout from './components/Layout'
import Navbar from './components/Navbar.jsx';

class App extends Component {
  state = {
    products: [
      { name: 'Tomate', price: 1600, img: '/products/tomate.jpg' },
      { name: 'Arbejas', price: 2500, img: '/products/arbejas.jpg' },
      { name: 'lechuga', price: 700, img: '/products/lechuga.jpg' },
    ],
    car:[],
    isActive:false
  }
  insertShopping =(product) => {
    const{car}=this.state
    if(car.find(x => x.name === product.name)){
      const newCar =car.map(x => x.name === product.name
        ?({
          ...x,
          amount: x.amount +1
        })
        : x
        )
        return this.setState({car: newCar})
    }
    return this.setState({
      car: this.state.car.concat({
        ...product,
        amount:1,
      })
    })
  }
  viewCar = () =>{
    if(!this.state.car.length){
      return
    }
    this.setState({isActive: !this.state.isActive})
  }
  render() {
    const {isActive}= this.state
    return (
      <div>
        <Navbar 
          car={this.state.car}
          isActive={isActive} 
          viewCar={this.viewCar}/>
        <Layout>
         <h1 className='title'>Tienda</h1>
          <Products
            insertShopping={this.insertShopping}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}
export default App;
