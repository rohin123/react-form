import React from 'react'
import {AnimatedBorder} from '../sharedStyledComponents.js'
import {InputWrapper} from './styledComponents.js'

export default class LabeledInput extends React.PureComponent{
	constructor(props){
		super(props)
		this.changeHandler = this.changeHandler.bind(this)
		this.focusHandler = this.focusHandler.bind(this)
		this.blurHandler = this.blurHandler.bind(this)
		this.state = {
			isDown:props.value?false:true,
			isFocused : false
		}
	}

	componentWillReceiveProps(nextProps){
		this.setState({
			isDown : nextProps.value ? false : true
		})	
	}

	componentDidMount(){

	}

	changeHandler(e){
		this.props.setItem(this.props.name,e.target.value)
	}

	focusHandler(e){
		this.setState({
			isDown : false,
			isFocused : true
		})
	}

	blurHandler(e){
		this.setState({
			isFocused : false
		})

		if(!e.target.value){
			this.setState({
				isDown:true
			})
		}
	}

	render(){
		let props = this.props
		return (
				<InputWrapper isValid={props.isValid||props.isPristine} errorText={props.errorText||''} helpText={props.helpText||''}
					isDown={this.state.isDown}>
					<input type={props.type} value={props.value||''} 
							onChange={this.changeHandler}
							disabled={props.isDisabled}
							onFocus={this.focusHandler}
							onBlur={this.blurHandler}
							readOnly = {props.readOnly}/>
					<AnimatedBorder focused={this.state.isFocused}
									valid={props.isValid||props.isPristine}/>		
					<label>{props.label}</label>		
				</InputWrapper>
			)
	}
}