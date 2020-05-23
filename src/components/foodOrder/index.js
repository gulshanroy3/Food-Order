import React, { Component } from "react";
import Header from "./Header/index";
import Buffetdetails from "./BuffetDetails/index";
import SelectedItem from "./SelectedItem/index";
import { connect } from "react-redux";
import {
  foodItemsaction,
  sortByPrice,
  searchByName
} from "../../actions/foodOrderAction";
class FoodOrder extends Component {
  constructor(props) {
    super(props);
    this.state = { inc: true };
    this.SortingByPrice = this.SortingByPrice.bind(this);
    this.searchByName = this.searchByName.bind(this);
  }
  componentDidMount() {
    this.props.foodItemsaction();
  }
  SortingByPrice() {
    this.props.sortByPrice(this.state.inc);
    this.setState({ inc: !this.state.inc });
  }
  searchByName(input) {
    this.props.searchByName(input);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <Header
          sortByPrice={this.SortingByPrice}
          inc={this.state.inc}
          searchByName={this.searchByName}
        />
        <Buffetdetails
          selctedItem={this.props.selctedItem}
          foodItem={this.props.fooditems}
          addbutton={this.props.addbutton}
        />
        <SelectedItem selctedItem={this.props.selctedItem} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  fooditems: state.foodItems.fooditem,
  selctedItem: state.foodItems.selectedItem,
  addbutton: state.foodItems.addbutton
});
export default connect(mapStateToProps, {
  foodItemsaction,
  sortByPrice,
  searchByName
})(FoodOrder);
