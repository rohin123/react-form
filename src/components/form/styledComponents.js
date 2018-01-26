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
  --labelFontSizeSmall : ${props => props.LABEL_FONT_SIZE_SMALL};
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
`;

const FormWrapper = styled.div`
	display:flex;
	flex-direction:column;
	background:var(--formBgColor);
	font-weight:300;
	input{
		font-weight:300;
		padding:4px;
	}

	input[type='number'] {
	    -moz-appearance:textfield;
	}
	/* Webkit browsers like Safari and Chrome */
	input[type=number]::-webkit-inner-spin-button,
	input[type=number]::-webkit-outer-spin-button {
	    -webkit-appearance: none;
	    margin: 0;
	}
`

const InputsWrapper = styled.div`
	display:flex;
	flex-direction:row;
	flex-wrap:wrap;
	justify-content:flex-start;
	align-items : center;
	padding:10px;
	font-size:20px;
`

const ButtonsWrapper = styled.div`
	display:flex;
	flex-direction:row;
	flex-wrap:wrap;
	justify-content:center;
	padding:10px 0;
`

const Button = styled.div`
	padding:6px 15px;
	color:${props => props.color||'#333'};
	background-color:${props => props.bgColor||'#c3c3c3'};
	border-radius:3px;
`

const InputWrapper = styled.div`
	flex-basis: var(--flexBasis);
	margin: 10px;
	flex-grow : 1;
`

export {  
          CSSVariables,
          FormWrapper,
          InputsWrapper,
          ButtonsWrapper,
          Button,
          InputWrapper
        }
