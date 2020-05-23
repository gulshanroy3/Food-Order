import React, { Component } from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  background-color: yellow;
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 0.5fr 1fr 0.5fr 0.5fr;
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
export default class Header extends Component {
  render() {
    return (
      <MainDiv>
        <div>
          <img
            style={{ width: "60px", height: "60px" }}
            src="https://lh3.googleusercontent.com/veJVStkA6vizdgOgvIgrqYqP1-Pg_CSJoPhAi83la8WZ96OtsMkbBNa1Li2phGAQpw"
            alt=""
          />
        </div>
        <div>
          <Input
            placeholder="Search items"
            type="text"
            onChange={e => {
              this.props.searchByName(e.target.value);
            }}
            value={this.props.color}
          />
        </div>
        <Button onClick={this.props.sortByPrice}>
          <i style={{ fontSize: "24px", padding: "5%" }} className="fa">
            &#xf0dc;
          </i>
          sort
        </Button>
      </MainDiv>
    );
  }
}
