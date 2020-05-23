import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addItem, selectedItem } from "../../../actions/foodOrderAction";
const MainDiv = styled.div`
  border-radius: 15px;
  text-align: left;
  background-color: white;
  display: grid;
  margin: 2%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
const Button = styled.button`
  background-color: white;
  border: 1px solid yellow;
  color: black;
  width: 50%;
  text-align: center;
  display: inline-block;
  font-size: 15px;
  border-radius: 20px;
  margin: 10%;
  outline: none;
`;
const Input = styled.input`
  width:100%
  border: 2px solid #EEEFED;
  min-height:40px
  border-radius:10px
  text-align:center
  outline:none;
  height:80%;
  margin:1%
  font-size:1.5vw;
  ::placeholder{
      font-size:2vw;
      text-align:left;
  }
`;
class Foodselections extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 1 };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }
  addItem() {
    // this.props.addItem(this.state.value + 1);
    this.setState({ value: this.state.value + 1 });
    for (let i = 0; i < this.props.selctedItem.length; i++) {
      if (this.props.selctedItem[i].title === this.props.title) {
        this.props.selctedItem[i].numberofItem++;
        this.props.selctedItem[i].price =
          this.props.price * this.props.selctedItem[i].numberofItem;
        break;
      }
    }
  }
  removeItem() {
    // this.props.removeItem(this.state.value - 1);
    this.setState({ value: this.state.value - 1 });
    for (let i = 0; i < this.props.selctedItem.length; i++) {
      if (this.props.selctedItem[i].title === this.props.title) {
        this.props.selctedItem[i].numberofItem--;
        this.props.selctedItem[i].price =
          this.props.price * this.props.selctedItem[i].numberofItem;
        if (this.props.selctedItem[i].numberofItem === 0) {
          this.props.addItem(false);
        }
        break;
      }
    }
  }
  render() {
    console.log("selected", this.props);
    return (
      <MainDiv>
        <Button onClick={this.removeItem}>-</Button>
        <Input type="number" value={this.state.value} disabled={true}></Input>
        <Button onClick={this.addItem}>+</Button>
      </MainDiv>
    );
  }
}
const mapStateTprops = state => ({
  value: state.foodItems.value
});
export default connect(mapStateTprops, { addItem, selectedItem })(
  Foodselections
);
