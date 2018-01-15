/*import React from 'react'
import styled from 'styled-components'

const FileInputWrapper = styled.div`
	position: relative;
    padding: 25px;
    input {
    	position: absolute;
	    top: 0;
	    left: 0;
	    visibility:hidden;
    }
    label{
    	position: absolute;
	    top: 0;
	    left: 0;
	    padding: 10px 30px;
	    background-color: #c7c5d9;
	    color: #fff;
	    border-radius: 3px;
	    cursor:pointer;
	    &:after{
	        content:${props=>props.isValid?"''":"'Required Input'"};
	        position: absolute;
	        right: -85px;
	        font-size: 12px;
	        color: red;
	    }
    }
`

export default class FileInput extends React.Component{
	render(){
		let inputHtml = this.props.multiple?
					<input type='file' multiple onChangeHandler={this.handleSelectedFiles}/>:
					<input type='file' onChangeHandler={this.handleSelectedFiles}/>

		return (
				<FileInputWrapper isValid={this.props.isValid} isDisabled={this.props.isDisabled}>
					{inputHtml}
					<label>{this.props.label}</label>
				</FileInputWrapper>
			)
	}
}*/