import React from 'react'
import styled from 'styled-components'

const SearchBoxWrapper = styled.div`
	display:${props=>props.open?'block':'none'}
`

export default class SearchBox extends React.Component{
	componentDidUpdate(){
		console.log('componentDidUpdate')
		if(this.props.open){
			this.inputRef.focus()	
		}
	}

	componentWillReceiveProps(){
		console.log('componentWillReceiveProps')
	}

	componentWillUpdate(){
		console.log('componentWillUpdate')
	}

	shouldComponentUpdate(){
		console.log('shouldComponentUpdate')
		return true
	}

	render(){

		return <SearchBoxWrapper open={this.props.open}>
					<input ref={(elem)=>{this.inputRef = elem}}
											type='text' 
											onChange={this.props.filterOptions}
											onBlur={this.props.blurHandler}
											/>
				</SearchBoxWrapper>		
	}
}

