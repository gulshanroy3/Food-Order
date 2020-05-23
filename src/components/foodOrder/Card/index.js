import React, { Component } from "react";
import styled from "styled-components";
import FoodSelection from "../FoodSelectedButtons/index";
import { connect } from "react-redux";
import { addItem } from "../../../actions/foodOrderAction";
const MainDiv = styled.div`
  box-shadow:${props =>
    props.boxShadow ? " 0 4px 8px 0 rgba(0, 0, 0, 0.2)" : ""}
  transition: 0.3s;
  border-radius:15px
  background-color: ${props => props.backgroundColor};
  display:grid;
  margin:2%
  grid-template-rows: 1fr 1fr;
  :hover {
    box-shadow: ${props =>
      props.boxShadow ? "0 8px 16px 0 rgba(0, 0, 0, 0.2);" : ""}
  }
`;
const FoodTitle = styled.div`
  padding: 2%;
  display: grid;
  grid-template-columns: 0.8fr 0.8fr;
  font-weight: bold;
`;
const Button = styled.button`
  background-color: white;
  border: 1px solid yellow;
  color: yellow;
  width: 50%;
  text-align: center;
  display: inline-block;
  font-size: 15px;
  border-radius: 20px;
  margin-left: 40%;
  margin-bottom: 10%;
`;
class FoodCard extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: false };
    this.AddFood = this.AddFood.bind(this);
  }
  componentDidUpdate() {
    console.log("update");
  }
  AddFood() {
    this.setState({ selected: true });
    let data = {
      title: this.props.name,
      numberofItem: 1,
      price: this.props.price
    };
    this.props.selctedItem.push(data);
    this.props.addItem(true);
  }
  render() {
    // console.log(this.props);
    return (
      <MainDiv
        backgroundColor={this.props.backgroundColor}
        boxShadow={this.props.disable}
      >
        <FoodTitle>
          <div>{this.props.name}</div>
          <div style={{ textAlign: "right" }}>{this.props.price}</div>
        </FoodTitle>
        {this.state.selected ? (
          <FoodSelection
            selctedItem={this.props.selctedItem}
            title={this.props.name}
            price={this.props.price}
          />
        ) : (
          <Button onClick={this.AddFood}>Add</Button>
        )}
      </MainDiv>
    );
  }
}
const mapStateToProps = state => ({
  addbutton: state.foodItems.addbutton
});

export default connect(mapStateToProps, { addItem })(FoodCard);
