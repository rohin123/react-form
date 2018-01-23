import React from 'react'
import AutoComplete from '../../src/components/autocomplete'
import styled from 'styled-components'
import Promise from 'promise'

const Wrapper = styled.div`	
`
const InfoWrapper = styled.div`
	h1,h2,h3{
		background-color : whitesmoke;
	}
`
const InputWrapper = styled.div`
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
				<InfoWrapper>
					<h1>Code</h1>
					<p>{"import {" +"AutoComplete} "+"from 'react-ui-components'"}</p> 
					<h2>Props</h2>
					<span>{"inputConfig(required), styleConfig(optional)"}</span>
					<h3>{"inputConfig object properties"}</h3>
					<pre>
						{
							"label ==> label for your autocomplete \n" +
							"name  ==> name for your autocomplete \n" + 
							"setItem ==> function with name and value as parameters \n" + 
							"fetchFunc ==> promise to fetch autocomplete list \n" + 
							"value ==> initial value or selected value of autocomplete" 
						}
					</pre>
				</InfoWrapper>	
				<InputWrapper>
					<AutoComplete inputConfig={config}/>
				</InputWrapper>		
			</Wrapper>				
			)
	}

}