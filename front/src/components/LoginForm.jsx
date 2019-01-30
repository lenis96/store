import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
class LoginForm extends Component{
    constructor(props){
        super(props)
        this.state={email:'',password:''}
    }

    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value},()=>{

        })
    }

    handleSubmit=(event)=>{
        if(this.state.email=='lenisandres5@gmail.com' && this.state.password=='123456'){
            this.setState({message:(
                <div>
                    <h2>OK</h2>
                </div>
            )})
        }
        else{
            this.setState({message:(
                <div>
                    <h2>email or password incorrect</h2>
                </div>
            )})
        }
    }

    render(){
        return(
            <form action="">
                <TextField label="email" name="email" value={this.state.email} type="text" onChange={this.handleChange}/>
                <TextField label="password" type="password" name="password" value={this.state.password} type="password" onChange={this.handleChange}/>
                <Button variant="contained" color="primary" onClick={this.handleSubmit}>Login</Button>
                {this.state.message}
            </form>
        )
    }
}

export default LoginForm