# npm-react-form

An opinionated react form.

### Prerequisites

react,react-dom

### Installing

npm install npm-react-form

## Example Usage

import React from 'react'
	import ReactForm from 'npm-react-form'

	const TestComp = React.createClass({
		getInitialState:function(){
			this.formfields = [{'label':'Example Form','type':'sub_heading'},
				{'label':'Name','type':'text','name':'name','display':'inline','required':true},
				{'label':'UserName','type':'text','name':'user_name','display':'inline','required':true},
				{'label':'Contact No.','type':'text','name':'contact_number','inputValidType':'number','inputValidOptions':{'minLen':8,'maxLen':12},'display':'inline','required':true,'invalidText':"Required Valid Phone Number"},
				{'label':'Select Time ','type':'timePicker','name':'time','display':'inline'},
				{'label':'Select Date','type':'datePicker','name':'date','display':'inline'},
				{'label':'Some Auto-complete list','type':'autocomplete','name':'autocomplete','display':'inline',list:[{name:'abc',info:'abc'},{name:'abcd',info:'abcd'}]},
				{'label':'Some Dropdown list','type':'dropdown','name':'dropdown','display':'inline',dropdowncontent:[{name:'item1',id:0},{name:'item2',id:1},{name:'item3',id:2}]}]
			this.formbuttons = [{'value':'Save','handler':function(res){console.log(res)}}]	
			return {}
		},
		render:function(){
			return <div>
						<ReactForm formHeading={'Form Main Heading'} formFields={this.formfields} buttons={this.formbuttons}/>
					</div>
		}
	})

	export default TestComp

	// use TestComp inside render method in some file in your React Project
	<TestComp/>

	//copy style from bundle.scss in dist folder to your local project

## Formfield object:
	label --> label over the input 
	type  --> text||dropdown||autocomplete||timePicker||datePicker
	name  --> output will be stored against this name in o/p object
	value --> default value
	readOnly --> bool (default false)
	display --> inline||inline-double||block (default block)
	required --> bool (default false)
	dropdowncontent --> list for input type dropdown. array of objects with name and id as mandatory fields 
	list --> list for autocomplete input type. array of objects with name as mandatory field 
	inputValidType --> number||email
	inputValidOptions --> {'minLen':8,'maxLen':12} range for inputValidType number
