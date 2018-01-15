import React from 'react'
import LabeledInput from './components/labeledInput'
import styled from 'styled-components'
import objectAssign from 'object-assign'
import AutoComplete from './components/autocomplete'
import Selectbox from './components/select'
import Dropdown from './components/dropdown'
import ColorConfig from './colorConfig.js'
import CheckBox from './components/checkbox'
import RadioButtonGroup from './components/radioButtonGroup'
import {BlockWrapper , HeadingWrapper, SubHeadingWrapper} from './components/sharedStyledComponents.js'
import DateTime from './components/datetimeInput'
import ClosePopupListener from './helpers/closePopupListener.js'

const CSSVariables = styled.div`
  --formBgColor : ${props => props.FORM_BACKGROUND};
  --labelColor : ${props => props.LABEL_COLOR};
  --inputColor : ${props => props.INPUT_COLOR};
  --inputBorderColor : ${props => props.INPUT_BORDER_COLOR};
  --helpTextColor : ${props => props.HELPTEXT_COLOR};
  --errorTextColor : ${props => props.ERRORTEXT_COLOR};
  --dropdownColor : ${props => props.DROPDOWN_COLOR};
  --dropdownBgColor : ${props => props.DROPDOWN_BACKGROUND};
  --dropdownInputBgColor : ${props => props.DROPDOWN_INPUT_BACKGROUND};
  --dropdownHoverColor : ${props => props.DROPDOWN_HOVER_COLOR};
  --dropdownHoverBgColor : ${props => props.DROPDOWN_HOVER_BG_COLOR};
  --defaultGreen : ${props => props.DEFAULT_GREEN_COLOR};
  --defaultRed : ${props => props.DEFAULT_RED_COLOR};
  --defaultBlue :${props => props.DEFAULT_BLUE_COLOR};
  --checkboxBorderTrue : ${props => props.CHECKBOX_BORDER_TRUE};
  --checkboxBorderFalse : ${props => props.CHECKBOX_BORDER_FALSE};
  --checkboxTrikColor : ${props => props.CHECKBOX_TICK_COLOR};
  --flexBasis : ${props => props.FLEX_BASIS};
  --labelFontSize : ${props => props.LABEL_FONT_SIZE};
  --dropdownLabelFontSize : ${props => props.DROPDOWN_LABEL_FONT_SIZE};
  --inputFontSize : ${props => props.INPUT_FONT_SIZE};
  --infoFontSize : ${props => props.INFO_FONT_SIZE};
  --dropdownInputShadow : ${props => props.DROPDOWN_INPUT_SHADOW};
  --dropdownShadow : ${props => props.DROPDOWN_SHADOW};
  --infoBgColor : ${props => props.INFO_BG_COLOR};
  --infoBoxShadow : ${props => props.INFO_BOX_SHADOW};
  --headingBorder : ${props => props.HEADING_BORDER};
  --datePickerBgColor : ${props => props.DATE_PICKER_BG_COLOR};
  --datePickerHeaderColor : ${props => props.DATE_PICKER_HEADER_COLOR};
  --datePickerHeaderBorder : ${props => props.DATE_PICKER_HEADER_BORDER};
  --datePickerArrowColor : ${props => props.DATE_PICKER_ARROW_COLOR};
  --datePickerDateColor : ${props => props.DATE_PICKER_DATE_COLOR};
  --datePickerSelectedDateColor : ${props => props.DATE_PICKER_SELECTED_DATE_COLOR};
  --datePickerSelectedDateBgColor : ${props => props.DATE_PICKER_SELECTED_DATE_BG_COLOR};
  --timepickerHeaderBgColor : ${props => props.TIME_PICKER_HEADER_BG_COLOR};
  --timepickerHeaderColor : ${props => props.TIME_PICKER_HEADER_COLOR};
  --timepickerHeaderBorderColor : ${props => props.TIME_PICKER_HEADER_BORDER_COLOR};
  --timepickerColumnBorderColor : ${props => props.TIME_PICKER_COLUMN_BORDER_COLOR};
  --timepickerColumnBgColor : ${props => props.TIME_PICKER_COLUMN_BG_COLOR};
  --timepickerColumnColor : ${props => props.TIME_PICKER_COLUMN_COLOR};
  --timepickerSelectedCellColor : ${props => props.TIME_PICKER_SELECTED_CELL_COLOR};
  --timepickerFooterColor : ${props => props.TIME_PICKER_FOOTER_COLOR};
  --timepickerFooterBgColor : ${props => props.TIME_PICKER_FOOTER_BG_COLOR};
  --headingFontSize : ${props => props.HEADING_FONT_SIZE};
  --subheadingFontSize : ${props => props.SUB_HEADING_FONT_SIZE};
  --calendarShadow : ${props => props.DATE_PICKER_SHADOW};
  --timepickerShadow : ${props => props.TIME_PICKER_SHADOW};
`;

const FormWrapper = styled.div`
	display:flex;
	flex-direction:column;
	background:var(--formBgColor);
	font-weight:300;
	input{
		font-weight:300;
		padding:4px;
	}

	input[type='number'] {
	    -moz-appearance:textfield;
	}
	/* Webkit browsers like Safari and Chrome */
	input[type=number]::-webkit-inner-spin-button,
	input[type=number]::-webkit-outer-spin-button {
	    -webkit-appearance: none;
	    margin: 0;
	}
`

const InputWrapper = styled.div`
	display:flex;
	flex-direction:row;
	flex-wrap:wrap;
	justify-content:flex-start;
	align-items : center;
	padding:10px;
	font-size:20px;
`

const ButtonsWrapper = styled.div`
	display:flex;
	flex-direction:row;
	flex-wrap:wrap;
	justify-content:center;
	padding:10px 0;
`

const Button = styled.div`
	padding:6px 15px;
	color:${props => props.color||'#333'};
	background-color:${props => props.bgColor||'#c3c3c3'};
	border-radius:3px;
`

export default class GenericForm extends React.PureComponent{
	constructor(props){
		super(props)
		this.formState = this.init(props.formData)
		this.setItem = this.setItem.bind(this)
		this.state = {
			reRender:false
		}
	}

	componentWillMount(){
		ClosePopupListener.init()
	}

	componentWillUnmount(){
		ClosePopupListener.destroy()
	}

	componentWillReceiveProps(nextProps){
		this.formState = this.init(nextProps.formData)
	}

	init(formData){
		console.log('GenericForm',formData)
		let res = {},
			headingIndex = 0

		formData.map((formItem)=>{
			
			if(formItem.type=='heading' || formItem.type=='subheading'){
				formItem.name = 'heading_'+headingIndex
				formItem.required = false
				headingIndex++
			}

			if(formItem.type=='datetime' && !formItem.value){
				formItem.isValid = true
				if(formItem.showtime){
					formItem.value = 0
				}
				if(formItem.showdate){
					formItem.value = new Date().setHours(0,0,0,0)
				}
			}

			let name = formItem.name

			res[name] = objectAssign({},formItem,{
				isValid:!formItem.required,
				isPristine:true
			})

		})	

		console.log(res)
		return res
	}

	setItemHelper(formItem,value){
	
		if(value && value.dependent){
			for(let key in value.dependent){
				let dependentItem = this.formState[key]
				dependentItem = objectAssign({},dependentItem,value.dependent[key])
				dependentItem.isValid = this.checkValidity(dependentItem)
				this.formState[key] = dependentItem
			}

		}

		formItem.value = value
		formItem.isValid = this.checkValidity(formItem)
		formItem.isPristine = false
		this.setState((state)=>{
			return {
				reRender : !state.reRender
			}
		})
	}

	setItem(name,value){
		let formItem = this.formState[name],
			dependentFetchItem = {}

		if(formItem.dependentFetchFunc){
			formItem.dependentFetchFunc(value).then((res)=>{
				dependentFetchItem = res
				let mergedDependency = objectAssign({},value.dependent||{},res||{})
				value.dependent = mergedDependency
				this.setItemHelper(formItem,value)

			}).catch((err)=>{

				dependentFetchItem = null
				this.setItemHelper(formItem,value)

			})
		}else{
			this.setItemHelper(formItem,value)
		}
	}

	checkValidity(formItem){

		let value = formItem.value
		if(value && (toString.call(value)=="[object Object]")){
			return true
		}else if(value || value === 0){	

			if(formItem.validityRegex){
				let pat = new RegExp(formItem.validityRegex)
				formItem.errorText = formItem.validityErrorText
				return pat.test(value)
			}

			return true

		}else{

			if(formItem.requiredCondition && typeof formItem.requiredCondition == "function"){
				formItem.required = formItem.requiredCondition(this.formState)
			}

			if(formItem.required){
				formItem.errorText = 'Required Input. Please Fill.'
				return false
			}

			return true
		}
	}

	onClickHandler(button){
		if(!button.checkValidity  ||  this.checkFormValidity()){
			button.onClickHandler(this.formState)
		}else{
			console.log(this.formState)
			this.setState((state)=>{
				return {
					reRender : !state.reRender
				}
			})
		}
	}

	checkFormValidity(){
		let ret = true
		for(let key in this.formState){
			if(this.formState[key].isPristine){
				this.formState[key].isPristine = false
			}

			if(!this.checkValidity(this.formState[key])){
				ret = false
				this.formState[key].isValid = false
			}
		}
		return ret
	}

	getFormElement(formItem){

		let ret = null

		switch(formItem.type){

			case 'text':{				
			}

			case 'number':{

				ret = <LabeledInput {...formItem} 
									setItem={this.setItem}/>	
				break					
			}

			case 'dropdown':{

				ret = <Dropdown {...formItem}
									setItem={this.setItem}/>
				break									
			}

			case 'checkbox':{

				ret = <CheckBox {...formItem}
									checked={formItem.value}
									setItem={this.setItem}/>
				break					
			}

			case 'file':{

				return null
			}

			case 'autocomplete':{

				ret = <AutoComplete {...formItem}
									setItem={this.setItem}/>
				break						

			}

			case 'select':{

				ret =  <Selectbox {...formItem}
									setItem={this.setItem}/>
				break					
			}

			case 'radiogroup':{

				ret =  <RadioButtonGroup {...formItem}
									setItem={this.setItem}/>
				break					
			}

			case 'heading' : {

				ret = <HeadingWrapper>
							{formItem.label}
						</HeadingWrapper>

				break		
			}

			case 'subheading' : {
				
				ret = <SubHeadingWrapper>
							{formItem.label}
						</SubHeadingWrapper>

				break
			}

			case 'datetime' : {

				ret = <DateTime {...formItem}
								setItem={this.setItem}/>
				break
			}	

			default:{
				return null
			}
		}

		if(formItem.display == 'block'){
			return <BlockWrapper>
						{ret}
					</BlockWrapper>
		}

		return ret
	}	

	render(){
		console.log('render GenericForm',this.formState)
		let formStateKeys = Object.keys(this.formState)||[],
			formHtml = formStateKeys.map((key)=>{
				let formItem = this.formState[key]
				return this.getFormElement(formItem)
			}),
			buttonsHtml = this.props.formButtons.map((item)=>{
					return <Button {...item} onClick={this.onClickHandler.bind(this,item)}>{item.label}</Button>
			})

		return(
				<CSSVariables {this.props.colorConfig || ...ColorConfig}>
					<FormWrapper>
						<InputWrapper>
							{formHtml}
						</InputWrapper>	
						<ButtonsWrapper>
							{buttonsHtml}
						</ButtonsWrapper>	
					</FormWrapper>
				</CSSVariables>	
		) 	
	}
}