import React from 'react'
import styled from 'styled-components'
import Box from './components/box'
import TransferIcons from './components/transferIcons'

const Wrapper = styled.div`
	font-size : var(--inputFontSize);
	color : var(--labelColor);

	label{
		font-size : var(--labelFontSize);
	}
`

export default class SuffleBox extends React.Component{
	constructor(props){
		super(props)

		this.toggleList1Items = this.toggleList1Items.bind(this)
		this.toggleList2Items = this.toggleList2Items.bind(this)
		this.handleDown = this.handleDown.bind(this)
		this.handleUp = this.handleUp.bind(this)

		this.state = {
			optionsList : this.props.optionsList,
			selectedList : this.props.selectedList
		}
	}

	toggleList1Items(item){
		let list = this.state.optionsList || [],
			newList = this.toggleListItem(item,list)

			this.setState({
				optionsList : newList
			})
	}

	toggleList2Items(item){
		let list = this.state.selectedList || [],
			newList = this.toggleListItem(item,list)

			this.setState({
				selectedList : newList
			})
	}

	toggleListItem(item,list){
		let newList = list.map((listItem)=>{
			if(item.id == listItem.id){
				listItem.selected = !(listItem.selected)
			}

			return listItem
		})

		return newList
	}

	handleDown(){
		let newOptionsList = []
		let filterOptions = (this.state.optionsList||[]).filter((option)=>{
			if(!option.selected){
				newOptionsList.push(option)
			}else{
				option.selected = false
				return option
			}
		})

		let newSelectedList = [...this.state.selectedList,...filterOptions]

		this.props.setItem(this.props.name,{
			selectedList : newSelectedList,
			optionsList : newOptionsList
		})

		this.setState({
			selectedList : newSelectedList,
			optionsList : newOptionsList
		})
	}

	handleUp(){
		let newSelectedList = []
		let filterOptions = (this.state.selectedList||[]).filter((option)=>{
			if(!option.selected){
				newSelectedList.push(option)
			}else{
				option.selected = false
				return option
			}
		})

		let newOptionsList = [...this.state.optionsList,...filterOptions]

		this.props.setItem(this.props.name,{
			selectedList : newSelectedList,
			optionsList : newOptionsList
		})

		this.setState({
			selectedList : newSelectedList,
			optionsList : newOptionsList
		})
	}

	render(){
		let props = this.props
		return (
					<Wrapper>
						<label>{props.label}</label>
						<Box label={props.optionsListLabel}
								list={this.state.optionsList}
								toggleListItem={this.toggleList1Items}/>
						<TransferIcons handleDown={this.handleDown}
										handleUp={this.handleUp}/>
						<Box label={props.selectedListLabel}
								list={this.state.selectedList}
								toggleListItem={this.toggleList2Items}/>		
					</Wrapper>
			)
	}
}