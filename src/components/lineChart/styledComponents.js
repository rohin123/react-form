import styled from 'styled-components'

const CSSVariables = styled.div`
  --plotStroke : ${props => props.PLOT_FILL};
  --plotAreaFill : ${props => props.PLOT_AREA_FILL};
  --dataPointFill : ${props => props.DATA_POINT_FILL};
  --dataPointHoverColor : ${props => props.DATA_POINT_HOVER_COLOR};
  --axisColor : ${props => props.AXIS_COLOR};
  --infoRectColor : ${props => props.INFO_RECT_COLOR};
  --labelColor : ${props => props.LABEL_COLOR};
`

export {CSSVariables}