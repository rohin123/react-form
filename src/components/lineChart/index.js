import React from 'react'
import * as d3 from 'd3'
import {} from './main.scss'
import debounce from 'debounce'
import {CSSVariables} from './styledComponents.js'
import ColorConfig	from './colorConfig.js'
import colorConfigMerger from '../../helpers/colorConfigMerger.js'


export default class LineChart extends React.Component{
	constructor(props){
		super(props)
		
		this.margin = {
		        top: 50,
		        right: 50,
		        bottom: 50,
		        left: 50
			}

		this.pointRadius = 4
		this.extractXYData()
		this.maxYAxisTicks = 5
		this.maxXAxisTicks = 10
		this.pathStroke = 2
		this.infoRectBorderRadius = 5
		this.infoRectYOffset = 20
		this.infoRectOpacity = 0.9
		this.infoTextPadding = 10
		this.transitionDuration = 100
		this.previousIndex = null
		this.areaChartOpacity = 0.5
	}

	componentDidMount(){
		this.initGraph()
	}

	extractXYData(){
		let xData = Object.keys(this.props.data),
			yData = []

		xData.forEach((x,i)=>{
			yData.push({
				x : i,
				y : this.props.data[x]
			})
		})

		this.xData = xData
		this.yData = yData
	}

	getXAxisTicks(){
		let xAxisTicks = this.xData.length,
			scaleDownRatio = 1

		if(xAxisTicks > this.maxXAxisTicks){
			scaleDownRatio = parseInt(xAxisTicks/this.maxXAxisTicks)
		}

		let ticks = this.yData.filter((d,i)=>{
			return (i%scaleDownRatio == 0)
		}).map((d)=>{
			return d.x
		})
			
		return ticks
	}

	initGraph(){
		this.svgId = '#'+this.props.id
		this.vis = d3.select(this.svgId)
		this.xDomain = this.calcXdomain()
 		this.yDomain = this.calcYdomain()
 		this.xRange = this.calcXrange()
 		this.yRange = this.calcYrange()
		this.xScale = d3.scaleLinear().range(this.xRange).domain(this.xDomain)
		this.yScale = d3.scaleLinear().range(this.yRange).domain(this.yDomain)

		this.xAxis = d3.axisBottom()
    					.scale(this.xScale)
    					.tickValues(this.getXAxisTicks())
    					.tickFormat((idx)=>{
    						return this.xData[idx]
    					})
   
		this.yAxis = d3.axisLeft()
    					.scale(this.yScale)
    					.tickSize(-(this.xAxisWidth))
    					.ticks(this.maxYAxisTicks)
    					

    	this.xAxisTranslate = {
    		x : this.margin.left,
    		y : (this.props.height - this.margin.top)
    	}				

    	this.yAxisTranslate = {
    		x : this.margin.left,
    		y : this.margin.top
    	}

    	this.vis.append("svg:g")
    		.attr("class","x-axis")
    		.attr("transform", "translate("+ (this.xAxisTranslate.x) + "," + (this.xAxisTranslate.y) +")")
    		.call(this.xAxis)
    		
  		this.vis.append("svg:g")
  			.attr("class","y-axis")
  			.attr("transform", "translate("+ (this.yAxisTranslate.x) + "," + (this.yAxisTranslate.y) +")")
  			.call(this.yAxis)
 

  		this.plotGroup = this.plotData()	
  		
		this.addInfoToPlot()			

		this.addHoverEffect()		
	}

	calcXdomain(){
		let xData = this.xData
		if(xData.length){
			return [0,xData.length-1]
		}else{
			return [0,0]
		}
	}

	calcYdomain(){
		let yData = this.yData,
			min = 0,
			max = 0
		if(yData.length){
			min = yData[0].y
			max = yData[0].y

			yData.forEach((dataPoint)=>{
				if(dataPoint.y<min){
					min = dataPoint.y
				}

				if(dataPoint.y>max){
					max = dataPoint.y
				}
			}) 	

			if(min<0){
				let tmpMin = Math.abs(min),
					tmpMax = Math.abs(max)

				max = tmpMin>tmpMax?(tmpMin):(tmpMax)
				
				return [-max,max]	
			}

			return [min,max]

		}else{
			return [0,0]
		}
	}

	calcXrange(){
		this.xAxisWidth = this.props.width - this.margin.right - this.margin.left
		return [0, this.props.width - this.margin.right - this.margin.left]
	}

	calcYrange(){
		this.yAxisWidth = this.props.height - this.margin.top - this.margin.bottom
		return [this.props.height - this.margin.top - this.margin.bottom , 0]
	}

	lineGenFunc(xScale,yScale){
		return (
			d3.line().
			x(function(d){
				return xScale(d.x)
			}).
			y(function(d){
				return yScale(d.y)
			})
		)
	}

	plotData(){
		let line = this.lineGenFunc(this.xScale,this.yScale)

  		let plotGroup = this.vis.append("svg:g")
  								.attr('class','plot-group')
  								.attr("transform", "translate("+ (this.yAxisTranslate.x) + "," + (this.yAxisTranslate.y) +")")

  		if(this.props.lineChart){
  			
  			plotGroup.append("svg:path")
			.attr("class","data")
  			.attr('d',line(this.yData))
  			.attr('stroke-width',this.pathStroke)
  			.attr('fill','none')	

		  	var area = d3.area()
			    .x((d)=>{ return this.xScale(d.x); })
			    .y0(this.props.height - this.margin.top - this.margin.bottom)
			    .y1((d)=>{ return this.yScale(d.y); });	

			plotGroup.append("svg:path")
				.attr('class','area')
				.attr('d',area(this.yData))
				.attr('opacity',this.areaChartOpacity)
			
	  		plotGroup.selectAll(this.svgId+" .dot")
			    .data(this.yData)
			  	.enter().append("circle") 
			    .attr('class','dot')
			    .attr("cx", (d, i)=> { return this.xScale(d.x) })
			    .attr("cy", (d)=> { return this.yScale(d.y) })
			    .attr("r", this.pointRadius)
  		
  		}else if(this.props.barChart){
  			
  			plotGroup.selectAll(this.svgId+' .bar')
		 	.data(this.yData)
		 	.enter()
		 	.append('rect')
		 	.attr('class','bar')
		 	.attr('x',(d,i)=>{
		 		if(i==0){
		 			return this.xScale(d.x)
		 		}else{
		 			let width = (this.props.width - this.margin.left - this.margin.right)/
		 												(this.yData.length-1)
		 			return this.xScale(d.x) - (width/2)
		 		}
		 	})   
		 	.attr('y',(d,i)=>{
		 		if(this.yScale(0)>this.yScale(d.y)){
		 			return this.yScale(d.y)
		 		}else{
		 			return this.yScale(0)
		 		}	
		 	})
		 	.attr('width',(d,i)=>{
		 		return this.getBarWidth(i)
			})
		 	.attr('height',(d,i)=>{
		 		return Math.abs(this.yScale(0) - this.yScale(d.y))
		 	})
  		
  		}						
  		
		return plotGroup    
	}

	addInfoToPlot(){
		let infoRect = this.vis.append("svg:g")
  								.attr('class','info-rect')
  								.attr("transform", "scale(0)")
  								.attr('opacity','0')
					
		infoRect.append('rect')
				.attr('class','rect')
				.attr('rx',this.infoRectBorderRadius)
				.attr('ry',this.infoRectBorderRadius)


		let textNode = infoRect.append('text')
					.attr('class','text')
					.attr('x',0)
					.attr('y',0)
					
			textNode.append('tspan')
					.attr('class','x-info-span')
					.attr('x',0)
					.attr('y',-14)

			textNode.append('tspan')
					.attr('class','y-info-span')	
					.attr('x',0)
					.attr('y',0)
					//.attr('dy',10)
	}

	addHoverEffect(){
		let self = this
		this.vis.append("svg:g")
			.append('rect')
			.attr('width',(this.props.width - this.margin.left - this.margin.right))
			.attr('height',(this.props.height - this.margin.top - this.margin.bottom))
			.attr('transform','translate('+this.yAxisTranslate.x+','+this.yAxisTranslate.y+')')
			.attr('opacity','0')
			.on('mousemove',function(){
				
				//debounce((()=>{
					let mouse = d3.mouse(this)
				
					let ret = self.getNearestDataPoint(self.xScale.invert(mouse[0])),
						d = ret[0],
						i = ret[1]

					if(this.previousIndex != i){
						this.previousIndex = i
						let info = <tspan></tspan>
			    	
				    	let textElem = 	d3.select(self.svgId+' .info-rect .text')

				    	textElem
				    		.select(self.svgId+' .info-rect .text .x-info-span')
				    		.text('X : '+d.x)

				    	textElem
				    		.select(self.svgId+' .info-rect .text .y-info-span')
				    		.text('Y : '+d.y)

				    	let bbox = textElem.node().getBBox()

				    	self.highlightPoint(d,i)

				    	d3.select(self.svgId+' .info-rect .rect')
				    		.attr('width',bbox.width+self.infoTextPadding)
				    		.attr('height',bbox.height+self.infoTextPadding)	
				    		.attr('transform','translate('+(-self.infoTextPadding/2)+','+
				    						(-bbox.height-self.infoTextPadding/4)+')')	

				    	d3.select(self.svgId+' .info-rect')
				    		.transition()
				    		.attr('transform',"translate("+(self.yAxisTranslate.x+self.xScale(d.x)-(bbox.width/2))+","+
				    						((self.yScale(d.y)<self.yScale(0)?self.yScale(d.y):self.yScale(0)) - 
				    								self.infoRectYOffset + self.yAxisTranslate.y)+") scale(1)")
				    		.attr('opacity',this.infoRectOpacity)
				    		.attr('duration',this.transitionDuration)	

					}	
					
			})
			.on('mouseout',function(){

				this.previousIndex = null
		    	
		    	d3.select(self.svgId + ' .highlighted-point')
		    		.remove()

		    	d3.select(self.svgId+' .info-rect')
		    		.attr('opacity','0')
		    		.attr('transform','scale(0)')

		    	// d3.select(self.svgId+' .info-rect .text')
		    	// 	.remove()	

			})

	}

	highlightPoint(d,i){
		d3.select(this.svgId + ' .highlighted-point')
			.remove()

		if(this.props.lineChart){
			this.plotGroup.append('circle')
				.attr('class','highlighted-point')
				.attr('cx',this.xScale(d.x))
				.attr('cy',this.yScale(d.y))
				.attr("r", this.pointRadius)
			    .attr('stroke-width',2)
		}else if(this.props.barChart){
			this.plotGroup.append('rect')
				.attr('class','highlighted-point')
				.attr('x',()=>{
			 		if(i==0){
			 			return this.xScale(d.x)
			 		}else{
			 			let width = (this.props.width - this.margin.left - this.margin.right)/
			 												(this.yData.length-1)
			 			return this.xScale(d.x) - (width/2)
			 		}
			 	})   
			 	.attr('y',()=>{
			 		if(this.yScale(0)>this.yScale(d.y)){
			 			return this.yScale(d.y)
			 		}else{
			 			return this.yScale(0)
			 		}	
			 	})
			 	.attr('width',()=>{
			 		return this.getBarWidth(i)
				})
			 	.attr('height',()=>{
			 		return Math.abs(this.yScale(0) - this.yScale(d.y))
			 	})
		}
		
	}

	getNearestDataPoint(xVal){
		let ret = null,
			index = null
		this.yData.forEach((dataPoint,i)=>{
			if(!ret){
				ret = dataPoint
				index = i
			}

			else if(Math.abs(xVal - dataPoint.x) < Math.abs(xVal - ret.x)){
				ret = dataPoint
				index = i
			}
		})

		return [ret,index]
	}

	getBarWidth(idx){
		let width = (this.props.width - this.margin.left - this.margin.right)/
		 												(this.yData.length-1)
		if(idx == 0 || idx == this.yData.length-1){
			return 	width/2
		}else{
			return width
		}

	}

	render(){
		
		let colorConfig = colorConfigMerger(this.props.colorConfig,ColorConfig)

		return (
			<CSSVariables {...colorConfig}>
				<svg width={this.props.width} height={this.props.height} id={this.props.id}>
				</svg>
			</CSSVariables>	
		)

	}
}

LineChart.propTypes = {
	width : React.PropTypes.number.isRequired,
	height : React.PropTypes.number.isRequired,
	data : React.PropTypes.object.isRequired,
	id : React.PropTypes.string.isRequired,
	lineChart : React.PropTypes.bool,
	barChart : React.PropTypes.bool
}