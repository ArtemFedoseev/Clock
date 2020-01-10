import React from 'react';

const RenderButton = (props) => {
	let {format, value, handleClick} = props;
	let className = "btn"
	if (value == format){
		className += " btn-disabled"
	}
	return (
		<button className={className} disabled={format == value} onClick={handleClick}>{value}</button>
	)
}


export default RenderButton;