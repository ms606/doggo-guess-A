import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MyComponent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data: null,
      		status: null,
          	doggoName: ''
     
		};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
}

	componentDidMount(){
		fetch("https://dog.ceo/api/breeds/image/random")
		.then(res => res.json())
		.then(
			(result) => {
				this.setState({
					data:      result.message,
          status:    result.status
        }) 
      },
      (error) => {
        this.setState({
          error
        });
      }
			);
  }

  handleChange(event){
    
  }
  
  handleSubmit(event){
    event.preventDefault();
    this.setState({doggoName: this.state.data});
  }

	render(){
    const {data, doggoName} = this.state;
   

    return(
    
      <div>
      <form onSubmit = {this.handleSubmit}>
        <h1> Baby Amat, Check this: Press submit button:
        Guess Which Dog Is This</h1>
        <img src={data} height="300"/>
        <br></br>
      
        <input type="submit" value="submit"  />
      </form>
                  
          <div> <h3>{doggoName.slice(30, doggoName.indexOf('/n') )}</h3> </div>

      </div>
			)
	}
}


ReactDOM.render(
  <MyComponent />,
  document.getElementById('root')
);
