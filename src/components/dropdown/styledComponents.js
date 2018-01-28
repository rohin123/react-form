import styled from 'styled-components'

const CSSVariables = styled.div`
  --labelColor : ${props => props.LABEL_COLOR};
  --inputColor : ${props => props.INPUT_COLOR};
  --inputBorderColor : ${props => props.INPUT_BORDER_COLOR};
  --helpTextColor : ${props => props.HELPTEXT_COLOR};
  --errorTextColor : ${props => props.ERRORTEXT_COLOR};
  --dropdownColor : ${props => props.DROPDOWN_COLOR};
  --dropdownBgColor : ${props => props.DROPDOWN_BACKGROUND};
  --dropdownHoverColor : ${props => props.DROPDOWN_HOVER_COLOR};
  --dropdownHoverBgColor : ${props => props.DROPDOWN_HOVER_BG_COLOR};
  --defaultGreen : ${props => props.DEFAULT_GREEN_COLOR};
  --defaultRed : ${props => props.DEFAULT_RED_COLOR};
  --defaultBlue :${props => props.DEFAULT_BLUE_COLOR};
  --labelFontSizeSmall : ${props => props.LABEL_FONT_SIZE_SMALL};
  --inputFontSize : ${props => props.INPUT_FONT_SIZE};
  --infoFontSize : ${props => props.INFO_FONT_SIZE};
  --dropdownShadow : ${props => props.DROPDOWN_SHADOW};
  --infoBgColor : ${props => props.INFO_BG_COLOR};
  --infoBoxShadow : ${props => props.INFO_BOX_SHADOW};
  --inputBorderWidth : ${props => props.INPUT_BORDER_WIDTH};
`

const Wrapper = styled.div`
    //padding: 10px 0;
    position:relative;
    outline : none;

    span{
    	width: 100%;
	    display: block;
	    font-size : var(--inputFontSize);
	    padding: 15px 0px 0px;
	    box-sizing: border-box;
      border-style : solid;
      border-width : var(--inputBorderWidth);
      border-color : var(--inputBorderColor);
	    color : var(--inputColor);
    }

    span:after{
		position: absolute;
	    content: '';
	    right: 10px;
	    top: 45%;
	    border-top: 8px solid;
	    border-right: 6px solid transparent;
	    border-bottom: 6px solid transparent;
	    border-left: 6px solid transparent;
	}

    label{
    	position: absolute;
	    top: 2px;
	    left: 0px;
	    font-size: var(--labelFontSizeSmall);
	    color: var(--labelColor);
    }

    &:after{
    	content:"${props=>props.isValid?props.helpText:props.errorText}";
      position: absolute;
      left:0px;
      top : 105%;
      font-size: var(--infoFontSize);
      color: ${props=>props.isValid?'var(--defaultGreen)':'var(--defaultRed)'};
    	background: var(--infoBgColor);
    	padding: 5px;
    	box-shadow: var(--infoBoxShadow);
    	display: ${props=>( (props.isValid && props.helpText) || 
    						(!props.isValid && props.errorText) )?'block':'none'};
        z-index: 1;
    }
`
const DropdownListWrapper = styled.div`
	position : absolute;
    background : var(--dropdownBgColor);
    width : 100%;
    box-shadow : var(--dropdownShadow);
    font-size : var(--inputFontSize);
    z-index : 3;
    input{
    	width : 100%;
    	box-sizing : border-box;
    	font-size : 1rem;
    	padding : 0 5px;
    }
`

const ListItem = styled.div`
	box-sizing : border-box;
   	padding : 3px 0px 3px 10px;

	&:hover{
		background-color: var(--dropdownHoverBgColor);
	    opacity: 0.8;
	    color: var(--dropdownHoverColor);
	}
`

const SelectedListItem = ListItem.extend`
	background-color: var(--dropdownHoverBgColor);
    opacity: 0.8;
    color: var(--dropdownHoverColor);
`

export {CSSVariables,Wrapper,DropdownListWrapper,ListItem,SelectedListItem}