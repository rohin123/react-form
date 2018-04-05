import React from 'react'
import styled from 'styled-components'
import ListItem from '../listItem'

const Wrapper = styled.div`
	border : 1px solid var(--inputBorderColor);
	border-radius : 5px;
	padding : 3px;
	label { 
		margin-left : 10px;	
		font-weight : 600;
		color : var(--labelColor);
	}
`

const ListWrapper = styled.div`
	font-size : 0.8em;
`

export default class Box extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		let props = this.props,
			innerHtml = (props.list||[]).map((item)=>{
				return <ListItem item = {item}
								key = {item.id}
								toggleSelect={this.props.toggleListItem}/>
			})
		return (
				<Wrapper>
					<label>{props.label}</label>
					<ListWrapper>
						{innerHtml}
					</ListWrapper>
				</Wrapper>
			)
	}
}