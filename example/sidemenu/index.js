import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`	
    display: block;
    height: 100%;
    width : 25%;
    float: left;
    padding : 30px 0 0 0;
    background-color : #eee;
    box-sizing: border-box;
`

const MenuItem = styled.div`
	padding: 10px 30px 10px 10px;
    color: ${props=>props.selected?'#fff':'#333'};
    text-transform: uppercase;
    cursor : pointer;
    font-weight : 600;
    background-color : ${props=>props.selected?'#008000':'inherit'};
`

export default class SideMenu extends React.Component{
	constructor(props){
		super(props)
		this.setSelected = this.setSelected.bind(this)
	}

	setSelected(e){
		let selectedItem = e.target.id
		this.props.setSelected(selectedItem)
	}

	render(){
		let props = this.props,
			menuHtml = (props.list||[]).map((item,index)=>{
				return <MenuItem id={item.label} onClick={this.setSelected} selected={item.selected}>
								{item.label}
						</MenuItem>
			})

		return (
				<Wrapper>
					{menuHtml}
				</Wrapper>
			)
	}
}