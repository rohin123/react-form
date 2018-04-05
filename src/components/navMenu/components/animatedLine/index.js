import React from 'react'
import styled from 'styled-components'


const LineWrapper = styled.div`
	width : 100%;
	height : 2px;
	background : ${props => props.color};
	margin-top : 5px;
`

const ActiveLine = styled.div`
	width : 100%;
	height : 2px;
	background : ${props => props.color};
	transform : ${props => props.active ? 'scale(1)' : 'scale(0)'};
	transition : transform 0.4s;
	transform-origin : center;
`

export default class AnimatedLine extends React.Component{
	render(){
		return (
				<LineWrapper color={this.props.defualtColor}>
					<ActiveLine color={this.props.activeColor} active={this.props.active}/>
				</LineWrapper>	
			)
	}
}