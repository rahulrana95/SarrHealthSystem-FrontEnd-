import React, { Component } from 'react';


class ShowTime extends Component {
  constructor(){
    super();
    this.state={
      curTime:''
    }
  }

  componentDidMount() {
      setInterval( () => {
        this.setState({
          curTime : new Date(Date.now()).toLocaleString()
        })
      },1000)
    }

  render() {
    return (
      <div >
        {this.state.curTime}
      </div>
    );
  }
}

export default ShowTime;
