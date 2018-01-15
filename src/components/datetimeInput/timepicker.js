import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	width: 100%;
    height: 230px;
    overflow: hidden;
    position: relative;
    z-index: 3;
    text-align: center;
    box-shadow : var(--timepickerShadow);
`

const Header = styled.div`
	width: 100%;
	position: absolute;
	top:-1px;
	background-color: var(--timepickerHeaderBgColor);
	color : var(--timepickerHeaderColor);
	.label-cell{
		text-align: center;
		width: 33.3%;
		height: 100%;
		display: inline-block;
	    padding: 7px 0;
	    box-sizing: border-box;
	    border-right: 1px solid;
	    border-color : var(--timepickerHeaderBorderColor);
	    font-weight: 300;
	}
	.label-cell:last-child{
		border-right: none;
	}
`

const Column = styled.div`
	
	width: 33.3%;
    height: 98%;
    padding: 33px 0 39px;
    overflow: scroll;
    box-sizing: border-box;
    border-right: 1px solid var(--timepickerColumnBorderColor);
    display: inline-block;
    background-color: var(--timepickerColumnBgColor);
    color: var(--timepickerColumnColor);

	.cell{
		cursor: pointer;
		padding: 14px 0;

		.time-num-span{
			border-bottom:1px solid var(--timepickerColumnColor);
			padding: 6px 14px;
		}
	}
	.cell.selected{
	
		.time-num-span{
			background-color: var(--timepickerSelectedCellColor);
			color: #fff;
		}
	}
`

const LastColumn = Column.extend`
	border : none;
`

const CloseTimePicker = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
	text-align: center;
	background-color: var(--timepickerFooterBgColor);
	color: var(--timepickerFooterColor);
	cursor: pointer;
	padding: 10px 0;
`


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