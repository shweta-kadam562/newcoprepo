import { Component } from "react";
import { connect } from "react-redux";
import { AddRestaurant } from "./restaurant-components/addrestaurant";
import { RestaurantList } from "./restaurant-components/RestaurantList";

export  class Restaurant extends Component {
  constructor(props) {
    super(props);

    this.state = {
      componentNum: 0
    };
  }
 
//   componentDidMount(){
//     //  this.props.listRestaurant();
//   }
  render() { 
    return (
      <div className="container-fliud">
        <div className="row">
          <div className="col-sm-3">
            <ul className="list-group">
              <li className=" list-group-item"> <button   className="list-group-item restaurant-sidebar" onClick={()=>{
                this.setState({componentNum : 1})
              }} > Show all Restaurant </button> </li>
              <li className="list-group-item">
                <button  className=" list-group-item restaurant-sidebar" 
                onClick={()=>(this.setState({componentNum : 2}))}>
                   Add Restaurant</button></li>
            </ul>
          </div>
          <div className="col-lg-9">
              {this.state.componentNum === 1?
                  <RestaurantList />:this.state.componentNum === 2?
                  <AddRestaurant />:this.props.addrestaurant}
          </div> 
        </div>
      </div>
    );
  }
};
function mapStateToProps(state){
  return {
      // restaurant:state.addrestaurant
  }    
}
export default connect(mapStateToProps, {AddRestaurant})(Restaurant); 

