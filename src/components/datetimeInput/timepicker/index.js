import React from 'react'
import {Wrapper,Header,Column,LastColumn,CloseTimePicker} from './styledComponents.js'


export default class TimePickerCore extends React.PureComponent{
	constructor(props){
		super(props)
		this.hours=['01','02','03','04','05','06','07','08','09','10','11','12']
		this.minutes=['00','05','10','15','20','25','30','35','40','45','50','55']
		this.ampm = ['AM','PM']
		
		this.state = {
			time : props.time
		}
	}

	componentWillReceiveProps(nextProps){
		this.setState({
			time : nextProps.time
		})
	}

	selecthour(val){
		let time = this.state.time
		time['hour'] = val
		this.props.setItem(time)
	}

	selectmin(val){
		let time = this.state.time
		time['minute'] = val
		this.props.setItem(time)
	}

	selectAMPM(val){
		let time = this.state.time
		time['ampm'] = val
		this.props.setItem(time)
	}

	render(){
		let timePickerState = this.props.open?'timepicker-dropdown':'hide',
			self = this,
			hourHtml = this.hours.map(function(item,index){
				if(item != self.state.time.hour){
					return <div className='cell' onClick={self.selecthour.bind(self,item)}><span className="time-num-span">{item}</span></div>
				}else{
					return <div className='cell selected' onClick={self.selecthour.bind(self,item)}><span className="time-num-span">{item}</span></div>
				}
				
			}),
			minuteHtml = this.minutes.map(function(item,index){
				if(item != self.state.time.minute){
					return <div className='cell' onClick={self.selectmin.bind(self,item)}><span className="time-num-span">{item}</span></div>
				}else{
					return <div className='cell selected' onClick={self.selectmin.bind(self,item)}><span className="time-num-span">{item}</span></div>
				}
				
			}),
			ampmHtml = this.ampm.map(function(item,index){
				if(item != self.state.time.ampm){
					return <div className='cell' onClick={self.selectAMPM.bind(self,item)}><span className="time-num-span">{item}</span></div>
				}else{
					return <div className='cell selected' onClick={self.selectAMPM.bind(self,item)}><span className="time-num-span">{item}</span></div>
				}
			})

		return (

				<Wrapper open = {this.props.open}>
					<Header>
						<div className='label-cell'>Hour</div>
						<div className='label-cell'>Minute</div>
						<div className='label-cell'>AM/PM</div>
					</Header>
					<Column>
						{hourHtml}
					</Column>
					<Column>
						{minuteHtml}
					</Column>
					<LastColumn>
						{ampmHtml}
					</LastColumn>
					<CloseTimePicker onClick={this.props.closeTimePicker}>
						DONE
					</CloseTimePicker>
				</Wrapper>

			)
	}

}