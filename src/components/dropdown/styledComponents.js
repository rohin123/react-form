import styled from 'styled-components'

const CSSVariables = styled.div`
  --labelColor : ${props => props.LABEL_COLOR};
  --inputColor : ${props => props.INPUT_COLOR};
  --inputBorderColor : ${props => props.INPUT_BORDER_COLOR};
  --inputBorderWidth : 0.05em;
  --inputBorderRadius : ${props => props.INPUT_BORDER_RADIUS};
  --helpTextColor : ${props => props.HELPTEXT_COLOR};
  --errorTextColor : ${props => props.ERRORTEXT_COLOR};
  --dropdownColor : ${props => props.DROPDOWN_COLOR};
  --dropdownBgColor : ${props => props.DROPDOWN_BACKGROUND};
  --dropdownHoverColor : ${props => props.DROPDOWN_HOVER_COLOR};
  --dropdownHoverBgColor : ${props => props.DROPDOWN_HOVER_BG_COLOR};
  --defaultGreen : ${props => props.DEFAULT_GREEN_COLOR};
  --defaultRed : ${props => props.DEFAULT_RED_COLOR};
  --defaultBlue :${props => props.DEFAULT_BLUE_COLOR};
  --fontSize : ${props => props.FONT_SIZE};
  --dropdownShadow : ${props => props.DROPDOWN_SHADOW};
  --infoBgColor : ${props => props.INFO_BG_COLOR};
  --infoBoxShadow : ${props => props.INFO_BOX_SHADOW};
`

const Wrapper = styled.div`
    position:relative;
    outline : none;
    font-size : var(--fontSize);
    font-weight : 300;
    
    input.drop-down-input{
    	width: 100%;
	    display: block;
	    font-size : 1em;
      outline: none;
	    padding: 0.75em 1px 1px 1px;
	    box-sizing: border-box;                   
      border-color : var(--inputBorderColor);
	    color : var(--inputColor);
      border-style : solid;
      border-width : ${props => props.fullBorderStyle ? 'var(--inputBorderWidth)' : 
                                '0 0 var(--inputBorderWidth) 0'};
      border-radius : ${props => props.fullBorderStyle ? 'var(--inputBorderRadius)' : '0'}; 
      background: inherit;
    }

    &:before{
      position: absolute;
      content: '';
      right: 10px;
      top: ${props => props.listOpen? "25%" : "45%" };
      border-top: ${props => props.listOpen? "6px solid transparent" : "8px solid" };
      border-right: 6px solid transparent;
      border-bottom: ${props => props.listOpen? "8px solid" : "6px solid transparent" };
      border-left: 6px solid transparent;
    }

    label{
    	position: absolute;
	    top: 2px;
	    left: 0.2em;
	    font-size : 0.7em; 
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
    top : 105%;
    background : var(--dropdownBgColor);
    width : 100%;
    box-shadow : var(--dropdownShadow);
    font-size : var(--fontSize);
    z-index : 3;
    max-height : 200px;
    overflow : auto;
    input{
      	width : 98%;
      	box-sizing : border-box;
      	font-size : 1em;
      	padding : 0 5px;
        margin : 1%;
        border : 1px solid var(--inputBorderColor);
        border-radius: var(--inputBorderRadius);
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

const DropdownWrapper = styled.div`
  position: absolute;
  width: 100%;
` 

export {CSSVariables,Wrapper,DropdownListWrapper,ListItem,SelectedListItem,DropdownWrapper}