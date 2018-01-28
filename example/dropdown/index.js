import React from 'react'
import DropDown from '../../src/components/dropdown'
import styled from 'styled-components'

const Wrapper = styled.div`
	> div{
		width : 300px;
	}	

	.type1{

	}

	.type2{
		padding: 5px;
	    background: bisque;
	    border-radius: 5px;
	    margin-top : 15px;
	}
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

		let colorConfig = {
			INPUT_BORDER_WIDTH : '0'
		}

		return(
			<Wrapper>
				<div className='type1'>
					<DropDown inputConfig={config}/>
				</div>
				<div className='type2'>
					<DropDown inputConfig={config} colorConfig={colorConfig}/>
				</div>	
			</Wrapper>					
			)
	}

}