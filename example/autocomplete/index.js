import React from 'react'
import AutoComplete from '../../src/components/autocomplete'
import styled from 'styled-components'
import Promise from 'promise'
import states from './states.json'

const Wrapper = styled.div`
	width : 300px;
	margin : 10px;
`

const Wrapper2 = Wrapper.extend`
	width : 400px;
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

	fetchFuncAsync(payload){
		return this.fetchFunc(payload,false)
	}

	fetchFunc(payload,sync=true){
		console.log('fetchFunc',payload)
		let op = []
		let promiseFunc = (resolve,reject)=>{
			if(payload){
				
				let reg = new RegExp(payload,'i')
	
				op = states.filter((c)=>{
					return c['name'].search(reg)>-1
				}).map((c)=>{
					return {
						label : c.name,
						id :`${c.name}_${c.id}`
					}
				})

				let end = op.length > 20 ? 20 : op.length
				console.log('end',op.length)
				sync ? resolve(op.slice(0,end)) : window.setTimeout(()=>{resolve(op.slice(0,end))},1000)
			}else{
				resolve([])
			}
		}

		return new Promise(promiseFunc)
	}

	render(){
		let config1 = {
			label : 'Search City',
			name : 'test_input',
			setItem : this.setItem,
			fetchFunc : this.fetchFunc,
			value : this.state.value
		},

		config2 = {
			label : 'Search City',
			name : 'test_input',
			setItem : this.setItem,
			fetchFunc : this.fetchFuncAsync.bind(this),
			value : this.state.value,
			fullBorderStyle : true
		},

		config3 = {
			label : 'Search City',
			name : 'test_input',
			setItem : this.setItem,
			fetchFunc : this.fetchFuncAsync.bind(this),
			value : this.state.value,
			fullBorderStyle : true	
		},

		colorConfig = {
			FONT_SIZE : '30px',
			LABEL_COLOR : '#0d47a1',
			INPUT_COLOR : '#212121',
			INPUT_BORDER_COLOR : '#0d47a1',
			DROPDOWN_COLOR : 'white',
			DROPDOWN_HOVER_COLOR : 'white',
			DROPDOWN_BACKGROUND : 'linear-gradient(#4285F4,#0d47a1)',
			DROPDOWN_HOVER_BG_COLOR :'#0d47a1',
			DROPDOWN_INPUT_SHADOW : 'none',
			DROPDOWN_SHADOW : 'none',
			INPUT_BORDER_WIDTH : '2px'
		},

		colorConfig2 = {
			FONT_SIZE : '20px',
			LABEL_COLOR : '#0d47a1',
			INPUT_COLOR : '#212121',
			INPUT_BORDER_COLOR : '#0d47a1',
			DROPDOWN_COLOR : 'white',
			DROPDOWN_HOVER_COLOR : 'white',
			DROPDOWN_BACKGROUND : 'linear-gradient(#4285F4,#0d47a1)',
			DROPDOWN_HOVER_BG_COLOR :'#0d47a1',
			DROPDOWN_INPUT_SHADOW : 'none',
			DROPDOWN_SHADOW : 'none',
			INPUT_BORDER_WIDTH : '2px'
		}

		return(
				<div>
					<Wrapper>
						<AutoComplete inputConfig={config1}/>
					</Wrapper>
					<Wrapper>
						<AutoComplete inputConfig={config2} colorConfig={colorConfig2}/>
					</Wrapper>
					<Wrapper2>
						<AutoComplete inputConfig={config3} colorConfig={colorConfig}/>
					</Wrapper2>
				</div>
			)
	}

}
