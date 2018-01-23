import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import AutocompleteExample from './autocomplete'
import CheckBoxExample from './checkbox'
import DateTime from './datetime'
import DropDown from './dropdown'
import NumberInput from './numberInput'
import RadioGroup from './radiogroup'
import SelectInput from './select'
import TextInput from './textInput'
import TestForm from './form'
import SideMenu from './sidemenu'

const MenuList = {
	Autocomplete : 'autocomplete',
	CheckBox : 'checkbox',
	DateTime : 'datetime',
	DropDown : 'dropdown',
	NumberInput : 'numberInput',
	RadioGroup : 'radiogroup',
	SelectInput : 'select',
	TextInput : 'textInput',
	Reactform : 'form' 
}

const Wrapper = styled.div`
	width : 100%;
	height : 100%;
`

const Content = styled.div`
	height : 100%;
	float : right;
	width : 75%;
	box-sizing : border-box;
	padding : 20px;
`

class App extends React.Component{
	constructor(props){
		super(props)
		this.setSelected = this.setSelected.bind(this)
		this.getSelectedElem = this.getSelectedElem.bind(this)
		this.menuList = [{
							label : MenuList.Autocomplete,
							selected : true
						},
						{
							label : MenuList.CheckBox,
							selected : false	
						},
						{
							label : MenuList.DateTime,
							selected : false	
						},
						{
							label : MenuList.DropDown,
							selected : false
						},
						{
							label : MenuList.NumberInput,
							selected : false
						},
						{
							label : MenuList.RadioGroup,
							selected : false
						},
						{
							label : MenuList.SelectInput,
							selected : false
						},
						{
							label : MenuList.TextInput,
							selected : false
						},
						{
							label : MenuList.Reactform,
							selected : false
						}]

			this.state = {
				selectedItem : MenuList.Autocomplete
			}			
	}

	getSelectedElem(){
		let ret = null
		switch(this.state.selectedItem){
			case MenuList.Autocomplete : {
				ret = <AutocompleteExample/>
				break
			}

			case MenuList.DropDown : {
				ret = <DropDown/>
				break
			}

			case MenuList.CheckBox : {
				ret = <CheckBoxExample/>
				break
			}

			case MenuList.DateTime : {
				ret = <DateTime/>
				break
			}

			case MenuList.NumberInput : {
				ret = <NumberInput/>
				break
			}

			case MenuList.RadioGroup : {
				ret = <RadioGroup/>
				break	
			}

			case MenuList.SelectInput : {
				ret = <SelectInput/>
				break
			}

			case MenuList.TextInput : {
				ret = <TextInput/>
				break
			}

			case MenuList.Reactform : {
				ret = <TestForm/>
				break
			}
		}

		return ret
	}

	setSelected(name){
		let selectedItem = null
		this.menuList.forEach((item)=>{
			if(item.label == name){
				item.selected = true
				selectedItem = item
			}else{
				item.selected = false
			}
		})

		this.setState({
			selectedItem : selectedItem.label
		})
	}

	render(){
		let contentHtml = this.getSelectedElem()

		return (
				<Wrapper>
					<SideMenu list={this.menuList} setSelected={this.setSelected}/>
					<Content>
						{
							contentHtml
						}
					</Content>
				</Wrapper>
			)
	}
}


ReactDOM.render(<App/>,document.getElementById('mainContainer'))