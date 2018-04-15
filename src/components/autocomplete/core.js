import React from 'react'
import ClosePopupListener from '../../helpers/closePopupListener.js'
import {AnimatedBorder} from '../sharedStyledComponents.js'
import debounce from 'debounce'
import KeyPressHandlerOnList from '../../helpers/keyPressHandlerOnList.js'
import {Wrapper,SearchBox,SearchList,ListItem,
			SelectedListItem,LoaderWrapper} from './styledComponents.js'
import PropTypes from 'prop-types'
import Loader from '../loaders'

class AutoComplete extends React.PureComponent{

	constructor(props){
		super(props)
		this.blurHandler = this.blurHandler.bind(this)
		this.focusHandler = this.focusHandler.bind(this)
		this.onChangeHandler = this.onChangeHandler.bind(this)
		this.keyPressHandlerInstance = new KeyPressHandlerOnList(0)
		this.handleKeyPress = this.handleKeyPress.bind(this)
		this.preventDropdownClose = this.preventDropdownClose.bind(this)
		this.setItem = this.setItem.bind(this)
		this.onListItemClick = this.onListItemClick.bind(this)
		
		this.state = {
			isDown : props.value && props.value.label ? false : true ,
			autoCompList : [],
			value:props.value||null,
			isFocused : false,
			selectedListIndex : -1,
			loaderCount : 0
		}
	}

	componentWillMount(){
		this.debounceFunc = debounce(this.debounceOnChangeHandler,200)
	}

	debounceOnChangeHandler(value){
		let fetchPromise = this.props.fetchFunc
			fetchPromise(value).then((res)=>{
					this.keyPressHandlerInstance.updateListLength.call(this.keyPressHandlerInstance,res.length)
					this.setState(function(state,props){
						return {
							autoCompList : res,
							loaderCount : state.loaderCount - 1
						}
					})
				},(err)=>{
					this.keyPressHandlerInstance.updateListLength.call(this.keyPressHandlerInstance,0)
					this.setState(function(state,props){
						return {
							autoCompList:[],
							loaderCount : state.loaderCount - 1
						}	
					})
				})

			this.setState(function(state,props){
				return {
					loaderCount : state.loaderCount + 1
				}
			})

	}

	onChangeHandler(e){
		let	value = e.target.value.length?e.target.value:null

		this.debounceFunc(value)

		if(value){
			this.setState({
				value:{
					label:value,
					isAutoCompleteListItem:false
				}
			})
		}else{
			this.setState({
				value : null
			})
		}
		
	}

	componentWillReceiveProps(nextProps){
		this.setState({
			value : nextProps.value||null,
			isDown : nextProps.value && nextProps.value.label ? false : true
		})
	}

	focusHandler(e){
		this.setState({
			isDown : false,
			isFocused : true
		})
	}

	blurHandler(e){
		if(!this.forceDropdownOpen){

			this.setState({
				isFocused : false
			})

			if(!this.state.value){
				this.setState({
					isDown : true
				})
			}
			
			this.props.setItem(this.props.name,this.state.value)
		}

		this.forceDropdownOpen = false
	}

	setSelectedItem(){
		let selectedListItemId = null
		if(this.state.selectedListIndex>=0){
			
			selectedListItemId = this.state.autoCompList[this.state.selectedListIndex].id
		}

		if(selectedListItemId){
			this.setItem(selectedListItemId)
		}
	}

	setItem(id){

		let ret = null,
			list = this.state.autoCompList
		
		for(var i=0 ; i < list.length ; i++){
			let item = list[i]
			if(item.id==id){
				ret = item
				break
			}
		}

		if(ret){
			ret.isAutoCompleteListItem = true
			this.props.setItem(this.props.name,ret)
			this.keyPressHandlerInstance.updateListLength.call(this.keyPressHandlerInstance,0)
			this.setState({
				autoCompList:[],
				value:ret,
				isFocused : false
			})
		}	
	}

	onListItemClick(e){
		this.setItem(e.target.id)
	}

	handleKeyPress(e){
		if(e.keyCode=='13'){
			this.setSelectedItem()
		}else{
			let index = this.keyPressHandlerInstance.handleKeyPress.call(this.keyPressHandlerInstance,e.keyCode)
			console.log(index)
			this.setState({
				selectedListIndex : index
			})
		}
	}

	preventDropdownClose(){
		this.forceDropdownOpen = true
	}

	render(){

		let props = this.props,
			list = this.state.autoCompList
		
		let innerHtml = this.state.isFocused && list.map((item,index)=>{
			if(index == this.state.selectedListIndex){
				return <SelectedListItem id={item.id} 
								onClick={this.onListItemClick}
								onMouseDown={this.preventDropdownClose}>
							{item.label}
						</SelectedListItem>
			}
			return <ListItem id={item.id} 
								onClick={this.onListItemClick}
								onMouseDown={this.preventDropdownClose}>
							{item.label}
						</ListItem>
		})

		return (	
					<Wrapper tabIndex={-1} id={props.name} 
							onKeyDown={this.handleKeyPress}>
						<SearchBox isDown={this.state.isDown} 
									isValid={props.isValid}
									errorText={props.errorText||''}
									helpText={props.helpText||''}
									fullBorderStyle = {props.fullBorderStyle}> 
							<input type='text' value={(this.state.value && this.state.value.label)||''}
												onChange={this.onChangeHandler}
												onBlur={this.blurHandler}
												onFocus={this.focusHandler}
												readOnly = {props.readOnly}/>
							<label>{props.label}</label>
							<LoaderWrapper show={ true/*this.state.loaderCount > 0 ? 
														true : false */}>
									<Loader/>						
							</LoaderWrapper>														
							<AnimatedBorder valid={props.isValid }
											focused={this.state.isFocused}/>
						</SearchBox>
						<SearchList>
							{innerHtml}
						</SearchList>
					</Wrapper>
				)
	}
}

AutoComplete.propTypes = {
	label : PropTypes.string.isRequired,
	name : PropTypes.string.isRequired,
	setItem : PropTypes.func.isRequired,
	fetchFunc : PropTypes.func.isRequired,
}

export default AutoComplete