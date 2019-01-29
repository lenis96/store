import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {createProduct,getProduct,updateProduct,deleteProduct} from '../utils/api'
import { Route, Redirect } from 'react-router'
class ProductsForm extends Component {
  constructor(props){
    super(props)
    this.state={description:'',price:'',quantity:'',showConfirmationDelete:false,redirection: null}
  }

  componentDidMount(){
    if(this.props.match.params.id!=null){
      getProduct(this.props.match.params.id).then(res=>{
        this.setState(res.data)
      })
    }
  }

  handleSubmit=(event)=>{
    event.preventDefault()
  }

  handleChange=(event)=>{
    this.setState({[event.target.name]:event.target.value})
  }

  handleClick=()=>{
    if(this.props.match.params.id!=null){
      updateProduct(this.props.match.params.id,this.state).then(res => {
        this.setState({redirection: <Redirect to="/products"/>})
      })
    } else {
      createProduct(this.state).then(res => {
        this.setState({redirection: <Redirect to="/products"/>})
      })
    }
    this.setState({description:'',price:'',quantity:''})
  }
  deleteProduct=()=>{
    this.setState({showConfirmationDelete:true})
  }
  confirmDeleteProduct=()=>{
    deleteProduct(this.props.match.params.id).then(res=>{
      this.setState({redirection: <Redirect to="/products"/>})
    })
  }
  render() {
    let buttons
    let buttonsDelete
    if(this.props.match.params.id!=null){
      buttons=<div>
        <Button variant="contained" color="primary" onClick={this.handleClick}>
          update Product
        </Button>
        <Button variant="contained" color="primary" onClick={this.deleteProduct}>
          Delete Product
        </Button>
      </div>
        if(this.state.showConfirmationDelete){

          buttonsDelete=<Button variant="contained" color="primary" onClick={this.confirmDeleteProduct}>
          DConfirm Delete Product
        </Button>
        }
    } else {
      buttons=<div>
        <Button variant="contained" color="primary" onClick={this.handleClick}>
          Add Product
        </Button>
      </div>
    }

    return (
     <div>
       {this.state.redirection}
       <form action="" onSubmit={this.handleSubmit}>
       <TextField id="standard-name" label="Description" name="description" value={this.state.description} onChange={this.handleChange} margin="normal" />
       <TextField id="standard-name" label="Price" name="price" value={this.state.price} onChange={this.handleChange} margin="normal" />
       <TextField id="standard-name" label="Quantity" name="quantity" value={this.state.quantity} onChange={this.handleChange} margin="normal" />
       {/* <input type="text" value={this.state.description} name="description" onChange={this.handleChange}/> */}
       {buttons}
       {buttonsDelete}
       </form>
     </div>
     
    );
  }
}

export default ProductsForm;
