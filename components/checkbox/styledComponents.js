import styled from 'styled-components'

const Wrapper = styled.div`
	position:relative;
	flex-basis : var(--flexBasis);
	padding : 15px 0 0;
	margin: 10px;
	input[type='checkbox']{
		-webkit-appearance: none;
	    width: 16px;
	    height: 16px;
	    border: 2px solid;
	    border-color : ${ props=> props.checked?'var(--checkboxBorderTrue)':'var(--checkboxBorderFalse)'};
	    vertical-align: bottom;
	    border-radius: 4px;
	    z-index:1;
	    position : relative;
	}

	&:hover{
		background : '#c3c3c3';
	}
`

const CheckboxWrapper = styled.div`
	display: inline-block;
    position: relative;
    z-index: 1;
    background: transparent;

    label{
    	font-size : var(--labelFontSize);
    	color : var(--labelColor);
    }

	&:after{
		position: absolute;
	    content: '';
	    width: 46px;
	    height: 46px;
	    background: #333;
	    border-radius: 50%;
	    top: -9px;
	    left: -13px;
	    opacity: 0;
	    transform : scale(1);
	    transition : all 0.4s;
	    z-index : -1;
	}

	&:active:after{
		opacity:1;
		transform : scale(0);
		transition : all 0s;
	}
`

const Tick = styled.div`
	display : ${ props=> props.checked?'block':'none'};
	position : absolute;
	top : 9px;
	left : 7px;
	width : 6px;
	height : 2px;
	border : 2px solid;
	border-color : var(--checkboxTrikColor);
	border-top-color : transparent;
	border-right-color : transparent;
	transform : rotate(-45deg);
	z-index : 0;	
`

const InputWrapper = styled.div`
	position: relative;
	display : inline-block;

`

export {CheckboxWrapper,Wrapper,Tick,InputWrapper}