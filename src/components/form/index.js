import React from 'react'
import LabeledInput from '../labeledInput/core.js'
import objectAssign from 'object-assign'
import AutoComplete from '../autocomplete/core.js'
import Selectbox from '../select/core.js'
import Dropdown from '../dropdown/core.js'
import ColorConfig from './colorConfig.js'
import CheckBox from '../checkbox/core.js'
import RadioButtonGroup from '../radioButtonGroup/core.js'
import {BlockWrapper , HeadingWrapper, SubHeadingWrapper} from '../sharedStyledComponents.js'
import DateTime from '../datetimeInput/core.js'
import ClosePopupListener from '../../helpers/closePopupListener.js'
import {CSSVariables,FormWrapper,InputsWrapper,ButtonsWrapper,Button,InputWrapper} from './styledComponents.js'


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
	}

	componentWillUnmount(){
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.formUpdated){
			this.formState = this.init(nextProps.formData)
		}	
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

			if(formItem.readOnly){
				formItem.isValid = true
			}

			let name = formItem.name

			res[name] = objectAssign({},formItem,{
				isValid:formItem.isValid?true : !formItem.required,
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

				ret = 	<InputWrapper>
							<LabeledInput {...formItem} 
									setItem={this.setItem}/>
					 	</InputWrapper>				
				break					
			}

			case 'dropdown':{

				ret = 	<InputWrapper>
							<Dropdown {...formItem}
									setItem={this.setItem}/>
						</InputWrapper>			
				break									
			}

			case 'checkbox':{

				ret = 	<InputWrapper>
							<CheckBox {...formItem}
									setItem={this.setItem}/>
						</InputWrapper>			
				break					
			}

			case 'file':{

				return null
			}

			case 'autocomplete':{

				ret = 	<InputWrapper>
							<AutoComplete {...formItem}
									setItem={this.setItem}/>
						</InputWrapper>			
				break						

			}

			case 'select':{

				ret =  	<InputWrapper>
							<Selectbox {...formItem}
									setItem={this.setItem}/>
						</InputWrapper>			
				break					
			}

			case 'radiogroup':{

				ret =  	<InputWrapper>
							<RadioButtonGroup {...formItem}
									setItem={this.setItem}/>
						</InputWrapper>			
				break					
			}

			case 'heading' : {

				ret = 	<HeadingWrapper>
							{formItem.label}
						</HeadingWrapper>
				break		
			}

			case 'subheading' : {
				
				ret = 	<SubHeadingWrapper>
								{formItem.label}
						</SubHeadingWrapper>
				break
			}

			case 'datetime' : {

				ret = 	<InputWrapper>
							<DateTime {...formItem}
								setItem={this.setItem}/>
						</InputWrapper>		
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
			}),
			styleConfig = this.props.colorConfig || ColorConfig

		return(
				<CSSVariables {...styleConfig}>
					<FormWrapper>
						<InputsWrapper>
							{formHtml}
						</InputsWrapper>	
						<ButtonsWrapper>
							{buttonsHtml}
						</ButtonsWrapper>	
					</FormWrapper>
				</CSSVariables>	
		) 	
	}
}

