import React from 'react'
import ClosePopupListener from '../../helpers/closePopupListener.js'
import KeyPressHandlerOnList from '../../helpers/keyPressHandlerOnList.js'
import {Wrapper,DropdownListWrapper,ListItem,SelectedListItem} from './styledComponents.js'

class Dropdown extends React.PureComponent{
	constructor(props){
		super(props)
		this.toggleList = this.toggleList.bind(this)
		this.setOption = this.setOption.bind(this)
		this.filterOptions = this.filterOptions.bind(this)
		this.openList = this.openList.bind(this)
		this.keyPressHandlerInstance = new KeyPressHandlerOnList((props.optionsList||[]).length)
		this.handleKeyPress = this.handleKeyPress.bind(this)
		this.preventDropdownClose = this.preventDropdownClose.bind(this)
		this.onblur_parent = this.onblur_parent.bind(this)
		this.onfocus_parent = this.onfocus_parent.bind(this)
		this.onfocus_child = this.onfocus_child.bind(this)
		this.onblur_child  = this.onblur_child.bind(this)
		this.tabPressed = true

		this.state = {
			selectedItem:props.value,
			optionsList:props.optionsList||[],
			listOpen:false,
			selectedListIndex : -1
		}
	}

	componentWillMount(){
		this.closePopupKey = ClosePopupListener.addListenerFunc(this.closePopup.bind(this))
	}

	closePopup(e){
		if(!e.target.closest('#'+this.props.name) && (this.state.listOpen)){
			this.setState({
				listOpen:false,
				filteredList:null
			})
		}
	}

	componentWillUnmount(){
		ClosePopupListener.removeListenerFunc(this.closePopupKey)
	}

	componentWillReceiveProps(nextProps){
		//console.log('dd',nextProps)
		this.keyPressHandlerInstance.updateListLength.call(this.keyPressHandlerInstance,(nextProps.optionsList||[]).length)
		this.setState({
			selectedItem:nextProps.value,
			optionsList:nextProps.optionsList||[]
		})
	}

	toggleList(){
		if(!this.props.readOnly){
			this.setState((prevState,props)=>{
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
			this.setState({
				listOpen:false,
				filteredList:null
			})
		}
	}

	setOption(e){
		let value = e.target.id
		this.state.optionsList.forEach((option)=>{
			if(option.id == value){
				this.props.setItem(this.props.name,option)
			}
		})

		this.toggleList()
	}

	filterOptions(e){
		let searchVal = e.target.value
		let filteredList = this.state.optionsList.filter((option)=>{
			let patt = new RegExp(searchVal,'i')
			return patt.test(option.label)
		})

		this.keyPressHandlerInstance.updateListLength.call(this.keyPressHandlerInstance,(filteredList||[]).length)

		this.setState({
			filteredList:filteredList
		})
	}

	setSelectedItem(){
		let selectedListItem = null,
			list = (this.state.filteredList||this.state.optionsList)
		if(this.state.selectedListIndex>=0){
			selectedListItem = list[this.state.selectedListIndex]
		}

		if(selectedListItem){
			this.props.setItem(this.props.name,selectedListItem)
			this.toggleList()
		}
	}

	handleKeyPress(e){
		this.tabPressed = false
		if(e.keyCode=='13'){
			this.setSelectedItem()
		}else if(e.keyCode == '9'){
			this.tabPressed = true
		}else{
			let index = this.keyPressHandlerInstance.handleKeyPress.call(this.keyPressHandlerInstance,e.keyCode)
			this.setState({
				selectedListIndex : index
			})
		}
	}

	preventDropdownClose(){
		this.forceDropdownOpen = true
	}

	blurHandler(e){
		if(!this.forceDropdownOpen){
			this.closeList()	
		}

		this.forceDropdownOpen = false
	}

	onblur_parent(e){
		console.log('onblur_parent')
		this.tabPressed = true
	}

	onblur_child(e){
		console.log('onblur_child')
		if(this.tabPressed && this.state.listOpen){
			this.blurHandler(e)
		}
	}

	onfocus_parent(e){
		console.log('onfocus_parent')
		if(this.tabPressed && !(this.state.listOpen)){
			this.openList(e)
		}	
	}

	onfocus_child(e){
		console.log('onfocus_child')
	}

	render(){
		let props = this.props
		let selectedValue = (this.state.selectedItem && this.state.selectedItem.label) || 
										'Select an option',
			listHtml = 	(this.state.filteredList||this.state.optionsList).map((option,index)=>{
				
				if(index == this.state.selectedListIndex){
					return <SelectedListItem id={option.id} onClick={this.setOption}>{option.label}</SelectedListItem>
				}

				return <ListItem id={option.id} onClick={this.setOption}>{option.label}</ListItem>
			})								

		return (		
				<Wrapper id={props.name} tabIndex={0} 
							onBlur={this.onblur_parent}
							onFocus={this.onfocus_parent.bind(this)}	
							onKeyDown={this.handleKeyPress}
							onMouseDown = {()=>{this.tabPressed = false}}
							isValid={props.isValid }
							helpText={props.helpText} errorText={props.errorText}>

					<label>{props.label}</label>
					<span onClick={this.toggleList} /*onMouseDown={this.preventDropdownClose}*/>
							{selectedValue}
					</span>
					{
						this.state.listOpen?
									<DropdownListWrapper>
										<input ref={(elem)=>{this.inputRef = elem}}
												type='text' onChange={this.filterOptions} 
															onFocus={this.onfocus_child.bind(this)}
															onBlur={this.onblur_child.bind(this)}/>
										{listHtml}
									</DropdownListWrapper>:null
					}
				</Wrapper>
			)
	}
}

export default Dropdown