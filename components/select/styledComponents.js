import styled from 'styled-components'

const Wrapper = styled.div`
	position: relative;
    flex-basis: var(--flexBasis);
    padding: 10px 0;
    margin: 10px;
    flex-grow : 1;
    select{
    	-webkit-appearance: none;
	    border: none;
	    background: var(--dropdownInputBgColor);
	    padding: 15px 10px 5px;
	    width: 100%;
	    border-radius: 5px;
	    font-size: 1rem;
	    outline: none;
	    font-weight:300;
	    box-shadow: var(--dropdownInputShadow);
	    color : var(--inputColor);
    }

    label{
    	position: absolute;
	    top: 12px;
	    left:10px;
	    font-size: 0.75rem;
	    color: var(--labelColor);
    }

    &:after{
    	content:"${props=>props.isValid?props.helpText:props.errorText}";
        position: absolute;
        top : 90%;
        left:0px;
        font-size: var(--infoFontSize);
        color: ${props=>props.isValid?'var(--defaultGreen)':'var(--defaultRed)'};
	    background: var(--infoBgColor);
	    padding: 5px;
	    box-shadow: var(--infoBoxShadow);
    	display: ${props=>( (props.isValid && props.helpText) || 
    						(!props.isValid && props.errorText) )?'block':'none'};
        z-index : 1;
    }
`

const SelectWrapper = styled.div`
	position:relative;
`

const Arrow = styled.div`
	position: absolute;
    right: 10px;
    top: 45%;
    border-top: 8px solid;
    border-right: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 6px solid transparent;
`

export {Wrapper,SelectWrapper,Arrow}