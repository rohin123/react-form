import React from 'react'

export default class Arrow extends React.Component{
	render(){
		return (
				<svg width='20' height='15' 
							stroke={this.props.color || 'black'}>
				  <g>
				    <path d='m10 0 l-10 7.5 l10 7.5 m-10 -7.5 l18 0' fill='none'></path>
				  </g>
				</svg>
			)
	}
}