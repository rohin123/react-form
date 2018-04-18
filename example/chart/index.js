import React from 'react'
import LineChart from '../../src/components/lineChart'
import styled from 'styled-components'


const GraphDiv1 = styled.div`
	background : linear-gradient(60deg, #ef5350, #e53935);
	padding : 10px;
	width : 450px;
`

const GraphDiv2 = styled.div`
	margin-top : 20px;
	background : linear-gradient(60deg, #ffa726, #fb8c00);
	padding : 10px;
	width : 450px;
`

const GraphDiv3 = styled.div`
	margin-top : 20px;
	background : linear-gradient(60deg, #66bb6a, #43a047);
	padding : 10px;
	width : 450px;
`

const GraphDiv4 = styled.div`
	margin-top : 20px;
	background : linear-gradient(60deg, #26c6da, #00acc1);
	padding : 10px;
	width : 450px;
`

export default class LineChartExample extends React.Component{
	render(){
		return (
			<div>
				<GraphDiv1>
					<LineChart id={'svg0'}
						width = {450}
						height = {250}
						data = {
							{
								'a' : 20,
								'b' : 2000,
								'c' : 1000,
								'd' : 100,
								'e' : 1200,
								'f' : 290,
								'g' : 800
							}
						}

						colorConfig = {{
							PLOT_FILL : 'white',
							PLOT_AREA_FILL : 'whitesmoke',
							DATA_POINT_FILL : 'white',
							DATA_POINT_HOVER_COLOR : 'black',
							AXIS_COLOR : '#243a51',
							INFO_RECT_COLOR : '#243a51',
							LABEL_COLOR : '#243a51' 
						}}
						
						lineChart = {true}/>

				</GraphDiv1>

				<GraphDiv2>
					<LineChart id={'svg1'}
						width = {450}
						height = {250}
						data = {
							{
								0 : 20,
								1 : 2000,
								2 : 1000,
								3 : 100,
								4 : 200,
								5 : 40,
								6 : 200,
								7 : 600,
								8 : 500,
								9 : 140
							}
						}		
						colorConfig = {{
							PLOT_FILL : 'white',
							PLOT_AREA_FILL : 'whitesmoke',
							DATA_POINT_FILL : 'white',
							DATA_POINT_HOVER_COLOR : 'black' 
						}}
						barChart = {true}/>

				</GraphDiv2>

				<GraphDiv3>					
					<LineChart id={'svg2'}
						width = {450}
						height = {250}
						data = {
								{
									0:  20,
									1: 2000,
									2: -500,
									3:  100,
									4: 200,
									5:  40,
									6:  200,
									7:  -600,
									8:  500,
									9:  140,
									10:  -211,
									11: -2000,
									12: 500,
									13:  100,
									14: 200,
									15:  40,
									16:  200,
									17:  -600,
									18:  500,
									19:  140,
									20:  20,
									21: 2000,
									22: 500,
									23:  100,
									24: 200,
									25:  40,
									26:  200,
									27:  600,
									28:  500,
									29:  140,
									30:  20,
									31: 2000,
									32: 500,
									33:  100,
									34: 200,
									35:  40,
									36:  200,
									37:  600,
									38:  500,
									39:  140
								}
							}
						colorConfig = {{
							PLOT_FILL : 'white',
							PLOT_AREA_FILL : 'whitesmoke',
							DATA_POINT_FILL : 'white',
							DATA_POINT_HOVER_COLOR : 'black' 
						}}
						lineChart = {true}/>					
				</GraphDiv3>

				<GraphDiv4>					
					<LineChart id={'svg3'}
						width = {450}
						height = {250}
						data = {{
									0:  -20,
									1: 2000,
									2: 500,
									3:  -100,
									4: 200,
									5:  40,
									6:  200,
									7:  -600,
									8:  500,
									9:  140,
									10:  -211,
									11: 2000,
									12: 500,
									13:  100,
									14: 200,
									15:  40,
									16:  200,
									17:  600,
									18:  500,
									19:  140,
									20:  20,
									21: -2000,
									22: 500,
									23:  100,
									24: 200,
									25:  40,
									26:  200,
									27:  600,
									28:  500,
									29:  140,
									30:  20,
									31: 2000,
									32: 500,
									33:  -100,
									34: 200,
									35:  40,
									36:  200,
									37:  600,
									38:  500,
									39:  -140									
								}}	
						barChart = {true}/>					
				</GraphDiv4>
			</div>					
			)
	}
}