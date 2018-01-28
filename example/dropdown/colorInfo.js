const tableHeader = {
						property : "Property",
						type : "Type",
						definition : "Definition"
					}

const tableContent = [
					{	
						property : "LABEL_FONT_SIZE_SMALL",
						type : "String",
						definition : "font size of input label",
						applicableOn : "datetime,dropdown,radiogroup,select" 
					},
					{
						property : "INPUT_FONT_SIZE",
						type : "String",
						definition : "font size of input text",
						applicableOn : 'autocomplete,number,text,datetime,dropdown,radiogroup,select'
					},
					{
						property : "LABEL_COLOR",
						type : "String",
						definition : "font color of input label",
						applicableOn : 'all'
					},
					{
						property : "INPUT_COLOR",
						type : "String",
						definition : "font color of input text",
						applicableOn : 'autocomplete,number,text,datetime,dropdown,radiogroup,select'
					},
					{
						property : "INPUT_BORDER_COLOR",
						type : "String",
						definition : "border color of autocomplete input",
						applicableOn : 'all'
					},

					{
						property : "DROPDOWN_COLOR",
						type : "String",
						definition : "font color of dropdown text",
						applicableOn : 'autocomplete,dropdown'
					},
					{
						property : "DROPDOWN_HOVER_COLOR",
						type : "String",
						definition : 'font color of hovered dropdown text',
						applicableOn : "autocomplete,dropdown"
					},
					{
						property : "DROPDOWN_BACKGROUND",
						type : "String",
						definition : "background of dropdown",
						applicableOn : 'dropdown,autocomplete'
					},
					{
						property : "DROPDOWN_HOVER_BG_COLOR",
						type : "String",
						definition : "background of hovered dropdown text",
						applicableOn : 'dropdown,autocomplete'
					},
					{
						property : "DROPDOWN_INPUT_SHADOW",
						type : "String",
						definition : "shadow of dropdown input",
						applicableOn : 'dropdown'
					},
					{
						property : "DROPDOWN_SHADOW",
						type : "String",
						definition : "shadow of dropdown",
						applicableOn : 'autocomplete,dropdown'
					},
					{
						property : "INPUT_BORDER_WIDTH",
						type : "String",
						definition : "border width of input",
						applicableOn : 'all'
					}]


export default {
	tableHeader : tableHeader,
	tableContent : tableContent
}
					