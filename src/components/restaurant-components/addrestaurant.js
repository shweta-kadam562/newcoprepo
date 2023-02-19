import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";
import { listRestaurant } from "../../store/action/restaurant";
import {addRestaurant} from '../../store/action/restaurant';
// import Restaurant from "../Restaurant";

 export  class AddRestaurant extends Component{
  

    constructor(props){
        super(props);
    this.state = {
        restaurant:{
            name: ''
        },
        errors: {},
        msg: ''
    };
  }

//   componentDidMount(){

//   }

        
  render() {
    return (
      <div>
        <div className="card">
          <h5 className="card-header">Add Restaurant</h5>
          <div className="card-body">
            <h5 className="card-title">Enter Restaurant Info: </h5>
            <p className="card-text">
            <span>{this.state.msg}</span> <br />
               <label>Restaurant Name: </label>
               <input type="text" 
                        name="name"
                        value={this.state.restaurant.name}
                        onChange={this.changeHandler} />
                        <span style={{ color : 'red'}}>{this.state.errors['name']}</span>
                <br /><br />
                <button onClick={this.onAdd}>Add restaurant</button>
            </p>

          </div>
        </div>
      </div>
    );
  }

  changeHandler= (event) =>{
    this.setState({
        restaurant: {
            ...this.state.restaurant, 
            [event.target.name] : event.target.value
        }
    });
}

onAdd = async ()=>{
    /* Validate User inputs */
    if(this.handleValidation()){
        console.log(this.state.restaurant);
        /* Call the API */
       this.postRestaurant(this.state.restaurant);
    }
    else{
        /* Display error messages */
        console.log('validation not passed..');     
    }
}

   
handleValidation(){
    let name = this.state.restaurant.name;

    let tempErrors={}
    let formValid = true; 
    if(!name){ //If name is not given
        formValid = false;
        tempErrors['name']='Restaurant Name cannot be empty';
    }

    this.setState({
        errors: tempErrors
    });

    return formValid; 
}

async postRestaurant(restaurant){
    try {
        const response = axios.post("http://localhost:8585/api/restaurant/add", restaurant);
        const data = (await response).data;
        console.log('API success');
        console.log(data);
        this.setState({
            msg: 'Restaurant Added'
        })

        //react out to action and update the store
        this.props.addRestaurant(data);
        // this.postRestaurant(this.state.restaurant);
      } catch (error) {
         console.log(error)
        //console.error(error.response.data.msg);
        // this.setState({
        //     msg: 'Restaurant Added..'
        // })
      }
}
}
function mapStateToProps(state){
    return {
        // restaurantList : state.restaurant
    }    
}

export default connect(mapStateToProps, {})(AddRestaurant); 


