import React from 'react'
import {ReactForm} from '../../src/index.js'
import Promise from 'promise'

export default class TestForm extends React.Component{
	constructor(props){
		super(props)
		
		this.formData = [	
							{
								label : 'Some Form Heading 2',
								type : 'heading'
							},
							{	
								label:'Item12',
							 	name:'item1',
							 	type:'text',
							 	required:true,
							 	validityRegex :'^\\w+$',
							 	validityErrorText : 'only one word allowed',
							 	//display : 'block'
							},
							{
								label:'Item22',
							 	name:'item2',
							 	type:'text',
							 	required:false
							},
							{
								label:'Item32',
							 	name:'item3',
							 	type:'text',
							 	required:false
							},
							{
							 	label:'Item42',
							 	name:'item4',
							 	type:'number',
							 	helpText:'* enter only number',
							 	required:true
							},
							{
								label:'Item52',
							 	name:'item5',
							 	type:'autocomplete',
							 	required:true,
							 	fetchFunc:this.fetchFunc,
							 	validityErrorText:'Input Required'
							},
							{
								label:'Item62',
							 	name:'item6',
							 	type:'select',
							 	required:true,
							 	optionsList:[{label:'qwezc','id':1},
							 					{label:'mkoi',id:2},
							 					{label:'jedi',id:3},
							 					{label:'yoda',id:4}]
							},
							{
								label:'Item72',
							 	name:'item7',
							 	type:'dropdown',
							 	searchEnabled:true,
							 	required:true,
							 	optionsList:[{label:'qwezc','id':1},
							 					{label:'mkoi',id:2},
							 					{label:'jedi',id:3},
							 					{label:'yoda',id:4}],
							 	validityRegex : '^[0-9]{1,3}',
							 	validityErrorText : 'Wrong Input'	
							},
							{
								label:'Item92',
								name:'item9',
								type:'radiogroup',
								optionsList:[
												{label:'option1',id:'v1'},
												{label:'option2',id:'v2'},
												{label:'option3',id:'v3'}
											],
								required:'false'
							},
							{
								label:'Item82',
								name:'item8',
								type:'checkbox',
								required:'false',
								display : 'block'
							},
							{
								label:'Item102. Some big question?',
								name:'item10',
								type:'radiogroup',
								optionsList:[
												{label:'some text goes here 1',id:'v1',display:'block'},
												{label:'some text goes here 2',id:'v2',display:'block'},
												{label:'some text goes here 3',id:'v3',display:'block'}
											],
								required:'false',
								display:'block'
							},
							{
								label : 'Item112. Enter Date',
								name : 'item11',
								type : 'datetime',
								showdate : true,
								showtime : true
							},
							{
								label : 'Item132',
								name : 'item12',
								optionsListLabel : 'Available items',
								selectedListLabel : 'Selected items',
								type : 'sufflebox',
								optionsList : [{label:'option1',id:1},
												{label:'option2',id:2},
												{label:'option3',id:3}],
								selectedList : [{label : 'option4',id:4},
													{label : 'option5',id:5}]
							}
						]


		this.formButtons = [{
								label:'Submit',
								checkValidity:true,
								onClickHandler:this.submitForm
							}]		

		this.state = {
			render : false
		}							

	}

	submitForm(res){
		console.log(res)
	}

	fetchFunc(val){
		let promiseFunc = (resolve,reject)=>{
			let data = [	
							{
								label:'option 1',	
								name:'bhsad kjsda',
								id:1,
								dependent : {
									'item2' : 'qwerty',
									'item3' : 'asdf',
									'item4' : 302
								}
							},
							{
								label:'option 2',		
								name:'qhsad jsdak',
								id:2
							},
							{
								label:'option 3',	
								name:'sadbh sdajk',
								id:3
							},
							{
								label:'option 4',	
								name:'adshh ksa',
								id:4
							},

						]
			resolve(data)
		}

		return new Promise(promiseFunc)
	}

	changeForm(){
		this.formData = [	
							{
								label : 'Some Form Heading 2',
								type : 'heading'
							},
							{	
								label:'Item12',
							 	name:'item1',
							 	type:'text',
							 	required:true,
							 	validityRegex :'^\\w+$',
							 	validityErrorText : 'only one word allowed',
							 	//display : 'block'
							},
							{
								label:'Item22',
							 	name:'item2',
							 	type:'text',
							 	required:false
							},
							{
								label:'Item32',
							 	name:'item3',
							 	type:'text',
							 	required:false
							},
							{
							 	label:'Item42',
							 	name:'item4',
							 	type:'number',
							 	helpText:'* enter only number',
							 	required:true
							},
							{
								label:'Item52',
							 	name:'item5',
							 	type:'autocomplete',
							 	required:true,
							 	fetchFunc:this.fetchFunc,
							 	validityErrorText:'Input Required'
							},
							{
								label:'Item62',
							 	name:'item6',
							 	type:'select',
							 	required:true,
							 	optionsList:[{label:'qwezc','id':1},
							 					{label:'mkoi',id:2},
							 					{label:'jedi',id:3},
							 					{label:'yoda',id:4}]
							},
							{
								label:'Item72',
							 	name:'item7',
							 	type:'dropdown',
							 	searchEnabled:true,
							 	required:true,
							 	optionsList:[{label:'qwezc','id':1},
							 					{label:'mkoi',id:2},
							 					{label:'jedi',id:3},
							 					{label:'yoda',id:4}],
							 	validityRegex : '^[0-9]{1,3}',
							 	validityErrorText : 'Wrong Input'	
							},
							{
								label:'Item92',
								name:'item9',
								type:'radiogroup',
								optionsList:[
												{label:'option1',id:'v1'},
												{label:'option2',id:'v2'},
												{label:'option3',id:'v3'}
											],
								required:'false'
							},
							{
								label:'Item82',
								name:'item8',
								type:'checkbox',
								required:'false',
								//display : 'block'
							},
							{
								label:'Item102. Some big question?',
								name:'item10',
								type:'radiogroup',
								optionsList:[
												{label:'some text goes here 1',id:'v1',display:'block'},
												{label:'some text goes here 2',id:'v2',display:'block'},
												{label:'some text goes here 3',id:'v3',display:'block'}
											],
								required:'false',
								//display:'block'
							},
							{
								label : 'Item112. Enter Date',
								name : 'item11',
								type : 'datetime',
								showdate : true,
								showtime : true
							}
						]

			this.setState({
				render : true
			})			

	}

	render(){	

		return (
					<div>
						<ReactForm formData={this.formData} 
									 formButtons={this.formButtons}/>
						{/*<button onClick={this.changeForm.bind(this)}>Chnage</button>*/}
					</div>	
				)
			
	}
}