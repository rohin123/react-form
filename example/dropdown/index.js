import React from 'react'
import DropDown from '../../src/components/dropdown'
import styled from 'styled-components'

const Wrapper = styled.div`
	.type1{
		width : 300px;
	}

	.type2{
		width : 400px;
	    margin-top : 15px;
	}
`

export default class DropDownExample extends React.Component{

	constructor(props){
		super(props)
		this.setItem = this.setItem.bind(this)
		this.optionsList = [{label : 'option1', id: 1},
							{label : 'option2', id: 2},
							{label : 'option3', id: 3},
							{label : 'option4', id: 4},
							{label : 'option5', id: 5},
							{label : 'option6', id: 6},
							{label : 'option7', id: 7},
							{label : 'option8', id: 8},
							{label : 'option9', id: 9}]
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
		},

		config2 = {
			label : 'Dummy Label',
			name : 'test_input',
			optionsList : this.optionsList,
			setItem : this.setItem,
			value : this.state.value,
			fullBorderStyle : true
		}

		let colorConfig = {
			FONT_SIZE : '24px'
		}

		return(
			<Wrapper>
				<div className='type1'>
					<DropDown inputConfig={config}/>
				</div>
				<div className='type2'>
					<DropDown inputConfig={config2} colorConfig={colorConfig}/>
				</div>	
			</Wrapper>					
			)
	}

}