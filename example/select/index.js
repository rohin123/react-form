import React from 'react'
import SelectInput from '../../src/components/select'
import styled from 'styled-components'

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
			value : {label : "option1" , id:1}
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
				<SelectInput inputConfig={config}/>
			</Wrapper>					
			)
	}
}