import React, { Component } from "react";
import { GetselectedItem } from "../../../actions/foodOrderAction";
import { connect } from "react-redux";
class checkout extends Component {
  render() {
    console.log(this.props);
    return <div></div>;
  }
}
const mapStateToProps = state => ({
  selctedItem: state.foodItems.selectedItem
});
export default connect(mapStateToProps, { GetselectedItem })(checkout);
