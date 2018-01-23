import styled from 'styled-components'

const CSSVariables = styled.div`
  --formBgColor : ${props => props.FORM_BACKGROUND};
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
  --checkboxBorderTrue : ${props => props.CHECKBOX_BORDER_TRUE};
  --checkboxBorderFalse : ${props => props.CHECKBOX_BORDER_FALSE};
  --checkboxTrikColor : ${props => props.CHECKBOX_TICK_COLOR};
  --flexBasis : ${props => props.FLEX_BASIS};
  --labelFontSize : ${props => props.LABEL_FONT_SIZE};
  --dropdownLabelFontSize : ${props => props.DROPDOWN_LABEL_FONT_SIZE};
  --inputFontSize : ${props => props.INPUT_FONT_SIZE};
  --infoFontSize : ${props => props.INFO_FONT_SIZE};
  --dropdownInputShadow : ${props => props.DROPDOWN_INPUT_SHADOW};
  --dropdownShadow : ${props => props.DROPDOWN_SHADOW};
  --infoBgColor : ${props => props.INFO_BG_COLOR};
  --infoBoxShadow : ${props => props.INFO_BOX_SHADOW};
  --headingBorder : ${props => props.HEADING_BORDER};
  --datePickerBgColor : ${props => props.DATE_PICKER_BG_COLOR};
  --datePickerHeaderColor : ${props => props.DATE_PICKER_HEADER_COLOR};
  --datePickerHeaderBorder : ${props => props.DATE_PICKER_HEADER_BORDER};
  --datePickerArrowColor : ${props => props.DATE_PICKER_ARROW_COLOR};
  --datePickerDateColor : ${props => props.DATE_PICKER_DATE_COLOR};
  --datePickerSelectedDateColor : ${props => props.DATE_PICKER_SELECTED_DATE_COLOR};
  --datePickerSelectedDateBgColor : ${props => props.DATE_PICKER_SELECTED_DATE_BG_COLOR};
  --timepickerHeaderBgColor : ${props => props.TIME_PICKER_HEADER_BG_COLOR};
  --timepickerHeaderColor : ${props => props.TIME_PICKER_HEADER_COLOR};
  --timepickerHeaderBorderColor : ${props => props.TIME_PICKER_HEADER_BORDER_COLOR};
  --timepickerColumnBorderColor : ${props => props.TIME_PICKER_COLUMN_BORDER_COLOR};
  --timepickerColumnBgColor : ${props => props.TIME_PICKER_COLUMN_BG_COLOR};
  --timepickerColumnColor : ${props => props.TIME_PICKER_COLUMN_COLOR};
  --timepickerSelectedCellColor : ${props => props.TIME_PICKER_SELECTED_CELL_COLOR};
  --timepickerFooterColor : ${props => props.TIME_PICKER_FOOTER_COLOR};
  --timepickerFooterBgColor : ${props => props.TIME_PICKER_FOOTER_BG_COLOR};
  --headingFontSize : ${props => props.HEADING_FONT_SIZE};
  --subheadingFontSize : ${props => props.SUB_HEADING_FONT_SIZE};
  --calendarShadow : ${props => props.DATE_PICKER_SHADOW};
  --timepickerShadow : ${props => props.TIME_PICKER_SHADOW};
  --popupBgColor : ${props => props.POPUP_BG_COLOR};
`

const Wrapper = styled.div`
	//flex-basis: var(--flexBasis);
    padding: 10px 0;
    position:relative;
    //margin: 10px;
    //flex-grow : 1;
    outline : none;

    span{
    	width: 100%;
	    display: block;
	    font-size : var(--inputFontSize);
	    padding: 15px 10px 5px;
	    background: var(--dropdownInputBgColor);
	    box-sizing: border-box;
	    border-radius: 5px;
	    box-shadow: var(--dropdownInputShadow);
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
	    top: 12px;
	    left: 10px;
	    font-size: var(--dropdownLabelFontSize);
	    color: var(--labelColor);
    }

    &:after{
    	content:"${props=>props.isValid?props.helpText:props.errorText}";
        position: absolute;
        left:0px;
        top : 90%;
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