import React from 'react'
import {BlockWrapper} from '../sharedStyledComponents.js'
import {Wrapper,RadioOption} from './styledComponents.js'

export default class RadioButtonGroup extends React.PureComponent{
	constructor(props){
		super(props)
		this.onChangeHandler = this.onChangeHandler.bind(this)
	}

	onChangeHandler(e){
		let value  = this.props.optionsList.filter((option)=>{
			if(option.id == e.target.value){
				return true
			}

			return false
		})
		this.props.setItem(e.target.name,value[0])
	}

	render(){
		let props = this.props,
			optionsHtml = props.optionsList.map((option)=>{
				if(option.display=='block'){
					return (
							<BlockWrapper>
								<RadioOption>
									<input type='radio' 
										name={props.name} 
										value={option.id} 
										onChange={this.onChangeHandler}
										checked={option.id == (props.value && props.value.id)}/>
									<label>{option.label}</label>	
								</RadioOption>
							</BlockWrapper>
						)
				}
				return <RadioOption>
							<input type='radio' 
								name={props.name} 
								value={option.id} 
								onChange={this.onChangeHandler}
								checked={option.id == (props.value && props.value.id)}/>
							<label>{option.label}</label>	
						</RadioOption>	
			})

		return (
				<Wrapper>
					<p>{props.label}</p>
					{
						optionsHtml
					}
				</Wrapper>
			)
	}
}


