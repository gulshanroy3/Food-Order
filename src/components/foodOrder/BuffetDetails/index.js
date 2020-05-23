import React, { Component } from "react";
import FoodCard from "../Card/index";
import styled from "styled-components";

const MainDiv = styled.div`
  border-radius: 15px;
  text-align: left;
  background-color: grey;
  display: grid;
  margin: 2%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
class BuffetDetail extends Component {
  render() {
    let disable = false;
    //console.log("bufet" + JSON.stringify(this.props));
    let foodcard = this.props.foodItem.map((item, key) => {
      return (
        <FoodCard
          key={key}
          name={item.itemname}
          price={item.price}
          disable={disable}
          backgroundColor="white"
          selctedItem={this.props.selctedItem}
          addbutton={this.props.addbutton}
        />
      );
    });
    return (
      <div>
        Lunch:<MainDiv>{foodcard}</MainDiv>
      </div>
    );
  }
}

export default BuffetDetail;
