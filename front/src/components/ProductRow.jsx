import React, { Component } from 'react';

class ProductRow extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
     <tr>
         <td>{this.props.description}</td>
         <td>$ {this.props.price}</td>
         <td>{this.props.quantity}</td>
     </tr>
     
    );
  }
}

export default ProductRow;
