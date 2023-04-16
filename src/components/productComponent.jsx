import React, { Component } from 'react';

class ProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      loading: true,
    };
  }

  componentDidMount() {
    fetch('http://localhost:4000/api/v1/products')
      .then(response => response.json())
      .then(data => {
        this.setState({
          products: data,
          loading: false,
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { products, loading } = this.state;

    if (loading) {
      return <div>Loading products...</div>;
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default ProductTable;