import React from 'react';
import "./RenderTime.css"

const RenderTime = props => {
	return (
<div className="time">
	<div className="time-cell">
		<span className="time-unit">{props.hours}</span>
	</div>
	<div className="time-cell">
		<span className="time-unit">{props.minutes}</span>
	</div>
	<div className="time-cell">
		<span className="time-unit">{props.seconds}</span>
	</div>
	{props.ampm.length > 0 ?
		<div className="time-cell">
			<span className="time-unit">{props.ampm}</span>
		</div> : ''}
</div>
);
}

export default RenderTime;