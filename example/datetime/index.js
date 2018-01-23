import React from 'react'
import DateTime from '../../src/components/datetimeInput'
import styled from 'styled-components'
import Promise from 'promise'

const Wrapper = styled.div`
	width : 300px;
`

export default class DateTimeExample extends React.Component{

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
			value : this.state.value,
			showtime : true,
			showdate : true
		}

		return(
			<Wrapper>
				<DateTime inputConfig={config}/>
			</Wrapper>					
			)
	}

}