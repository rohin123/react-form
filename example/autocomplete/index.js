import React from 'react'
import AutoComplete from '../../src/components/autocomplete'
import styled from 'styled-components'
import Promise from 'promise'

const Wrapper = styled.div`
	width : 300px;
`

export default class AutocompleteExample extends React.Component{

	constructor(props){
		super(props)
		this.setItem = this.setItem.bind(this)
		this.fetchFunc = this.fetchFunc.bind(this)
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

	fetchFunc(payload){
		console.log(payload)	
		let promiseFunc = (resolve,reject)=>{
			let data = [	
							{
								label:'option 1',
								id:1
							},
							{
								label:'option 2',
								id:2
							},
							{
								label:'option 3',
								id:3
							},
							{
								label:'option 4',
								id:4
							},

						]
			resolve(data)
		}

		return new Promise(promiseFunc)	
	}

	render(){
		let config = {
			label : 'Dummy Label',
			name : 'test_input',
			setItem : this.setItem,
			fetchFunc : this.fetchFunc,
			value : this.state.value
		}

		return(
				<Wrapper>
					<AutoComplete inputConfig={config}/>			
				</Wrapper>	
			)
	}

}