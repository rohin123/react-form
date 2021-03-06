import React from 'react'
import ClosePopupListener from '../../helpers/closePopupListener.js'
import KeyPressHandlerOnList from '../../helpers/keyPressHandlerOnList.js'
import {Wrapper,DropdownListWrapper,ListItem,SelectedListItem,DropdownWrapper} from './styledComponents.js'
import SearchBox from './searchBox.js'

class Dropdown extends React.PureComponent{
	constructor(props){
		super(props)
		this.setOption= this.setOption.bind(this)
		this.filterOptions= this.filterOptions.bind(this)
		this.handleKeyPress= this.handleKeyPress.bind(this)

		this.state = {
			searchText: props.value && props.value.label || '',
			optionsList: props.optionsList||[],
			listOpen: false,
			selectedListIndex: -1
		}
	}

	componentWillMount(){
		this.closePopupKey = ClosePopupListener.addListenerFunc(this.closePopup.bind(this))
	}

	componentDidMount(){
		this.keyPressHandlerInstance = new KeyPressHandlerOnList(this.searchListRef,(this.state.optionsList||[]).length)
	}

	closePopup(e){
		if(!e.target.closest('#'+this.props.name) && (this.state.listOpen)){
			this.closeList()
		}
	}

	componentWillUnmount(){
		ClosePopupListener.removeListenerFunc(this.closePopupKey)
	}

	componentWillReceiveProps(nextProps){
		//console.log('dd',nextProps)
		this.keyPressHandlerInstance.updateListLength((nextProps.optionsList||[]).length)
		this.setState({
			searchText: nextProps.value && nextProps.value.label || '',
			optionsList:nextProps.optionsList||[],
			selectedListIndex: -1
		})
	}

	toggleList = ()=>{
		if(!this.props.readOnly){
			this.setState((prevState)=>{
				return {
					listOpen:!prevState.listOpen,
					filteredList:null
				}
			})
		}
	}

	openList(){
		if(!this.props.readOnly){
			this.setState({
				listOpen:true,
				filteredList:null
			})
		}
	}

	closeList(){
		if(!this.props.readOnly){
			//this.inputRef.blur()
			this.setState({
				listOpen:false,
				filteredList:null
			})
		}
	}

	setItem(option){
		this.props.setItem(this.props.name,option)
	}

	filterOptions(e){
		let searchVal = e.target.value
		this
		let filteredList = this.state.optionsList.filter((option)=>{
			let patt = new RegExp(searchVal,'i')
			return patt.test(option.label)
		})

		this.keyPressHandlerInstance.updateListLength((filteredList||[]).length)

		this.setState({
			filteredList: filteredList,
			searchText: searchVal 
		})
	}

	setSelectedItem(){
		let selectedListItem = null,
			list = (this.state.filteredList||this.state.optionsList)
		
		if(this.state.selectedListIndex>=0){
			selectedListItem = list[this.state.selectedListIndex]
		}

		if(selectedListItem){
			this.setItem(selectedListItem)
			this.closeList()
		}
	}

	setOption(e){
		let value = e.target.id
		this.state.optionsList.forEach((option)=>{
			if(option.id == value){
				this.setItem(option)
			}
		})

		this.closeList()
	}

	handleKeyPress(e){
		
		if(e.keyCode=='13'){
			this.setSelectedItem()
		}else{

			let index = this.keyPressHandlerInstance.handleKeyPress(e.keyCode)
			if(index>=0){
				console.log(index,(this.state.filteredList||this.state.optionsList||[]))	
			
				let id = (this.state.filteredList||this.state.optionsList||[])[index].id
				//console.log(index,(this.state.filteredList||this.state.optionsList||[]))	
				this.keyPressHandlerInstance.scrollDropDown(id)
				this.setState({
					selectedListIndex : index
				})
			}
		}
	}

	focusHandler = ()=>{
		console.log('focus')
		if(!this.mouseDown){
			this.openList()
		}
	}

	mouseDownHandler = (e)=>{
		console.log('down')
		this.mouseDown = true
	}

	mouseUpHandler = (e)=>{
		console.log('up')
		this.mouseDown = false
	}

	blurHandler = (e)=>{
		console.log('blur')
		if(!this.mouseDown){
			this.closeList()	
		}
	}

	render(){
		let props = this.props,
			listHtml = 	(this.state.filteredList||this.state.optionsList).map((option,index)=>{

				if(index == this.state.selectedListIndex){
					return <SelectedListItem id={option.id} 
												onClick={this.setOption}>
								{option.label}
							</SelectedListItem>
				}

				return <ListItem id={option.id} onClick={this.setOption}>{option.label}</ListItem>
			})

		return (
				<Wrapper id={props.name}
							onKeyDown={this.state.listOpen && this.handleKeyPress}
							isValid={props.isValid }
							helpText={props.helpText} errorText={props.errorText}
							fullBorderStyle = {props.fullBorderStyle}
							onFocus={this.focusHandler}
							onMouseDown={this.mouseDownHandler}
							onMouseUp={this.mouseUpHandler}
							onBlur={this.blurHandler}
							listOpen={this.state.listOpen}>
					<label>{props.label}</label>
					<input  className='drop-down-input'
							type='text' 
							ref={(elem)=>{this.inputRef = elem}}
							value={this.state.searchText} 
							onClick={this.toggleList}
							onChange={this.filterOptions}
							placeholder={'Select Option'}/>
					<DropdownWrapper>
						<DropdownListWrapper innerRef={(elem)=>{this.searchListRef=elem}}>
							{this.state.listOpen ? listHtml : []}
						</DropdownListWrapper>
					</DropdownWrapper>	
				</Wrapper>
			)
	}
}

export default Dropdown
