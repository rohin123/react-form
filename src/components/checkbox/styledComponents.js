import styled from 'styled-components'

const CSSVariables = styled.div`
	--labelColor : ${props => props.LABEL_COLOR};
	--fontSize : ${props => props.FONT_SIZE};
	--checkBoxColor : ${props => props.CHECKBOX_COLOR};
	--defaultGreen : ${props => props.DEFAULT_GREEN_COLOR};
	--defaultRed : ${props => props.DEFAULT_RED_COLOR};
	--defaultBlue :${props => props.DEFAULT_BLUE_COLOR};
`

const Wrapper = styled.div`
`

const CheckboxWrapper = styled.div`
	display: flex;
	justify-content : flex-start;
	align-items : center;
  position: relative;
  z-index: 1;
  background: transparent;
  font-size : var(--fontSize);

  label{
  	color : var(--labelColor);
  	margin-left : 5px;
  	font-size : 1em;
  }

  &:after{
	position: absolute;
    content: '';
    width: 2.5em;
    height: 2.5em;
    background: #333;
    border-radius: 50%;
    top: -0.6em;
    left: -0.6em;
    opacity: 0;
    transform : scale(1);
    //transform-origin : center;
    transition : all 0.4s;
    z-index : -1;
	}

	&:active:after{
		opacity:1;
		transform : scale(0);
		transition : all 0s;
	}
`

const InputWrapper = styled.div`
	position: relative;
	display : inline-block;
	width : 1em;
	height : 1em;
	border: 2px solid;
	border-color : var(--checkBoxColor);
	font-size : inherit;

`

const Tick = styled.div`
	display : ${ props=> props.checked?'block':'none'};
	//position : absolute;
	//top : 50%;
	//left : 50%;
	width : 1em;
	height : 1em;
	//border : 2px solid;
	//border-color : var(--checkboxTickColor);
  //border-top-color : transparent;
	//border-right-color : transparent;
	//transform : translate(-50%,-50%) rotate(-45deg);
	//z-index : 0;
	//background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="100" height="100"><g><path d="M0,5L5,10L15,0" fill='none' stroke='black' stroke-width='2'></path></g></svg>');
`

export {CSSVariables,CheckboxWrapper,Wrapper,Tick,InputWrapper}
