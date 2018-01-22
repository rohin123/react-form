import styled from 'styled-components'

const InputWrapper = styled.div`
	padding:15px 0 0;
	position:relative;
	//flex-basis:var(--flexBasis);
	//margin: 10px;
	//flex-grow : 1;

	&:after{
        content:"${props=>props.isValid?props.helpText:props.errorText}";
        position: absolute;
        left:0px;
        font-size: var(--infoFontSize);
        color: ${props=>props.isValid?'var(--defaultGreen)':'var(--defaultRed)'};
	    background: var(--infoBgColor);
	    padding: 5px;
	    box-shadow: var(--infoBoxShadow);
	    display: ${props=>( (props.isValid && props.helpText) || 
    						(!props.isValid && props.errorText) )?'block':'none'};
	    z-index: 1;
    }

	input{
		position:relative;
		z-index:1;
		outline:none;
		border:none;
		border-bottom:${props=>props.isValid?'1px solid':'none'};
		border-bottom-color: var(--inputBorderColor);
		color: var(--inputColor);
		width:100%;
		background:transparent;
		font-size : var(--inputFontSize);
		box-sizing : border-box;
	}

	label{
		position:absolute;
		left:0px;
		top:14px;
		color: var(--labelColor);
		transform:${props=>props.isDown?"translateY(0) scale(1)":
										"translateY(-10px) scale(0.6)"};
		transform-origin:top left;
		transition:all 0.4s;	
		font-size : var(--labelFontSize);							
	}
`

export {InputWrapper}
