import styled from 'styled-components'

const CSSVariables = styled.div`
  --labelColor : ${props => props.LABEL_COLOR};
  --inputColor : ${props => props.INPUT_COLOR};
  --inputBorderColor : ${props => props.INPUT_BORDER_COLOR};
  --inputBorderWidth : ${props => props.INPUT_BORDER_WIDTH};
  //--helpTextColor : ${props => props.HELPTEXT_COLOR};
  //--errorTextColor : ${props => props.ERRORTEXT_COLOR};
  --dropdownColor : ${props => props.DROPDOWN_COLOR};
  --dropdownBgColor : ${props => props.DROPDOWN_BACKGROUND};
  --dropdownHoverColor : ${props => props.DROPDOWN_HOVER_COLOR};
  --dropdownHoverBgColor : ${props => props.DROPDOWN_HOVER_BG_COLOR};
  //--defaultGreen : ${props => props.DEFAULT_GREEN_COLOR};
  //--defaultRed : ${props => props.DEFAULT_RED_COLOR};
  //--defaultBlue :${props => props.DEFAULT_BLUE_COLOR};
  --labelFontSize : ${props => props.LABEL_FONT_SIZE};
  --inputFontSize : ${props => props.INPUT_FONT_SIZE};
  //--infoFontSize : ${props => props.INFO_FONT_SIZE};
  //--infoBgColor : ${props => props.INFO_BG_COLOR};
  //--infoBoxShadow : ${props => props.INFO_BOX_SHADOW};
`

const Wrapper = styled.div`
	  width : 100%;
    position: relative;
    outline : none;
`

const SearchBox = styled.div`
	position : relative;
	padding: 15px 0 0;
	input{
      position:relative;
      z-index:1;
      width: 100%;
	    border: none;
	    border-style: solid;//${props=>props.isValid?'1px solid':'none'};
      border-width : var(--inputBorderWidth);
	    border-color: var(--inputBorderColor);
	    box-sizing: border-box;
	    font-size: var(--inputFontSize);
	    background-color:transparent;
	    color : var(--inputColor);	
	    outline : none;
	}

	label{
		position:absolute;
		left : 0px;
		top : 14px;
		color: var(--labelColor);
		transform:${props=>props.isDown?"translateY(0) scale(1)":
										"translateY(-10px) scale(0.6)"};
		transform-origin:top left;
		transition:all 0.4s;
		font-size : var(--labelFontSize);
	}

	&:after{
		content:"${props=>props.isValid?props.helpText:props.errorText}";
        position: absolute;
        font-size: var(--infoFontSize);
        color: ${props=>props.isValid?'var(--defaultGreen)':'var(--defaultRed)'};
    	left: 0px;
    	background: var(--infoBgColor);
    	padding: 5px;
    	box-shadow: var(--infoBoxShadow);
    	display: ${props=>( (props.isValid && props.helpText) || 
    						(!props.isValid && props.errorText) )?'block':'none'};
    	z-index: 1;
	}
	
`

const SearchList = styled.div`
	width: 100%;
    position: absolute;
    background: var(--dropdownBgColor);
    box-shadow: 1px 1px 4px 0px #8e8181;
    font-size: var(--inputFontSize);
    color: var(--dropdownColor);
    z-index:3;
`

const ListItem = styled.div`
	box-sizing: border-box;
    padding: 3px 0px 3px 10px;
    &:hover{
    	background-color: var(--dropdownHoverBgColor);
	    opacity: 0.8;
	    color: var(--dropdownHoverColor);
    }
`

const SelectedListItem = ListItem.extend`
	background-color : var(--dropdownHoverBgColor);
	opacity: 0.8;
	color: var(--dropdownHoverColor);
`

export {CSSVariables,Wrapper,SearchBox,SearchList,ListItem,SelectedListItem}