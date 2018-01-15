import styled from 'styled-components'

const Wrapper = styled.div`
	flex-basis: var(--flexBasis);
    padding: 10px 0;
    position:relative;
    margin: 10px;
    flex-grow : 1;
    outline : none;

    span{
    	width: 100%;
	    display: block;
	    font-size : var(--inputFontSize);
	    padding: 15px 10px 5px;
	    background: var(--dropdownInputBgColor);
	    box-sizing: border-box;
	    border-radius: 5px;
	    box-shadow: var(--dropdownInputShadow);
	    color : var(--inputColor);
    }

    span:after{
		position: absolute;
	    content: '';
	    right: 10px;
	    top: 45%;
	    border-top: 8px solid;
	    border-right: 6px solid transparent;
	    border-bottom: 6px solid transparent;
	    border-left: 6px solid transparent;
	}

    label{
    	position: absolute;
	    top: 12px;
	    left: 10px;
	    font-size: var(--dropdownLabelFontSize);
	    color: var(--labelColor);
    }

    &:after{
    	content:"${props=>props.isValid?props.helpText:props.errorText}";
        position: absolute;
        left:0px;
        top : 90%;
        font-size: var(--infoFontSize);
        color: ${props=>props.isValid?'var(--defaultGreen)':'var(--defaultRed)'};
    	background: var(--infoBgColor);
    	padding: 5px;
    	box-shadow: var(--infoBoxShadow);
    	display: ${props=>( (props.isValid && props.helpText) || 
    						(!props.isValid && props.errorText) )?'block':'none'};
        z-index: 1;
    }
`
const DropdownListWrapper = styled.div`
	position : absolute;
    background : var(--dropdownBgColor);
    width : 100%;
    box-shadow : var(--dropdownShadow);
    font-size : var(--inputFontSize);
    z-index : 3;
    input{
    	width : 100%;
    	box-sizing : border-box;
    	font-size : 1rem;
    	padding : 0 5px;
    }
`

const ListItem = styled.div`
	box-sizing : border-box;
   	padding : 3px 0px 3px 10px;

	&:hover{
		background-color: var(--dropdownHoverBgColor);
	    opacity: 0.8;
	    color: var(--dropdownHoverColor);
	}
`

const SelectedListItem = ListItem.extend`
	background-color: var(--dropdownHoverBgColor);
    opacity: 0.8;
    color: var(--dropdownHoverColor);
`

export {Wrapper,DropdownListWrapper,ListItem,SelectedListItem}