import React from 'react'
import CheckBox from '../../src/components/checkbox'
import styled from 'styled-components'

const Wrapper = styled.div`
	width : 300px;
`

const Wrapper2 = styled.div`
	margin-top : 20px;
`

export default class CheckboxExample extends React.Component{

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

			colorConfig = {
				FONT_SIZE : '26px'
			},

			colorConfig2 = {CHECKBOX_BG_COLOR:'blue',CHECKBOX_COLOR:'blue',CHECKBOX_TICK_COLOR:'white'}

		return(
			<Wrapper>
				<CheckBox inputConfig={config} colorConfig={colorConfig2}/>
				<Wrapper2>
					<CheckBox inputConfig={config} colorConfig={colorConfig}/>
				</Wrapper2>
			</Wrapper>
			)
	}

}
