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
		},

		colorConfig = {
			LABEL_FONT_SIZE : '16px',
			INPUT_FONT_SIZE : '14px',
			LABEL_COLOR : 'blue',
			INPUT_COLOR : 'black',
			INPUT_BORDER_COLOR : 'blue',
			DROPDOWN_COLOR : 'black',
			DROPDOWN_HOVER_COLOR : 'white',
			DROPDOWN_BACKGROUND : 'linear-gradient(white,yellow)',
			DROPDOWN_HOVER_BG_COLOR :'blue',
			DROPDOWN_INPUT_SHADOW : 'none',
			DROPDOWN_SHADOW : 'none',
			INPUT_BORDER_WIDTH : '1px 1px 1px 1px'
		}

		return(
				<Wrapper>
					<AutoComplete inputConfig={config}/>
					<AutoComplete inputConfig={config} colorConfig={colorConfig}/> 			
				</Wrapper>	
			)
	}

}