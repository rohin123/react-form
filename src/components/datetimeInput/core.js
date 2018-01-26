import React from 'react'
import TimePicker from './timepicker'
import Calendar from './calendar'
import {VhAlignedWrapper,FixedDivWrapper} from '../sharedStyledComponents.js'
import DatetimeInput from './input'
import {Wrapper,TimeInputWrapper,DateInputWrapper} from './styledComponents.js'

export default class DateTimePicker extends React.PureComponent{
	constructor(props){
		super(props)
		let datetime = this.getDateTime(props.value)
		this.toggleCalendar = this.toggleCalendar.bind(this)
		this.handleDateSelect = this.handleDateSelect.bind(this)
		this.toggleDropdown = this.toggleDropdown.bind(this)
		this.closeTimePicker = this.closeTimePicker.bind(this)
		this.setItem = this.setItem.bind(this)
		this.setTime = this.setTime.bind(this)
		this.setDateTime = this.setDateTime.bind(this)
		this.closePopup = this.closePopup.bind(this)
		this.stopBubbling = this.stopBubbling.bind(this)

		this.state = {
			openTime : false,
			openCalendar : false,
			date : datetime.date,
			time : datetime.time
		}
	}

	componentWillMount(){
	}

	closePopup(e){
		this.setState({
				openTime : false,
				openCalendar : false
			})
	}

	componentWillUnmount(){
	}

	componentWillReceiveProps(nextProps){
		//console.log('componentWillReceiveProps')
		let timestamp = (nextProps.value||nextProps.value==0)?nextProps.value:null,
			datetime = this.getDateTime(timestamp)
		this.setState({
			date : datetime.date,
			time : datetime.time
		})
	}

	getDateTime(timestamp){

		if(!this.props.showdate){
			let timezoneOffset = new Date().getTimezoneOffset()
			timestamp = timestamp + timezoneOffset*(60000)
		}
		let newDate = new Date(timestamp),
		ampm = 'AM',
		hours = newDate.getHours(),
		minute = newDate.getMinutes()
		//console.log(hours,minute,ampm)
		if(hours>12){
			hours = hours-12
			ampm = 'PM'
		}

		if(hours==12){
			ampm = 'PM'
		}

		if(hours==0){
			hours = '12'
			ampm = 'AM'
		}

		if(minute<10){
			minute = '0'+minute
		}

		let currDate = new Date(newDate.getFullYear(),newDate.getMonth(),newDate.getDate(),0,0,0,0).getTime()
		
		return {
			date : currDate,
			time : {
				hour:hours,
				minute:minute,
				ampm:ampm
			}	
		}
	}

	toggleDropdown(){
		this.setState(function ( state, props){
			return {
				openCalendar : false,
				openTime : !(state.openTime)
			}
		})
	}

	closeTimePicker(){
		this.setState({
			openTime : false
		})
	}

	setTime(time){
		this.setItem(this.state.date,time)
	}

	setItem(date,time){	
		let dateObj = new Date(date),
			dateTimestamp = new Date(dateObj.getFullYear(),dateObj.getMonth(),dateObj.getDate(),0,0,0,0).getTime()	
		let timestamp = 0
		
		if(this.props.showdate){
			timestamp = timestamp + dateTimestamp
		}

		if(this.props.showtime){
			timestamp = timestamp + this.calculateMillisecs(time)
		}

		this.props.setItem(this.props.name,timestamp)
	}

	calculateMillisecs(time){
		let millisecs = 0
		if(time['hour']=='12'){

		}else{
			millisecs += parseInt(time['hour'])*60*60*1000
		}

		return millisecs+parseInt(time['minute'])*60*1000+ (time['ampm']=='PM'?12*60*60*1000:0)
	}

	toggleCalendar(){
		this.setState((state)=>{
			return {
				openTime:false,
				openCalendar:!state.openCalendar
			}
		})
	}

	handleDateSelect(timestamp){
		this.setItem(timestamp,this.state.time)
	}

	setDateTime(date,time){
		this.setItem(date,time)
	}

	stopBubbling(e){
		e.stopPropagation()
	}

	render(){
		let props = this.props
		return (
				<Wrapper>
					<DatetimeInput showdate={props.showdate}
									showtime={props.showtime}
									time={this.state.time}
									date={this.state.date}
									handleDatetimeChange={this.setDateTime}
									label={props.label}/>
					<DateInputWrapper showdate={props.showdate} 
										onClick={this.toggleCalendar}>
					</DateInputWrapper>
					<TimeInputWrapper showtime={props.showtime} 
										onClick={this.toggleDropdown}>			
					</TimeInputWrapper>
					<FixedDivWrapper open={this.state.openCalendar || this.state.openTime} 
									onClick={this.closePopup}>
						<VhAlignedWrapper open={this.state.openCalendar || this.state.openTime}
									onClick={this.stopBubbling}>
							{
								this.state.openCalendar?<Calendar selectedDate={this.state.date}
										onDateSelection={this.handleDateSelect}/>:
										null
							}
							<TimePicker open={this.state.openTime}
										closeTimePicker={this.closeTimePicker}
										setItem={this.setTime}
										time={this.state.time}/>
						</VhAlignedWrapper>	
					</FixedDivWrapper>	
				</Wrapper>
			)
	}
}