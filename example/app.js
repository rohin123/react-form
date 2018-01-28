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
import TableElement from './tableElement'
import AutoCompColorInfo from './autocomplete/colorInfo.js'
import AutoCompInputInfo from './autocomplete/inputInfo.js'
import CheckboxColorInfo from './checkbox/colorInfo.js'
import CheckboxInputInfo from './checkbox/inputInfo.js'
import DatetimeColorInfo from './datetime/colorInfo.js'
import DatetimeInputInfo from './datetime/inputInfo.js'
import DropdownColorInfo from './dropdown/colorInfo.js'
import DropdownInputInfo from './dropdown/inputInfo.js'
import SelectColorInfo from './select/colorInfo.js'
import SelectInputInfo from './select/inputInfo.js'
import RadioColorInfo from './radiogroup/colorInfo.js'
import RadioInputInfo from './radiogroup/inputInfo.js'
import TextColorInfo from './textInput/colorInfo.js'
import TextInputInfo from './textInput/inputInfo.js'
import NumberColorInfo from './numberInput/colorInfo.js'
import NumberInputInfo from './numberInput/inputInfo.js'
import FormColorInfo from './form/colorInfo.js'
import FormInputInfo from './form/inputInfo.js'


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
	overflow-x : auto;

	h1,h2,h3{
		margin : 20px 0;
		background-color : whitesmoke;
		font-weight: 400;
    	padding: 0 10px;
	}
`

const InfoWrapper = styled.div`
	
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
				
				ret.inputConfigInfo = <TableElement tableHeader={AutoCompInputInfo.tableHeader} 
													tableContent={AutoCompInputInfo.tableContent}/>
				
				
				ret.colorConfigInfo = <TableElement tableHeader={AutoCompColorInfo.tableHeader}
													tableContent={AutoCompColorInfo.tableContent}/>				
				break
			}

			case MenuList.DropDown : {
				ret.elem = <DropDown/>
				ret.inputConfigInfo = <TableElement tableHeader={DropdownInputInfo.tableHeader} 
													tableContent={DropdownInputInfo.tableContent}/>
				
				
				ret.colorConfigInfo = <TableElement tableHeader={DropdownColorInfo.tableHeader}
													tableContent={DropdownColorInfo.tableContent}/>				
				break
			}

			case MenuList.CheckBox : {
				ret.elem = <CheckBoxExample/>
				ret.inputConfigInfo = <TableElement tableHeader={CheckboxInputInfo.tableHeader} 
													tableContent={CheckboxInputInfo.tableContent}/>
				
				
				ret.colorConfigInfo = <TableElement tableHeader={CheckboxColorInfo.tableHeader}
													tableContent={CheckboxColorInfo.tableContent}/>				
				break
			}

			case MenuList.DateTime : {
				ret.elem = <DateTime/>
				ret.inputConfigInfo = <TableElement tableHeader={DatetimeInputInfo.tableHeader} 
													tableContent={DatetimeInputInfo.tableContent}/>
				
				
				ret.colorConfigInfo = <TableElement tableHeader={DatetimeColorInfo.tableHeader}
													tableContent={DatetimeColorInfo.tableContent}/>					
				break
			}

			case MenuList.NumberInput : {
				ret.elem = <NumberInput/>
				ret.inputConfigInfo = <TableElement tableHeader={NumberInputInfo.tableHeader} 
													tableContent={NumberInputInfo.tableContent}/>
				
				
				ret.colorConfigInfo = <TableElement tableHeader={NumberColorInfo.tableHeader}
													tableContent={NumberColorInfo.tableContent}/>				
				break
			}

			case MenuList.RadioGroup : {
				ret.elem = <RadioGroup/>
				ret.inputConfigInfo = <TableElement tableHeader={RadioInputInfo.tableHeader} 
													tableContent={RadioInputInfo.tableContent}/>
				
				
				ret.colorConfigInfo = <TableElement tableHeader={RadioColorInfo.tableHeader}
													tableContent={RadioColorInfo.tableContent}/>					
				break	
			}

			case MenuList.SelectInput : {
				ret.elem = <SelectInput/>
				ret.inputConfigInfo = <TableElement tableHeader={SelectInputInfo.tableHeader} 
													tableContent={SelectInputInfo.tableContent}/>
				
				
				ret.colorConfigInfo = <TableElement tableHeader={SelectColorInfo.tableHeader}
													tableContent={SelectColorInfo.tableContent}/>			
				break
			}

			case MenuList.TextInput : {
				ret.elem = <TextInput/>
				ret.inputConfigInfo = <TableElement tableHeader={TextInputInfo.tableHeader} 
													tableContent={TextInputInfo.tableContent}/>
				
				
				ret.colorConfigInfo = <TableElement tableHeader={TextColorInfo.tableHeader}
													tableContent={TextColorInfo.tableContent}/>			
				break
			}

			case MenuList.Reactform : {
				ret.elem = <TestForm/>
				ret.inputConfigInfo = <TableElement tableHeader={FormInputInfo.tableHeader} 
													tableContent={FormInputInfo.tableContent}/>
				
				
				ret.colorConfigInfo = <TableElement tableHeader={FormColorInfo.tableHeader}
													tableContent={FormColorInfo.tableContent}/>			
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
						<h1>Demo</h1>	
							{inputHtml.elem}
						<InfoWrapper>
							<h1>Code</h1>
							<p>{"import {" +this.state.selectedItem+"} from 'react-ui-components'"}</p> 
							<h2>Props</h2>
							<span>{"inputConfig(required), styleConfig(optional)"}</span>
							<pre>
								<h3>inputConfig object properties</h3>
								{
									inputHtml.inputConfigInfo
								}
								<h3>
									colorConfig object properties
								</h3>	
								{
									inputHtml.colorConfigInfo
								}
							</pre>	
						</InfoWrapper>
					</Content>
				</Wrapper>
			)
	}
}


ReactDOM.render(<App/>,document.getElementById('mainContainer'))
