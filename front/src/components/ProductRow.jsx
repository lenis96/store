import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

class ProductRow extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
     <TableRow>
         <TableCell>{this.props.description}</TableCell>
         <TableCell>$ {this.props.price}</TableCell>
         <TableCell>{this.props.quantity}</TableCell>
         <TableCell><a href={`/product/${this.props.idProduct}`}>Edit</a></TableCell>
     </TableRow>
     
    );
  }
}

export default ProductRow;
