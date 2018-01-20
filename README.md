# React Form
import {ReactForm} from 'react-components'

## Example Usage
Check TestForm for complete usage.

<ReactFrom formData={formData} formButtons={formButtons} colorConfig={colorConfig}/> 

## Props
formData, formButtons, colorConfig(optional prop)

### formData
An array of input objects with below properties.

- label ==> String for Input Label (Required for all inputs)
- type ==> String for type of input. (Required for all inputs)
	- valid input types:  
	 	- heading
		- subheading 
		- text
		- number
		- dropdown
		- checkbox
		- file
		- autocomplete
		- select
		- radiogroup
		- datetime
		
- name ==> a unique name for input. (not required for input type 'heading' and 'subheading')
- required ==> boolean for required state of input
- validityRegex ==> Regex pattern of validation
- validityErrorText ==> custom error text to be shown to user when input fails validation
- optionsList ==> Array of option objects (Property valid for input type 'dropdown','select','radiogroup','autocomplete')
- fetchFunc ==> Promise function to asynchronously fetch optionsList for input type autocomplete
- dependentFetchFunc ==> Promise function to fetch value asynchronously for other dependent inputs when value for current input is set.
- showdate ==> boolean for input type datetime
- showtime ==> boolean for input type datetime
- value ==> value of input

### formButtons
An array of button objects with below properties.
- label ==> Label for button
- checkValidity ==> boolean for whether to check form validity before invoking onClickHandler
- onClickHandler ==> Function called when button clicked

### colorConfig
A javascript object with following properties
- FLEX_BASIS : 
- LABEL_FONT_SIZE : 
- DROPDOWN_LABEL_FONT_SIZE : 
- INPUT_FONT_SIZE : 
- INFO_FONT_SIZE :
- FORM_BACKGROUND:
- LABEL_COLOR:
- INPUT_COLOR:
- INPUT_BORDER_COLOR:
- HELPTEXT_COLOR:
- ERRORTEXT_COLOR:
- DROPDOWN_COLOR:
- DROPDOWN_BACKGROUND:
- DROPDOWN_INPUT_BACKGROUND:
- DROPDOWN_HOVER_COLOR:
- DROPDOWN_HOVER_BG_COLOR : 
- DROPDOWN_INPUT_SHADOW :
- DROPDOWN_SHADOW : 
- DEFAULT_GREEN_COLOR:
- DEFAULT_BLUE_COLOR:
- DEFAULT_RED_COLOR:
- CHECKBOX_BORDER_FALSE : 
- CHECKBOX_BORDER_TRUE : 
- CHECKBOX_TICK_COLOR : 
- INFO_BG_COLOR : 
- INFO_BOX_SHADOW : 
- HEADING_BORDER : 
- DATE_PICKER_BG_COLOR :
- DATE_PICKER_HEADER_COLOR : 
- DATE_PICKER_HEADER_BORDER : 
- DATE_PICKER_ARROW_COLOR : 
- DATE_PICKER_DATE_COLOR : 
- DATE_PICKER_SELECTED_DATE_BG_COLOR : 
- DATE_PICKER_SELECTED_DATE_COLOR : 
- TIME_PICKER_HEADER_BG_COLOR : 
- TIME_PICKER_HEADER_COLOR : 
- TIME_PICKER_HEADER_BORDER_COLOR :
- TIME_PICKER_COLUMN_BORDER_COLOR :
- TIME_PICKER_COLUMN_BG_COLOR : 
- TIME_PICKER_COLUMN_COLOR : 
- TIME_PICKER_SELECTED_CELL_COLOR :
- TIME_PICKER_FOOTER_COLOR : 
- TIME_PICKER_FOOTER_BG_COLOR : 
- HEADING_FONT_SIZE : 
- SUB_HEADING_FONT_SIZE : 
- DATE_PICKER_SHADOW : 
- TIME_PICKER_SHADOW : 
- POPUP_BG_COLOR : 
