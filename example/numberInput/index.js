import React from 'react'
import {NumberInput} from '../../src/components/labeledInput'
import styled from 'styled-components'

const Wrapper = styled.div`
	width : 300px;
`

const Wrapper2 = styled.div`
	margin-top : 20px;
`

export default class NumberInputExample extends React.Component{

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
			},

			config2 = {
				label : 'Dummy Label',
				name : 'test_input',
				setItem : this.setItem,
				value : this.state.value,
				fullBorderStyle : true
			}

		return(
			<Wrapper>
				<NumberInput inputConfig={config}/>
				<Wrapper2>
					<NumberInput inputConfig={config2}/>
				</Wrapper2>
			</Wrapper>					
			)
	}

}