import styled from 'styled-components'

const CSSVariables = styled.div`
  --labelColor : ${props => props.LABEL_COLOR};
  --inputColor : ${props => props.INPUT_COLOR};
  --inputBorderColor : ${props => props.INPUT_BORDER_COLOR};
  --helpTextColor : ${props => props.HELPTEXT_COLOR};
  --errorTextColor : ${props => props.ERRORTEXT_COLOR};
  --dropdownColor : ${props => props.DROPDOWN_COLOR};
  --dropdownBgColor : ${props => props.DROPDOWN_BACKGROUND};
  --dropdownInputBgColor : ${props => props.DROPDOWN_INPUT_BACKGROUND};
  --dropdownHoverColor : ${props => props.DROPDOWN_HOVER_COLOR};
  --dropdownHoverBgColor : ${props => props.DROPDOWN_HOVER_BG_COLOR};
  --defaultGreen : ${props => props.DEFAULT_GREEN_COLOR};
  --defaultRed : ${props => props.DEFAULT_RED_COLOR};
  --defaultBlue :${props => props.DEFAULT_BLUE_COLOR};
  --dropdownLabelFontSize : ${props => props.DROPDOWN_LABEL_FONT_SIZE};
  --inputFontSize : ${props => props.INPUT_FONT_SIZE};
  --infoFontSize : ${props => props.INFO_FONT_SIZE};
  --dropdownInputShadow : ${props => props.DROPDOWN_INPUT_SHADOW};
  --dropdownShadow : ${props => props.DROPDOWN_SHADOW};
  --infoBgColor : ${props => props.INFO_BG_COLOR};
  --infoBoxShadow : ${props => props.INFO_BOX_SHADOW};
`

const Wrapper = styled.div`
	  position: relative;
    padding: 10px 0;
  
    select{
    	-webkit-appearance: none;
	    border: none;
	    background: var(--dropdownInputBgColor);
	    padding: 15px 10px 5px;
	    width: 100%;
	    border-radius: 5px;
	    font-size: 1rem;
	    outline: none;
	    font-weight:300;
	    box-shadow: var(--dropdownInputShadow);
	    color : var(--inputColor);
    }

    label{
    	position: absolute;
	    top: 12px;
	    left:10px;
	    font-size: 0.75rem;
	    color: var(--labelColor);
    }

    &:after{
    	content:"${props=>props.isValid?props.helpText:props.errorText}";
        position: absolute;
        top : 90%;
        left:0px;
        font-size: var(--infoFontSize);
        color: ${props=>props.isValid?'var(--defaultGreen)':'var(--defaultRed)'};
	    background: var(--infoBgColor);
	    padding: 5px;
	    box-shadow: var(--infoBoxShadow);
    	display: ${props=>( (props.isValid && props.helpText) || 
    						(!props.isValid && props.errorText) )?'block':'none'};
        z-index : 1;
    }
`

const SelectWrapper = styled.div`
	position:relative;
`

const Arrow = styled.div`
	position: absolute;
    right: 10px;
    top: 45%;
    border-top: 8px solid;
    border-right: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 6px solid transparent;
`

export {CSSVariables,Wrapper,SelectWrapper,Arrow}