import styled from 'styled-components'

const Wrapper = styled.div`
	width: 100%;
    height: 230px;
    overflow: hidden;
    position: relative;
    z-index: 3;
    text-align: center;
    box-shadow : var(--timepickerShadow);
    display : ${props => props.open?'block':'none'};
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

export {Wrapper,Header,Column,LastColumn,CloseTimePicker}