import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";
import { listRestaurant } from "../../store/action/restaurant";

export class RestaurantList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.listRestaurant();
  }

//   render() {
//     return (
//       <table className="table">
//         <thead>
//           {/* <tr> */}
//             <th scope="col">#</th>
//             <th scope="col">Name</th>
//           {/* </tr> */}
//         </thead>
//         <tbody>
//           {this.props.restaurantList.list.map((e, index) => (
//             <tr key={e.id}>
//               <th scope="row">{index + 1}</th>
//               <td>{e.name}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   }
// }


render(){
    return(
        <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Restaurant Name</th>
            
          </tr>
        </thead>
        <tbody>
          {
            this.props.restaurantList.list.map((r, index) => (
             
              <tr key={r.id}>
                <th scope="row" key={r.id}> {index + 1}</th>
                <td>{r.name}</td>
              </tr>
            
          ))}   
        </tbody>
      </table>
      )
  }
}

function mapStateToProps(state) {
  return {
    restaurantList: state.restaurant,
  };
}

export default connect(mapStateToProps, { listRestaurant })(RestaurantList);