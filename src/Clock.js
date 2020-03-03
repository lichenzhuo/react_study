import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() }
    }
    componentDidMount() {
        this.timeId = setInterval(() =>
            this.change()
            , 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timeId)
    }
    change() {
        this.setState({
            date: new Date()
        })
    }
    thClick(e) {
        console.log(this.state);
        console.log(e);
    }
    render() {
        return<div>
           <button onClick={this.thClick.bind(this)}>11111</button>
            It is     {this.state.date.toLocaleTimeString()}.
        </div>
    }
}
// function Clock(props) {
//     return (
//         <div>
//             hello
//       It is {props.data.toLocaleTimeString()}.
//     </div>
//     );
// }
export default Clock;

