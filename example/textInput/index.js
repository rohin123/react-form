import React from 'react'
import {TextInput} from '../../src/components/labeledInput'
import styled from 'styled-components'

const Wrapper = styled.div`
	width : 300px;
`

export default class TextInputExample extends React.Component{

	constructor(props){
		super(props)
		this.setItem = this.setItem.bind(this)
		this.state = {
			value : null
		}
	}

	setItem(name,value){
		console.log('setItem',name,value)
		this.setState({
			value : value
		})
	}

	render(){
		let config = {
			label : 'Dummy Label',
			name : 'test_input',
			setItem : this.setItem,
			value : this.state.value
		}

		return(
			<Wrapper>
				<TextInput inputConfig={config}/>
			</Wrapper>					
			)
	}

}