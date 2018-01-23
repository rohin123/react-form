import styled from 'styled-components'

const CSSVariables = styled.div`
  --labelColor : ${props => props.LABEL_COLOR};
  --inputColor : ${props => props.INPUT_COLOR};
  --inputBorderColor : ${props => props.INPUT_BORDER_COLOR};
  --helpTextColor : ${props => props.HELPTEXT_COLOR};
  --errorTextColor : ${props => props.ERRORTEXT_COLOR};  
  --defaultGreen : ${props => props.DEFAULT_GREEN_COLOR};
  --defaultRed : ${props => props.DEFAULT_RED_COLOR};
  --defaultBlue :${props => props.DEFAULT_BLUE_COLOR};
  --labelFontSize : ${props => props.LABEL_FONT_SIZE};
  --inputFontSize : ${props => props.INPUT_FONT_SIZE};
  --infoFontSize : ${props => props.INFO_FONT_SIZE};
  --infoBgColor : ${props => props.INFO_BG_COLOR};
  --infoBoxShadow : ${props => props.INFO_BOX_SHADOW};
`


const InputWrapper = styled.div`
	padding:15px 0 0;
	position:relative;

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
		border-bottom:${props=>props.isValid?'1px solid':'none'};
		border-bottom-color: var(--inputBorderColor);
		color: var(--inputColor);
		width:100%;
		background:transparent;
		font-size : var(--inputFontSize);
		box-sizing : border-box;
	}

	label{
		position:absolute;
		left:0px;
		top:14px;
		color: var(--labelColor);
		transform:${props=>props.isDown?"translateY(0) scale(1)":
										"translateY(-10px) scale(0.6)"};
		transform-origin:top left;
		transition:all 0.4s;	
		font-size : var(--labelFontSize);							
	}
`

export {CSSVariables,InputWrapper}
