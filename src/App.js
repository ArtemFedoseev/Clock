import React from 'react';
import RenderTime from "./RenderTime";
import RenderButton from "./RenderButton"
import './App.css';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            format: 24,
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

    formTime = (time) => {
        let splitTime = time.split(":");
        let hours = splitTime[0].toString().length == 2 ? splitTime[0] : "0"+splitTime[0];
        let minutes = splitTime[1];
        let splitSeconds = splitTime[2].split(" ");
        let seconds = splitSeconds[0];
        let ampm = splitSeconds[1] ? splitSeconds[1] : "";

        return <RenderTime hours={hours} minutes={minutes} seconds={seconds} ampm={ampm}/>

    }

    handleClick(hoursSet){
        this.setState(state => ({
            format: hoursSet
        }));
    }

    render() {
        const format = this.state.format;
        const options = {
            hour12 : format === 12
        };
        const timeNow = this.state.date.toLocaleTimeString("en-US",options);
        return (
            <div className="header">
                <div className="container">
                    <div className="wrapper">
                        <div className="time-output">{this.formTime(timeNow)}</div>
                            <div className="format">
                                <h2 className="format-title">Format:</h2>
                                <RenderButton format={format} value="24" handleClick={_ => this.handleClick(24)}/>
                                <RenderButton format={format} value="12" handleClick={_ => this.handleClick(12)}/>
                            </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Clock;
