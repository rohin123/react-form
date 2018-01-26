import React from 'react';
import {Wrapper,Header,CalenderContent} from './styledComponents.js'


export default class Calendar extends React.PureComponent{
	constructor(props){
		super(props)
		this._numOfDays = [0,0,0,31,30,31,30,31,31,30,31,30,31,31,28];
		this._totalBlocks = 42;
		this._today = new Date().setHours(0,0,0,0);
		this._monthTexts=["","","","March","April","May","June","July","August","September","October","November","December","January","February"];
		this._handleMonthSelection = this._handleMonthSelection.bind(this)
		this.state = {
			_selection: undefined,
			_calendarView: undefined,
			_view: undefined,
			_selectedIndex: undefined,
			_today: undefined,
			_isMonthView: false,
		}
	}

	componentDidMount(){
		this._handleCurrentSelection(this.props.selectedDate, Date.now());
	}

	_handleSelection(index, date){
		let view = this.state._view;
		let month = view.month < 13 ? view.month-1 : view.month - 13;
		let year = view.year;

		let selectedDate = new Date(year, month, date).setHours(0,0,0,0);

		if(selectedDate == this._today || (!this.props.restrictOldDates&&selectedDate<this._today) || (!this.props.restrictFutureDates&&selectedDate>this._today)){
			this.setState({
				_selectedIndex: index,
				_selection: {
					index: index,
					date: date,
					month: view.month,
					year: view.year
				}
			});
			if(this.props.onDateSelection){
				this.props.onDateSelection(selectedDate);
			}
		}
	}

	_handleCurrentSelection(timeStamp, todayTimestamp){
		let viewDate = new Date(timeStamp || todayTimestamp);
		let month = viewDate.getMonth();
		month = month>=2 ? month+1 : month+13;
		let year = viewDate.getFullYear();
		let date = viewDate.getDate();

		let selectedDay = this._getDayNum(month, year)

		let today = new Date(todayTimestamp);
		let currMonth = today.getMonth();
		currMonth = currMonth>=2 ? currMonth+1 : currMonth+13;
		let currYear = today.getFullYear();
		let currDate = today.getDate();

		this.setState({
			_calendarView: selectedDay,
			_today: {
				date: currDate,
				month: currMonth,
				year: currYear
			},
			_view:{
				month: month,
				year: year,
				monthText: this._monthTexts[month]
			},
			_selection: {
				index: selectedDay.startDay + date -1,
				date: date,
				month: month,
				year: year
			},
			_selectedIndex: selectedDay.startDay + date -1,
		})
	}

	_handleMonthSelection(month){
		//debugger
		let year = this.state._view.year;
		this.setState({
			_calendarView: this._getDayNum(month, year),
			_view:{
				month: month,
				year: year,
				monthText: this._monthTexts[month],
			},
			_isMonthView: false,
			// _selectedIndex: undefined,
			// _selection: undefined, // change here
		})
	}

	_handleMonthOptions(){
		this.setState({
			_isMonthView: true,
		})
	}

	_changeMonth(isForward){
		let view = this.state._view;
		let year = view.year;
		let month = view.month;

		if(isForward){
			month = month + 1;
			if(month > 14){
				month = month - 12;
			}
			if(month == 13){
				year += 1;
			}
		}else{
			month = month - 1;
			if(month < 3){
				month = month + 12;
			}
			if(month == 12){
				year -= 1;
			}
		}

		this.setState({
			_isMonthView: false,
			_calendarView: this._getDayNum(month, year),
			_view:{
				month: month,
				year: year,
				monthText: this._monthTexts[month],
			},
			// _selectedIndex: undefined,
			// _selection: undefined,
		})
	}

	_getDayNum(month, yrs){
		let year = (month == 13 || month == 14) ? (yrs-1).toString() : yrs.toString();
		let m = month,
    		d = 1,
    		c = parseInt(year.substring(0,2)),
        	y = parseInt(year.substring(2));

        let w = d + Math.floor(13*(m+1)/5) + y + Math.floor(y/4) + Math.floor(c/4) - 2*c;
        let prevMonth = (m-1) == 2 ? 14 : (m-1);
        let prevYear = (prevMonth == 12) ? (yrs-1) : yrs;
        return {
        	startDay: (w>=0)? (w%7!= 0?w%7:7): (7-(Math.abs(w)%7)),
      		numOfDay: ((m != 14) ? this._numOfDays[m] : ((yrs%4 == 0) ? 29 : 28)),
      		previousMonthDays: ((prevMonth != 14) ? this._numOfDays[prevMonth] : ((prevYear%4 == 0) ? 29 : 28))
        }
	}

	render(){
		let blocksHtml = [];
		let calendarView = this.state._calendarView;
		let showYear = false;

		if(this.state._view && this.state._today){
			let checkToday = (this.state._view.month == this.state._today.month 
					&& this.state._view.year == this.state._today.year ) ? true: false;
			let isToday;
			let isSelectedViewVisible;
			if(this.state._selection){
				if(this.state._view.month == this.state._selection.month 
					&& this.state._view.year == this.state._selection.year){
					isSelectedViewVisible = true;
				}
			}

			if(calendarView){
				for(let index=1; index<=this._totalBlocks; index++){
					let date = index-calendarView.startDay+1;
					isToday = (checkToday && date == this.state._today.date) ? true:  false;
					
					if(index < calendarView.startDay){
						blocksHtml.push(
							<CalendarBlock key={"block_index_"+index}
								text={calendarView.previousMonthDays - calendarView.startDay + index + 1}
								isDisabled={true}/>
						)
					}else if(index > (calendarView.startDay + calendarView.numOfDay -1)){
						blocksHtml.push(
							<CalendarBlock key={"block_index_"+index}
								text={index - calendarView.startDay - calendarView.numOfDay + 1}
								isDisabled={true}/>
						)
					}else{
						blocksHtml.push(
							<CalendarBlock text={date}
								onSelection={this._handleSelection.bind(this, index, date)}
								selected={index == this.state._selectedIndex && isSelectedViewVisible}
								key={"block_index_"+index}
								isToday={isToday}/>
						)
					}
				}
			}

			if(this.state._view.year != this.state._today.year){
				showYear = true;
			}
		}

			return (
				<Wrapper>
					<Header>
						<span className="left-arrow arrow" 
					    		id="left_arrow" 
					    		onClick={this._changeMonth.bind(this, false)}/>

					    <span className="right-arrow arrow" 
					    		id="right_arrow"
					    		onClick={this._changeMonth.bind(this, true)} />

					    <span className="month-span" id="month_span"
					    		onClick={this._handleMonthOptions.bind(this)}>
					      {this.state._view ? (!showYear ? this.state._view.monthText : (this.state._view.monthText + ", " + this.state._view.year)) : ""}
					    </span>
					</Header>
					{
					  	this.state._isMonthView ?  <MonthSelector onMonthSelection={this._handleMonthSelection}/>
					  	: 
					  		<CalenderContent id="content_calender">
						  		<div className="day-name-div">
							       <div className="block">Su</div>
							       <div className="block">Mo</div>
							       <div className="block">Tu</div>
							       <div className="block">We</div>
							       <div className="block">Th</div>
							       <div className="block">Fr</div>
							       <div className="block">Sa</div>
							    </div>
							    {blocksHtml}
					  		</CalenderContent>
					}
				</Wrapper>
			)
	}
}

/************************************************ Blocks ***************************************************/

const CalendarBlock = React.createClass({
	getInitialState: function(){
		return {
			_isSelected: false,
			_isToday: false,
		}
	},

	componentDidMount: function(){
		this.setState({
			_isSelected: this.props.selected,
			_isToday: this.props.isToday
		})
	},

	componentWillReceiveProps: function(nextProps){
		this.setState({
			_isSelected: nextProps.selected,
			_isToday: nextProps.isToday
		})
	},

	_handleSelection: function(){
		if(this.props.onSelection){
			this.props.onSelection();
		}
	},

	render: function(){
		let selectedClass =  this.state._isSelected ? " selected-block " : " ";
		let todayClass = (this.state._isToday && !this.state._isSelected) ? " today ": " ";
		let disabledClass = this.props.isDisabled ? " disabled ": " ";
		return (
			<div className={"block numbers " + disabledClass} 
					onClick={this._handleSelection}>
				<span className={"number-span " + selectedClass + todayClass}>{this.props.text}</span>
			</div>
		)
	}
});


/****************************************** Month Selector ********************************************/

const MonthSelector = React.createClass({

	getInitialState: function(){
		this._months = [{text: "Jan",value: 13},{text: "Feb",value: 14},{text: "Mar",value: 3},{text: "Apr",value: 4},{text: "May",value: 5},{text: "Jun",value: 6},{text: "Jul",value: 7},{text: "Aug",value: 8},{text: "Sep",value: 9},{text: "Oct",value: 10},{text: "Nov",value: 11},{text: "Dec",value: 12},]
		return {}
	},

	_handleSelection: function(month){
		this.props.onMonthSelection(month);
	},

	render: function(){
		let monthsHtml = this._months.map((month)=>{
			return <div className="month-block" onClick={this._handleSelection.bind(this, month.value)}>{month.text}</div>
		})
		return (
				<div className="month-selector" id="month_selector">
					{monthsHtml}
				 </div>
			)
	}
});