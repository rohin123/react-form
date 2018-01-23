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
  --calendarShadow : ${props => props.DATE_PICKER_SHADOW};
  --timepickerShadow : ${props => props.TIME_PICKER_SHADOW};
  --popupBgColor : ${props => props.POPUP_BG_COLOR};
`

export {CSSVariables}
