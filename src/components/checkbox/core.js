import React from 'react'
import {CheckboxWrapper,Wrapper,Tick,InputWrapper} from './styledComponents.js'

export default class CheckBox extends React.PureComponent{
	constructor(props){
		super(props)
		this.onChangeHandler = this.onChangeHandler.bind(this)
	}

	onChangeHandler(e){
		//console.log('CheckBox',e,e.target.checked);
		this.props.setItem(this.props.name,!this.props.value)
	}

	render(){

		let props = this.props
		return (
				<CheckboxWrapper>
					<InputWrapper checked={props.value} onClick={this.onChangeHandler}>
						{/*<input id={props.name} type='checkbox' 
							name={props.name}
							onChange={this.onChangeHandler}
							readOnly={props.readOnly}/>*/}
							<Tick checked={props.value}/>
					</InputWrapper>
					<label onClick={this.onChangeHandler}>{props.label}</label>	
				</CheckboxWrapper>	
			)
	}
}