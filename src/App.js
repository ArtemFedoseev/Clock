import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: 24,
            date: new Date()
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    handleClick(hoursSet){
        this.setState(state => ({
            hours: hoursSet
        }));
    }

    render() {
        const format = this.state.hours;
        const options = {
            hour12 : format === 12
        };
        return (
            <div>
                <h1>{this.state.date.toLocaleTimeString("en-US",options)}.</h1>
                <div className="radio">
                    <p>Format:</p>
                    <label>
                        <input type="radio" checked={this.state.hours === 24} onClick={_ => this.handleClick(24)} />
                        <span style={{cursor:'pointer'}} onClick={_ => this.handleClick(24)}> 24 </span>
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio"  checked={this.state.hours === 12} onClick={_ => this.handleClick(12)} />
                        <span style={{cursor:'pointer'}} onClick={_ => this.handleClick(12)}> 12 </span>
                    </label>
                </div>
            </div>
        );
    }
}

export default Clock;
