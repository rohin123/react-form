import React from 'react'
import RadioGroup from '../../src/components/radioButtonGroup'
import styled from 'styled-components'
import Promise from 'promise'

const Wrapper = styled.div`
	width : 300px;
`

export default class RadioGroupExample extends React.Component{

	constructor(props){
		super(props)
		this.setItem = this.setItem.bind(this)
		this.optionsList = [{label : "option1" , id:1},
							{label : "option2" , id:2},
							{label : "option3" , id:3}]
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
			optionsList : this.optionsList,
			value : this.state.value
		}

		return(
			<Wrapper>
				<RadioGroup inputConfig={config}/>
			</Wrapper>					
			)
	}
}