import React from 'react'
import {CheckboxWrapper,Wrapper,Tick,InputWrapper} from './styledComponents.js'

export default class CheckBox extends React.PureComponent{
	constructor(props){
		super(props)
		this.onChangeHandler = this.onChangeHandler.bind(this)
	}

	onChangeHandler(e){
		console.log('CheckBox',e,e.target.checked);
		this.props.setItem(this.props.name,e.target.checked)
	}

	render(){

		let props = this.props

		return (
				<Wrapper isVisible={true} checked={props.checked}>
					<CheckboxWrapper>
						<InputWrapper>
							<input id={props.name} type='checkbox' 
								name={props.name}
								onChange={this.onChangeHandler}/>
								<Tick checked={props.checked}/>
						</InputWrapper>
						<label htmlFor={props.name}>{props.label}</label>
						
					</CheckboxWrapper>	
				</Wrapper>
			)
	}
}