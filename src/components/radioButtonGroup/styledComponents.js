import styled from 'styled-components'

const Wrapper = styled.div`
	padding:10px 0 0;
	//margin:10px;
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

export {Wrapper,RadioOption}