import React from 'react'
import {Wrapper,SelectWrapper,Arrow} from './styledComponents.js'

class SelectInput extends React.PureComponent{
	
	constructor(props){
		super(props)
		this.isDown = false
		this.selectedOption = props.value||null
		this.state = {
			optionsList: props.optionsList||[]
		}
	}

	componentWillReceiveProps(nextProps){
		this.selectedOption = nextProps.selectedOption||null
		this.setState({
			optionsList: nextProps.optionsList||[]
		})
	}

	selectHandler(e){
		let selectedVal = e.target.value
		this.state.optionsList.forEach((option)=>{
			if(option.id==selectedVal){
				this.selectedOption = option
			}
		})

		if(this.selectedOption){
			this.props.setItem(this.props.name,this.selectedOption)
		}
	}

	render(){
		let props = this.props
		let optionsHtml = this.state.optionsList.map((option)=>{
			if(this.selectedOption && (option.id==this.selectedOption.id)){
				return <option value={option.id} selected>{option.label}</option>
			}
			return <option value={option.id}>{option.label}</option>
		})

		if(!this.selectedOption){
			optionsHtml.push(
					<option value='' disabled selected>Select an option</option>
				)
		}

		return (
					<Wrapper isDown={this.isDown} isValid={props.isValid || props.isPristine}
								        helpText={props.helpText} errorText={props.errorText}>
						<SelectWrapper>
							<select onChange={this.selectHandler.bind(this)}>
								{optionsHtml}
							</select>
							<Arrow/>
						</SelectWrapper>	
						<label>{props.label}</label>
					</Wrapper>	
			)
	}

}

export default SelectInput