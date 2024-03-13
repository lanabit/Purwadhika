import React from "react" 
import { Link } from "react-router-dom"; 

let hobby = 'Makan';

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: 'Defryan'
        }
    }
    
    componentDidMount(){
    alert("Component really did mount");
    }
    
    componentWillUnmount(){
        alert(hobby)
    }
    
    onUpdateUsername = () => {
        //this.setState({username: 'Ryan'})
        hobby = 'Minum'
    }
    
    render(){
      return(
        <h1>
              This is Home Component
              <Link to='/login'>
              Go to Login
              </Link>
              <Link to='/memo'>Go to Memo</Link>
              <h2>
                {this.state.username}
              </h2>
              <h2>
                {hobby}
              </h2>
              <button onClick={this.onUpdateUsername}>
                Update
              </button>
        </h1>
      )

    }
}

export default Home;