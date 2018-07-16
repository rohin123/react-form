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
		let svg = <svg viewBox="0 0 100 100">
							 <g>
							   <rect x='0' y='0' fill={props.bg_color} width='100' height='100'></rect>
							  <path d="M10 55 L35 80 L90 20" fill='none' stroke={props.tick_color} style={{strokeWidth: '12px'}}></path>
							 </g>
							</svg>

		return (
				<CheckboxWrapper>
					<InputWrapper checked={props.value} onClick={this.onChangeHandler}>
						{/*<input id={props.name} type='checkbox'
							name={props.name}
							onChange={this.onChangeHandler}
							readOnly={props.readOnly}/>*/}
							<Tick checked={props.value}>
							  {svg}
							</Tick>
					</InputWrapper>
					<label onClick={this.onChangeHandler}>{props.label}</label>
				</CheckboxWrapper>
			)
	}
}
