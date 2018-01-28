const tableHeader = {
						property : "Property",
						type : "Type",
						definition : "Definition",
						applicableOn : "Affects Input Type"
					}				

const tableContent = [
					{
						property : "FLEX_BASIS",
						type : "String",
						definition : "flex basis for each form input",
						applicableOn : "all"
					},
					{
						property : "LABEL_FONT_SIZE",
						type : "String",
						definition : "font size of input label",
						applicableOn : "autocomplete,checkbox,number,text"
					},
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
						property : 'INFO_FONT_SIZE',
						type : 'String',
						definition : 'font size of info(error or help text) text',
						applicableOn : 'all'
					},
					{
						property : 'HEADING_FONT_SIZE',
						type : 'String',
						definition : 'font size of form heading',
						applicableOn : 'heading'
					},
					{
						property : 'SUB_HEADING_FONT_SIZE',
						type : 'String',
						definition : 'font size of form subheading',
						applicableOn : 'subheading'
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
						property : 'CHECKBOX_TICK_COLOR',
						type : 'String',
						definition : 'check color',
						applicableOn : 'checkbox'
					},
					{
						property : 'HELPTEXT_COLOR',
						type : 'String',
						definition : 'font color of helptext',
						applicableOn :'all'	
					},
					{
						property : 'ERRORTEXT_COLOR',
						type : 'String',
						definition : 'font color of error',
						applicableOn : 'all'
					},
					{
						property : 'DEFAULT_GREEN_COLOR',
						type : 'String',
						definition :'default green color of form. Used for color coding',
						applicableOn :'all'
					},
					{
						property : 'DEFAULT_BLUE_COLOR',
						type : 'String',
						definition :'default blue color of form. Used for color coding',
						applicableOn :'all'
					},
					{
						property : 'DEFAULT_RED_COLOR',
						type : 'String',
						definition :'default red color of form. Used for color coding',
						applicableOn :'all'
					},
					{
						property : 'DATE_PICKER_HEADER_COLOR',
						type : 'String',
						definition : 'header font color of calendar',
						applicableOn : 'datetime'
					},
					{
						property : 'DATE_PICKER_DATE_COLOR',
						type : 'String',
						definition : 'font color of dates in calendar',
						applicableOn : 'datetime'
					},
					{
						property : 'DATE_PICKER_SELECTED_DATE_COLOR',
						type : 'String',
						definition : 'font color of selected date in calendar',
						applicableOn : 'datetime'
					},
					{
						property : 'DATE_PICKER_ARROW_COLOR',
						type : 'String',
						definition : 'color of left right month navigation arrows in calendar',
						applicableOn : 'datetime'
					},	
					{
						property : 'TIME_PICKER_HEADER_COLOR',
						type : 'String',
						definition : 'header font color of timepicker',
						applicableOn : 'datetime'
					},
					{
						property : 'TIME_PICKER_HEADER_BORDER_COLOR',
						type : 'String',
						definition : '',
						applicableOn : 'datetime'
					},
					{
						property : 'TIME_PICKER_COLUMN_BORDER_COLOR',
						type : 'String',
						definition : "border color of timepicker's hours, minute and ampm colomn",
						applicableOn : 'datetime'
					},
					{
						property : 'TIME_PICKER_COLUMN_COLOR',
						type : 'String',
						definition : "text font color of timepicker's hours, minute and ampm colomn",
						applicableOn : 'datetime'
					},
					{
						property : 'TIME_PICKER_SELECTED_CELL_COLOR',
						type : 'String',
						definition : 'text font color of selected hour/minute/ampm cell',
						applicableOn : 'datetime'
					},
					{
						property : 'TIME_PICKER_FOOTER_COLOR',
						type : 'String',
						definition : 'text font color of timepicker footer',
						applicableOn : 'datetime'
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
					},
					{
						property : 'FORM_BACKGROUND',
						type : 'String',
						definition : 'form background',
						applicableOn : 'none'
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
						property : 'INFO_BG_COLOR',
						type : 'String',
						definition : 'info(helptext or errortext) text font color',
						applicableOn : 'all'
					},
					{
						property : 'DATE_PICKER_BG_COLOR',
						type : 'String',
						definition : 'background of calendar',
						applicableOn : 'datetime'
					},
					{
						property : 'DATE_PICKER_SELECTED_DATE_BG_COLOR',
						type : 'String',
						definition : 'background of selected date in calendar',
						applicableOn : 'datetime'
					},
					{
						property : 'TIME_PICKER_HEADER_BG_COLOR',
						type : 'String',
						definition : 'background of timepicker header',
						applicableOn : 'datetime'
					},
					{
						property : 'TIME_PICKER_COLUMN_BG_COLOR',
						type : 'String',
						definition : 'background of timepicker hour/minute/ampm colomn',
						applicableOn : 'datetime'
					},
					{
						property : 'TIME_PICKER_FOOTER_BG_COLOR',
						type : 'String',
						definition : 'background of timepicker footer',
						applicableOn : 'datetime'
					},
					{
						property : 'POPUP_BG_COLOR',
						type : 'String',
						definition : 'background of calendar or timepicker popup',
						applicableOn : 'datetime'
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
						property : 'DATE_PICKER_SHADOW',
						type : "String",
						definition : "shadow of calendar",
						applicableOn : 'datetime'
					},
					{
						property : 'TIME_PICKER_SHADOW',
						type : "String",
						definition : "shadow of timepicker",
						applicableOn : 'datetime'
					},
					{
						property : 'INFO_BOX_SHADOW',
						type : "String",
						definition : "shadow of info(helptext or errortext) div",
						applicableOn : 'all'
					},
					{
						property : "INPUT_BORDER_WIDTH",
						type : "String",
						definition : "border width of input",
						applicableOn : 'all'
					},
					{
						property : 'HEADING_BORDER',
						type : 'String',
						definition : 'header border bottom',
						applicableOn : 'heading'
					},
					{
						property : 'DATE_PICKER_HEADER_BORDER',
						type : 'String',
						definition : 'calendar header underline',
						applicableOn : 'datetime'
					}]

export default {
	tableHeader : tableHeader,
	tableContent : tableContent
}
					