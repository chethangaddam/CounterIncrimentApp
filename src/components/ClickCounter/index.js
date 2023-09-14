// Write your code here
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  onIncriment = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-container">
        <h1 className="heading">
          The Button has Clicked <span className="span">{count}</span> times
        </h1>
        <p>Click the button to increase the count</p>
        <button onClick={this.onIncriment} type="button">
          Click Me
        </button>
      </div>
    )
  }
}

export default ClickCounter
