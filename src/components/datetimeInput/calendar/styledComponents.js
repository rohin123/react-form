import styled from 'styled-components'

const Wrapper = styled.div`
	position: relative;
	width: 100%;
	font-weight: 300;
	box-sizing: border-box;
	padding: 0 8px;
	background-color: var(--datePickerBgColor);
	box-shadow : var(--calendarShadow);
`

const Header = styled.div`
	position: relative;
	padding: 12px 0;
	text-align: center;
	color: var(--datePickerHeaderColor);
	text-transform: uppercase;
	border-bottom: var(--datePickerHeaderBorder);

	.month-span{
	//cursor: pointer;
	//font-size: 1.2em;
	}

	.arrow{
		position: absolute;
		width: 25px;
		height: 25px;
		top: 12px;
		cursor: pointer;
	}

	.left-arrow{
		left: 5px;
	}

	.left-arrow:before,
	.left-arrow:after{
		content: "";
		position: absolute;
		left: 5px;
		width: 10px;
		height: 2px;
		background-color: var(--datePickerArrowColor);
	}

	.left-arrow:before{
		top: 8px;
		transform : rotate(-40deg);
	}

	.left-arrow:after{
		top: 14px;
		transform : rotate(40deg);
	}

	.right-arrow{
		right: 5px;
	}

	.right-arrow:before,
	.right-arrow:after{
		content: "";
		position: absolute;
		right: 5px;
		width: 10px;
		height: 2px;
		background-color: var(--datePickerArrowColor);
	}

	.right-arrow:before{
		top: 14px;
		transform : rotate(-40deg);
	}

	.right-arrow:after{
		top: 8px;
		transform : rotate(40deg);
	}
`

const CalenderContent = styled.div`
	font-size: 0.8em;
	margin-bottom: 10px;

	.day-name-div{
		color: $orange-color;
		margin-top: 8px;
		margin-bottom: 8px;
	}

	.block{
		display: inline-block;
		width: 14.2%;
		text-align: center;
		box-sizing: border-box;
	}
	.numbers{
		padding: 6px 0;
		cursor: pointer;
		color: var(--datePickerDateColor);
		box-sizing: border-box;
	}
	.number-span{
		padding: 5px;
		border-radius: 50%;
		display: inline-block;
		min-width: 32px;
		box-sizing: border-box;
	}

	.number-span.selected-block{
		background-color: var(--datePickerSelectedDateBgColor);
		color : var(--datePickerSelectedDateColor);
		//color: $header-color;
	}

	.number-span.today{
		box-sizing: border-box;
		border: 1px solid var(--datePickerSelectedDateBgColor);
	}

	.numbers.disabled{
		color: #78688F;
		cursor: default;
	}
`

export {Wrapper,Header,CalenderContent}
