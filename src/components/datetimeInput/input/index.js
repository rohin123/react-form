import React from 'react'
import {InputWrapper,InlineDateWrapper} from './styledComponents.js'
import {InlineWrapper} from '../../sharedStyledComponents.js'


export default class DatetimeInput extends React.PureComponent{
	constructor(props){
		super(props)
		
		this.onTimeChangeHandler = this.onTimeChangeHandler.bind(this)
		this.onDateChangeHandler = this.onDateChangeHandler.bind(this)

		this.time = props.time
		this.date = props.date
	}

	componentWillReceiveProps(nextProps){
		this.time = nextProps.time
		this.date = nextProps.date
	}

	onTimeChangeHandler(e){
		let val = e.target.value,
			name = e.target.name,
			maxLength = e.target.maxLength

		if(!maxLength || (maxLength>=val.length)){	
			this.time[name] = val
			this.props.handleDatetimeChange(this.date,this.time)
		}
	}

	onDateChangeHandler(e){
		let val = e.target.value,
			name = e.target.name,
			maxLength = e.target.maxLength

		if(maxLength>=val.length){
			this.dateDisplayObj[name] = val
			this.date = new Date(this.dateDisplayObj['year'],this.dateDisplayObj['month']-1,this.dateDisplayObj['date']).setHours(0,0,0,0)
			this.props.handleDatetimeChange(this.date,this.time)
		}	
	}

	spreadTimestamp(){
		let date = new Date(this.date)
		return {
			date : date.getDate() < 10 ? '0'+ date.getDate() :  date.getDate(),
			month : (date.getMonth()+1) < 10 ? '0'+(date.getMonth()+1) : (date.getMonth()+1),
			year : date.getFullYear()
		}
	}

	render(){
		let props = this.props,
			optionsHtml = [
							<option value='AM' selected={this.time['ampm']=='AM'}>AM</option>,
							<option value='PM' selected={this.time['ampm']=='PM'}>PM</option>
							]
		this.dateDisplayObj = null				

		if(props.showdate){
			this.dateDisplayObj = this.spreadTimestamp()
		}

		return (
				<InputWrapper>
						{props.showdate?(
								<InlineDateWrapper>
									<input type='number' 
											name='date'
											size='2'
											min='01'
											max='31'
											maxLength={2}
											value={this.dateDisplayObj['date']}
											onChange={this.onDateChangeHandler}/>
									<span>/</span>
									<input type='number' 
											name='month'
											size='2'
											min='01'
											max='12'
											maxLength={2}
											value={this.dateDisplayObj['month']}
											onChange={this.onDateChangeHandler}/>
									<span>/</span>
									<input type='number' 
											name='year'
											size='4'
											min='1900'
											max='2200'
											maxLength={4}
											value={this.dateDisplayObj['year']}
											onChange={this.onDateChangeHandler}/>
								</InlineDateWrapper>	
								):null}
						{props.showtime?(
								<InlineWrapper>
									<input type='number' 
											size='2' 
											value={this.time['hour'] < 10 ? '0'+this.time['hour'] : this.time['hour']} 
											name='hour'
											min = '01'
											max = '12'
											maxLength={2}
											onChange={this.onTimeChangeHandler}/>
									<span>:</span>
									<input type='number' 
											size='2' 
											value={this.time['minute']}
											name='minute'
											min = '00'
											max = '55'
											step = '5'
											maxLength={2}
											onChange={this.onTimeChangeHandler}/>
									<select name='ampm' tabIndex={0}
											onChange={this.onTimeChangeHandler}>	
										{optionsHtml}
									</select>		
								</InlineWrapper>	
								):null}
						<label>
							{props.label}
						</label>	
					</InputWrapper>
			)

	}
}
