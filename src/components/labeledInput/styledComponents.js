import styled from 'styled-components'

const CSSVariables = styled.div`
  --labelColor : ${props => props.LABEL_COLOR};
  --inputColor : ${props => props.INPUT_COLOR};
  --inputBorderColor : ${props => props.INPUT_BORDER_COLOR};
  --inputBorderWidth : 0.05em;
  --inputBorderRadius : ${props => props.INPUT_BORDER_RADIUS};
  --helpTextColor : ${props => props.HELPTEXT_COLOR};
  --errorTextColor : ${props => props.ERRORTEXT_COLOR};  
  --defaultGreen : ${props => props.DEFAULT_GREEN_COLOR};
  --defaultRed : ${props => props.DEFAULT_RED_COLOR};
  --defaultBlue :${props => props.DEFAULT_BLUE_COLOR};
  --fontSize : ${props => props.FONT_SIZE};
  --infoFontSize : ${props => props.INFO_FONT_SIZE};
  --infoBgColor : ${props => props.INFO_BG_COLOR};
  --infoBoxShadow : ${props => props.INFO_BOX_SHADOW};
`
const Wrapper = styled.div`
	width : 100%;
    position: relative;
    outline : none;
    padding: 0.75em 0 0;
    font-size : var(--fontSize);
`

const InputWrapper = styled.div`
	position:relative;
	border-style: solid;
	border-width : ${props => props.fullBorderStyle ? 'var(--inputBorderWidth)' : 
	                              '0 0 var(--inputBorderWidth) 0'};
	border-color: var(--inputBorderColor);
	border-radius : ${props => props.fullBorderStyle ? 'var(--inputBorderRadius)' : '0'};
	font-size : var(--fontSize);

	&:after{
		content:"${props=>props.isValid?props.helpText:props.errorText}";
		position: absolute;
		left:0px;
		font-size: var(--infoFontSize);
		color: ${props=>props.isValid?'var(--defaultGreen)':'var(--defaultRed)'};
		background: var(--infoBgColor);
		padding: 5px;
		box-shadow: var(--infoBoxShadow);
		display: ${props=>( (props.isValid && props.helpText) || 
					(!props.isValid && props.errorText) )?'block':'none'};
		z-index: 1;
    }

	input{
		position:relative;
		z-index:1;
		outline:none;
		border:none;
		color: var(--inputColor);
		width:100%;
		background:transparent;
		font-size : var(--fontSize);
	}

	label{
		position:absolute;
		left : 0px;
		top : 0px;
		padding : 1px;
		color: var(--labelColor);
		transform:${props=>props.isDown?"translateY(0) scale(1)":
							props.fullBorderStyle ? "translateY(-0.85em) scale(0.6)":
		  											"translateY(-10px) scale(0.6)"};
		transform-origin:top left;
		transition:all 0.4s;
		font-size : var(--fontSize);						
	}
`

export {CSSVariables,InputWrapper,Wrapper}
