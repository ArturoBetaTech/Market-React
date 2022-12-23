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
    ]
  }
  render() {
    return (
      <div>
        <Navbar/>
        <Layout>
         <h1 className='title'>Tienda</h1>
          <Products
            insertShopping={() => console.log("np")}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}
export default App;
