import styled from 'styled-components'
import {InlineWrapper} from '../../sharedStyledComponents.js'

const InputWrapper = styled.div`
	flex-grow : 1;
	position : relative;
	padding : 10px 0 0;
	span{
		font-size : var(--inputFontSize);
		color : var(--inputColor);
	}

	label{
		position: absolute;
	    top: 0px;
	    left: 0px;
	    font-size: var(--labelFontSizeSmall);
	    color: var(--labelColor);
	}

	input{
		border : none;
		outline : none;
		background : inherit;
		font-size : var(--inputFontSize);
	}

	input[type='number'] {
	    -moz-appearance:textfield;
	}
	/* Webkit browsers like Safari and Chrome */
	input[type=number]::-webkit-inner-spin-button,
	input[type=number]::-webkit-outer-spin-button {
	    -webkit-appearance: none;
	    margin: 0;
	}

	select{
		border : none;
		outline : none;
		background : inherit;
		font-size : var(--inputFontSize);
		-webkit-appearance: none;
	}
`

const InlineDateWrapper = InlineWrapper.extend`
	padding-right : 10px;
`

export {InputWrapper,InlineDateWrapper}
