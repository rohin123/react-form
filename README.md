# React Form
import {reactForm} from 'react-components'

# Example Usage
Check TestForm for complete usage.

# Props
formData, formButtons

# formData
An array of input objects with below properties.

label ==> String for Input Label (Required for all inputs)
type ==> String for type of input. (Required for all inputs)
	 valid input types:
	 	heading
		subheading 
		text
		number
		dropdown
		checkbox
		file
		autocomplete
		select
		radiogroup
		datetime
name ==> a unique name for input. (not required for input type 'heading' and 'subheading')
required ==> boolean for required state of input 
validityRegex ==> Regex pattern of validation
validityErrorText ==> custom error text to be shown to user when input fails validation
optionsList ==> Array of option objects (Property valid for input type 'dropdown','select','radiogroup','autocomplete')
fetchFunc ==> Promise function to asynchronously fetch optionsList for input type autocomplete
dependentFetchFunc ==> Promise function to fetch value asynchronously for other dependent inputs when value for current input 			     is set.
showdate ==> boolean for input type datetime
showtime ==> boolean for input type datetime
value ==> value of input












	
	
