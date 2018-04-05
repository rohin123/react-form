import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	display : inline-block;
	padding : 5px;
	border-radius : 5px;
	background : ${ props => props.selected ? 'linear-gradient(#7CB5DD,#7CB501)' : 'linear-gradient(#a3a3a3,#c3c3c3)'};
	color : #fff;
	margin : 5px;
`

export default class ListItem extends React.Component{
	constructor(props){
		super(props)
		this.toggleSelect = this.toggleSelect.bind(this)	
	}

	toggleSelect(){
		this.props.toggleSelect(this.props.item)
	}

	render(){
		let props = this.props
		return (
				<Wrapper selected = {props.item.selected} 
							onClick={this.toggleSelect}>
					{props.item.label}
				</Wrapper>
			)
	}
}