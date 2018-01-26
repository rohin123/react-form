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
	overflow : auto;
`

const InfoWrapper = styled.div`
	h1,h2,h3{
		background-color : whitesmoke;
	}
`
const InputWrapper = styled.div`
	width : 300px;
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
		let ret = {}
		switch(this.state.selectedItem){
			case MenuList.Autocomplete : {
				ret.elem = <AutocompleteExample/>
				ret.inputConfigInfo = "label ==> label for your autocomplete \n" +
									"name  ==> name for your autocomplete \n" + 
									"setItem ==> function with name and value as parameters \n" + 
									"fetchFunc ==> promise to fetch autocomplete list \n" + 
									"value ==> initial value or selected value of autocomplete"
				break
			}

			case MenuList.DropDown : {
				ret.elem = <DropDown/>
				ret.inputConfigInfo = "label ==> label for your dropdown \n" +
									"name  ==> name for your dropdown \n" + 
									"setItem ==> function with name and value as parameters \n" + 
									"value ==> initial value or selected value of autocomplete"
				break
			}

			case MenuList.CheckBox : {
				ret.elem = <CheckBoxExample/>
				ret.inputConfigInfo = "label ==> label for your checkbox \n" +
									"name  ==> name for your checkbox \n" + 
									"setItem ==> function with name and value as parameters \n" + 
									"value ==> initial value or selected value of autocomplete"
				break
			}

			case MenuList.DateTime : {
				ret.elem = <DateTime/>
				ret.inputConfigInfo = "label ==> label for your datetime \n" +
									"name  ==> name for your datetime \n" + 
									"setItem ==> function with name and value as parameters \n" + 
									"value ==> initial value or selected value of datetime"
				break
			}

			case MenuList.NumberInput : {
				ret.elem = <NumberInput/>
				ret.inputConfigInfo = "label ==> label for your numberInput \n" +
									"name  ==> name for your numberInput \n" + 
									"setItem ==> function with name and value as parameters \n" + 
									"value ==> initial value or selected value of numberInput"	
				break
			}

			case MenuList.RadioGroup : {
				ret.elem = <RadioGroup/>
				ret.inputConfigInfo = "label ==> label for your radiogroup \n" +
									"name  ==> name for your radiogroup \n" + 
									"setItem ==> function with name and value as parameters \n" + 
									"value ==> initial value or selected value of radiogroup"	
				break	
			}

			case MenuList.SelectInput : {
				ret.elem = <SelectInput/>
				ret.inputConfigInfo = "label ==> label for your selectInput \n" +
									"name  ==> name for your selectInput \n" + 
									"setItem ==> function with name and value as parameters \n" + 
									"value ==> initial value or selected value of selectInput"
				break
			}

			case MenuList.TextInput : {
				ret.elem = <TextInput/>
				ret.inputConfigInfo = "label ==> label for your textInput \n" +
									"name  ==> name for your textInput \n" + 
									"setItem ==> function with name and value as parameters \n" + 
									"value ==> initial value or selected value of textInput"
				break
			}

			case MenuList.Reactform : {
				ret.elem = <TestForm/>
				ret.inputConfigInfo = "label ==> label for your form \n" +
									"name  ==> name for your form \n" + 
									"setItem ==> function with name and value as parameters \n" + 
									"value ==> initial value or selected value of form"
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

		let inputHtml = this.getSelectedElem()

		return (
				<Wrapper>
					<SideMenu list={this.menuList} setSelected={this.setSelected}/>
					<Content>
						<InfoWrapper>
							<h1>Code</h1>
							<p>{"import {" +this.state.selectedItem+"} from 'react-ui-components'"}</p> 
							<h2>Props</h2>
							<span>{"inputConfig(required), styleConfig(optional)"}</span>
							<h3>{"inputConfig object properties"}</h3>
							<pre>
								{
									inputHtml.inputConfigInfo
								}
							</pre>
						</InfoWrapper>	
						{inputHtml.elem}
					</Content>
				</Wrapper>
			)
	}
}


ReactDOM.render(<App/>,document.getElementById('mainContainer'))
