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
`


const Wrapper = styled.div`
	padding:10px 0 0;
	p{
		margin:0px;
		font-size : var(--labelFontSize);
		color : var(--labelColor);
	}
`
const RadioOption = styled.div`
	display : inline-block;
	margin: 5px 10px 0 0;
	font-size : var(--inputFontSize);
	color : var(--inputColor);
`

export {CSSVariables,Wrapper,RadioOption}