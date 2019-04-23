import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { numberAction, spinner } from "./actions";
import Item from "./component/Item/Item";
import Spinner from "./component/Spinner/Spinner";

class App extends Component {

  creareLista = () => {
    if (this.props.number.date) {
      return this.props.number.date.map(item => {
        return <Item
          key={item.id}
          id={item.id}
          title={item.title}

        />
      })
    }
  }
  pornesteHandler = () => {
    this.props.spinner("DA")
    this.props.up()
  }
  render() {

    return (
      <div>
        Number: {this.props.number.number}
        <button onClick={this.pornesteHandler}  >Plus</button>
        <hr />
        {this.props.loading.loading ? <Spinner /> : null}
        {this.creareLista()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { number: state.number, loading: state.spinner };
}
const mapDispatchTopProps = (dispatch) => {
  return bindActionCreators({
    up: numberAction,
    spinner: spinner
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchTopProps)(App);