import styled from 'styled-components'

const CSSVariables = styled.div`
  --labelColor : ${props => props.LABEL_COLOR};
  --inputColor : ${props => props.INPUT_COLOR};
  --inputBorderColor : ${props => props.INPUT_BORDER_COLOR};
  --inputBorderWidth : ${props => props.INPUT_BORDER_WIDTH};
  --dropdownColor : ${props => props.DROPDOWN_COLOR};
  --dropdownBgColor : ${props => props.DROPDOWN_BACKGROUND};
  --dropdownHoverColor : ${props => props.DROPDOWN_HOVER_COLOR};
  --dropdownHoverBgColor : ${props => props.DROPDOWN_HOVER_BG_COLOR};
  --fontSize : ${props => props.FONT_SIZE};
  --dropdownShadow : ${props => props.DROPDOWN_SHADOW};
  --inputPadding : ${props => props.INPUT_PADDING};
  --inputBorderRadius : ${props => props.INPUT_BORDER_RADIUS};
`

const Wrapper = styled.div`
	  width : 100%;
    position: relative;
    outline : none;
`

const SearchBox = styled.div`
	position : relative;
	padding: 0.75em 0 0;
  font-size : var(--fontSize);
	input{
      position:relative;
      z-index:1;
      width: 100%;
	    border: none;
	    border-style: solid;
      border-width : ${props => props.fullBorderStyle ? 'var(--inputBorderWidth)' : 
                                      '0 0 var(--inputBorderWidth) 0'};
	    border-color: var(--inputBorderColor);
	    box-sizing: border-box;
	    font-size: var(--fontSize);
	    background-color: transparent;
	    color : var(--inputColor);	
	    outline : none;
      padding : 0.1em;
      border-radius : ${props => props.fullBorderStyle ? 'var(--inputBorderRadius)' : '0'};
      padding-right : 20px;
	}

	label{
		position:absolute;
    left : 0.1em;
    top : 0.875em;
		color: var(--labelColor);
		transform:${props=>props.isDown?"translateY(0) scale(1)":
										props.fullBorderStyle ? "translateY(-0.85em) scale(0.6)":
                      "translateY(-10px) scale(0.6)"};
		transform-origin:top left;
		transition:all 0.4s;
		font-size : var(--fontSize);
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
    box-shadow: var(--dropdownShadow);
    font-size: var(--fontSize);
    color: var(--dropdownColor);
    z-index:3;
    max-height : 200px;
    overflow : auto;
`

const ListItem = styled.div`
	  box-sizing: border-box;
    padding: 10px 5px 10px 10px;
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

const LoaderWrapper = styled.div`
    display : ${props => props.show ? 'block' : 'none'};
    position : absolute;
    right : 0.1em;
    top : 0.875em;
`

export {CSSVariables,Wrapper,SearchBox,SearchList,ListItem,SelectedListItem,LoaderWrapper}