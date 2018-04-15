import React from 'react'
import AutoComplete from '../../src/components/autocomplete'
import styled from 'styled-components'
import Promise from 'promise'

const Wrapper = styled.div`
	width : 300px;
`

const Wrapper2 = styled.div`
	width : 400px;
	margin-top : 10px;
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

			setTimeout(function(){
				if(payload&&payload.length){
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
				}else{	
					resolve([])
				}	
			},1000)
			
		}

		return new Promise(promiseFunc)	
	}

	render(){
		let config1 = {
			label : 'Dummy Label',
			name : 'test_input',
			setItem : this.setItem,
			fetchFunc : this.fetchFunc,
			value : this.state.value
		},

		config2 = {
			label : 'Dummy Label',
			name : 'test_input',
			setItem : this.setItem,
			fetchFunc : this.fetchFunc,
			value : this.state.value,
			fullBorderStyle : true
		},

		colorConfig = {
			FONT_SIZE : '36px',
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
				<Wrapper>
					<AutoComplete inputConfig={config1}/>
					<Wrapper2>
						<AutoComplete inputConfig={config2} colorConfig={colorConfig}/> 			
					</Wrapper2>
					<Wrapper2>
						<AutoComplete inputConfig={config2} colorConfig={colorConfig2}/> 			
					</Wrapper2>
				</Wrapper>	
			)
	}

}