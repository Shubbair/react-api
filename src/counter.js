import { Component } from "react"


class Counter extends Component{

    state = {
        value:this.props.value,
    }

    style = {
        Div:{
            color:'grey',
            margin:'10px'
        },
        IncButton:{
            color:'white',
            backgroundColor:'green',
            border:'0px',
            margin:'10px'
        },
        DelButton:{
            color:'white',
            backgroundColor:'red',
            border:'1px',
            margin:'10px'
        }
    }

    handleClick = ()=>{
        this.setState({value:this.state.value += 1})
    }

    render(){
        return(
            <div style={this.style.Div}>
                welcome home : {this.state.value}
                <button style={this.style.IncButton} onClick={this.handleClick}>Increase</button>
                <button style={this.style.DelButton} onClick={()=>this.props.onDelete(this.props.id)}>Delete</button>
            </div>
        )
    }
}

export default Counter;