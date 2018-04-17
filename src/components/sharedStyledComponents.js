import styled from 'styled-components'

const BlockWrapper = styled.div`
	width:100%;
	display : flex;
	flex-direction : row;
	justify-content : flex-start;
`

const HeadingWrapper = styled.div`
	width : 100%;
	display : flex;
	justify-content : center;
	border-bottom : var(--headingBorder);
	padding: 5px 0;
	font-size : var(--headingFontSize);
	font-weight : 400;
`

const SubHeadingWrapper = HeadingWrapper.extend`
	font-size : var(--subheadingFontSize);
	font-weight : 300;
	padding-top : 10px;
	border : none;
`

const AnimatedBorder = styled.div`
	position:absolute;
	width:100%;
	height:2px;
	background:${props=>props.valid?'var(--defaultGreen)':'var(--defaultRed)'};
	transform:${props=>(props.focused || !props.valid)?'scale(1)':'scale(0)'};
	transition:all 0.4s;
	z-index:1;
	display : ${props => props.show ? 'block' : 'none'};
`

const VhAlignedWrapper = styled.div`
	position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
  	transform : translate(-50%,-50%);
    font-size: 1rem;
    display : ${props => props.open?'block':'none'};
`

const InlineWrapper = styled.div`
	display : inline-block;
`
const FixedDivWrapper = styled.div`
	position : fixed ; 
	top : 0;
	left : 0;
	bottom : 0;
	right : 0;
	background-color : var(--popupBgColor);
	z-index : 2;
	display : ${props => props.open?'block':'none'};
`

export {BlockWrapper,AnimatedBorder,HeadingWrapper,VhAlignedWrapper,
		InlineWrapper,SubHeadingWrapper,FixedDivWrapper}