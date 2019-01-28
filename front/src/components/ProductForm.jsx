import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {createProduct,getProduct} from '../utils/api'
class ProductsForm extends Component {
  constructor(props){
    super(props)
    this.state={description:'',price:'',quantity:''}
  }

  componentDidMount(){
    if(this.props.match.params.id!=null){
      getProduct(this.props.match.params.id).then(res=>{
        this.setState(res.data)
      })
    }
  }

  handleSubmit=(event)=>{
    console.log(this.state)
    event.preventDefault()
  }

  handleChange=(event)=>{
    this.setState({[event.target.name]:event.target.value})
  }

  handleClick=()=>{
    createProduct(this.state)
    this.setState({description:'',price:'',quantity:''})
  }
  render() {
    return (
     <div>
       <form action="" onSubmit={this.handleSubmit}>
       <TextField id="standard-name" label="Description" name="description" value={this.state.description} onChange={this.handleChange} margin="normal" />
       <TextField id="standard-name" label="Price" name="price" value={this.state.price} onChange={this.handleChange} margin="normal" />
       <TextField id="standard-name" label="Quantity" name="quantity" value={this.state.quantity} onChange={this.handleChange} margin="normal" />
       {/* <input type="text" value={this.state.description} name="description" onChange={this.handleChange}/> */}
       <Button variant="contained" color="primary" onClick={this.handleClick}>
          Add Product
        </Button>
       </form>
     </div>
     
    );
  }
}

export default ProductsForm;
