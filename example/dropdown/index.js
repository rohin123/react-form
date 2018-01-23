import React from 'react'
import DropDown from '../../src/components/dropdown'
import styled from 'styled-components'
import Promise from 'promise'

const Wrapper = styled.div`
	width : 300px;
`

export default class DropDownExample extends React.Component{

	constructor(props){
		super(props)
		this.setItem = this.setItem.bind(this)
		this.optionsList = [{label : 'option1', id: 1},
							{label : 'option2', id: 2},
							{label : 'option3', id: 3}]
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
			optionsList : this.optionsList,
			setItem : this.setItem,
			value : this.state.value
		}

		return(
			<Wrapper>
				<DropDown inputConfig={config}/>
			</Wrapper>					
			)
	}

}