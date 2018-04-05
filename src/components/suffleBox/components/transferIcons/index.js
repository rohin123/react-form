import React from 'react'
import styled from 'styled-components'
import Arrow from '../arrow'

const Wrapper = styled.div`
	text-align : center;
	margin : 5px 0;
	height : 28px;
	display : flex;
	justify-content : center;
`

const TransferIcon = styled.div`
	width :20px;
	height : 15px;
	transform-origin : center; 
	transform : ${props => props.up ? 'rotate(90deg)':'rotate(-90deg)'};
	padding 5px;
	margin : 0 5px;
	cursor : pointer;
	stroke-width : 2px;
	&:after{
		position: absolute;
	    content: '';
	    width: 46px;
	    height: 46px;
	    background: #333;
	    border-radius: 50%;
	    top: -10px;
	    left: -10px;
	    opacity: 0;
	    transform : scale(1);
	    transition : all 0.4s;
	    z-index : -1;
	}

	&:active:after{
		opacity:1;
		transform : scale(0);
		transition : all 0s;
	}
`

export default class TransferIcons extends React.Component{
	render(){
		return (
					<Wrapper>
						<TransferIcon onClick={this.props.handleDown}>
							<Arrow/>
						</TransferIcon>
						<TransferIcon up={true} 
										onClick={this.props.handleUp}>
							<Arrow/>
						</TransferIcon>	
					</Wrapper>
			)
	}
}