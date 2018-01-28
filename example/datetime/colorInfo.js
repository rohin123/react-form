const tableHeader = {
						property : "Property",
						type : "Type",
						definition : "Definition",
						applicableOn : "Affects Input Type"
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
						property : "INPUT_BORDER_WIDTH",
						type : "String",
						definition : "border width of input",
						applicableOn : 'all'
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
					