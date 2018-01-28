const tableHeader = {
						property : "Property",
						type : "Type",
						definition : "Definition"
					}

const tableContent = [
						{
							property : "LABEL_FONT_SIZE",
							type : "String",
							definition : "font size of input label",
							applicableOn : "autocomplete,checkbox,number,text"
						},
						{
							property : "LABEL_COLOR",
							type : "String",
							definition : "font color of input label",
							applicableOn : 'all'
						},
						{
							property : "INPUT_BORDER_COLOR",
							type : "String",
							definition : "border color of autocomplete input",
							applicableOn : 'all'
						},
						{
							property : "INPUT_BORDER_WIDTH",
							type : "String",
							definition : "border width of input",
							applicableOn : 'all'
						},
						{
							property : 'CHECKBOX_BORDER_FALSE',
							type : 'String',
							definition : 'checkbox border color when not checked',
							applicableOn : 'checkbox'
						},
						{
							property : 'CHECKBOX_BORDER_TRUE',
							type : 'String',
							definition : 'checkbox border color when checked',
							applicableOn : 'checkbox'
						}]

export default {
	tableHeader : tableHeader,
	tableContent : tableContent
}
