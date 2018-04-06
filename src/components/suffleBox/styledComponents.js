import styled from 'styled-components'

const CSSVariables = styled.div`
  --labelColor : ${props => props.LABEL_COLOR};
  --inputColor : ${props => props.INPUT_COLOR};
  --inputBorderColor : ${props => props.INPUT_BORDER_COLOR};
  --labelFontSize : ${props => props.LABEL_FONT_SIZE};
  --inputFontSize : ${props => props.INPUT_FONT_SIZE};
  --suffleItemBGSelected : ${props => props.SUFFLE_BOX_ITEM_BG_SELECTED};
  --suffleItemBG: ${props => props.SUFFLE_BOX_ITEM_BG};
  --suffleItemColor : ${props => props.SUFFLE_BOX_ITEM_COLOR};
`

export {CSSVariables}