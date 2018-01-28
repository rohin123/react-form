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
  --labelFontSizeSmall : ${props => props.LABEL_FONT_SIZE_SMALL};
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
  --inputBorderWidth : ${props => props.INPUT_BORDER_WIDTH};
  --inputBorderColor : ${props => props.INPUT_BORDER_COLOR};
`

const Wrapper = styled.div`
  display : flex;
  flex-direction : row;
  padding : 5px 5px 0px;
  align-items: flex-end;
  border-width : var(--inputBorderWidth);
  border-color: var(--inputBorderColor);
  border-style : solid;
`

const TimeInputWrapper = styled.div`
  width:20px;
  height:20px;
  background : url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9Ijk3LjE2cHgiIGhlaWdodD0iOTcuMTZweCIgdmlld0JveD0iMCAwIDk3LjE2IDk3LjE2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA5Ny4xNiA5Ny4xNjsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQoJPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00OC41OCwwQzIxLjc5MywwLDAsMjEuNzkzLDAsNDguNThzMjEuNzkzLDQ4LjU4LDQ4LjU4LDQ4LjU4czQ4LjU4LTIxLjc5Myw0OC41OC00OC41OFM3NS4zNjcsMCw0OC41OCwweiBNNDguNTgsODYuODIzDQoJCQljLTIxLjA4NywwLTM4LjI0NC0xNy4xNTUtMzguMjQ0LTM4LjI0M1MyNy40OTMsMTAuMzM3LDQ4LjU4LDEwLjMzN1M4Ni44MjQsMjcuNDkyLDg2LjgyNCw0OC41OFM2OS42NjcsODYuODIzLDQ4LjU4LDg2LjgyM3oiLz4NCgkJPHBhdGggZD0iTTczLjg5OCw0Ny4wOEg1Mi4wNjZWMjAuODNjMC0yLjIwOS0xLjc5MS00LTQtNGMtMi4yMDksMC00LDEuNzkxLTQsNHYzMC4yNWMwLDIuMjA5LDEuNzkxLDQsNCw0aDI1LjgzMg0KCQkJYzIuMjA5LDAsNC0xLjc5MSw0LTRTNzYuMTA3LDQ3LjA4LDczLjg5OCw0Ny4wOHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==) 
                no-repeat center;
  background-size : 100%;
  visibility : ${props => props.showtime?'visible' : 'hidden'};
  cursor : pointer;
`

const DateInputWrapper  = styled.div`
  width:20px;
  height:20px;
  background : url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNjAgNjAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYwIDYwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBkPSJNNTcsNGgtN1YxYzAtMC41NTMtMC40NDctMS0xLTFoLTdjLTAuNTUzLDAtMSwwLjQ0Ny0xLDF2M0gxOVYxYzAtMC41NTMtMC40NDctMS0xLTFoLTdjLTAuNTUzLDAtMSwwLjQ0Ny0xLDF2M0gzDQoJCUMyLjQ0Nyw0LDIsNC40NDcsMiw1djExdjQzYzAsMC41NTMsMC40NDcsMSwxLDFoNTRjMC41NTMsMCwxLTAuNDQ3LDEtMVYxNlY1QzU4LDQuNDQ3LDU3LjU1Myw0LDU3LDR6IE00MywyaDV2M3YzaC01VjVWMnogTTEyLDJoNQ0KCQl2M3YzaC01VjVWMnogTTQsNmg2djNjMCwwLjU1MywwLjQ0NywxLDEsMWg3YzAuNTUzLDAsMS0wLjQ0NywxLTFWNmgyMnYzYzAsMC41NTMsMC40NDcsMSwxLDFoN2MwLjU1MywwLDEtMC40NDcsMS0xVjZoNnY5SDRWNnoNCgkJIE00LDU4VjE3aDUydjQxSDR6Ii8+DQoJPHBhdGggZD0iTTM4LDIzaC03aC0yaC03aC0yaC05djl2MnY3djJ2OWg5aDJoN2gyaDdoMmg5di05di0ydi03di0ydi05aC05SDM4eiBNMzEsMjVoN3Y3aC03VjI1eiBNMzgsNDFoLTd2LTdoN1Y0MXogTTIyLDM0aDd2N2gtNw0KCQlWMzR6IE0yMiwyNWg3djdoLTdWMjV6IE0xMywyNWg3djdoLTdWMjV6IE0xMywzNGg3djdoLTdWMzR6IE0yMCw1MGgtN3YtN2g3VjUweiBNMjksNTBoLTd2LTdoN1Y1MHogTTM4LDUwaC03di03aDdWNTB6IE00Nyw1MGgtNw0KCQl2LTdoN1Y1MHogTTQ3LDQxaC03di03aDdWNDF6IE00NywyNXY3aC03di03SDQ3eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=)
               no-repeat center;
  background-size : 100%;
  visibility : ${props => props.showdate?'visible' : 'hidden'};
  margin-right : 5px;
  cursor : pointer;
`

export {CSSVariables,Wrapper,TimeInputWrapper,DateInputWrapper}
