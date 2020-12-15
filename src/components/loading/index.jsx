import React from 'react';
import './loading.css';

class Loading extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			rli: [8,6,4,3,0], //小圆半径
			xli: [20,60,100,140,180], //圆心距左距离
			y: 15, //圆心距上距离
			colorli: ['#FB5A1B','#F5C253','#69E012','#36A43D','#143476'], //颜色数组
		    flag: 0  //控制动画帧
		}
	}

	resetCircleGroup(){
	  this.setState({
	  	 rli: [8,6,4,3,0]
	  })
	}


    componentDidMount(){
        this.draw();
	}
    
    componentWillUnmount(){  //清除请求动画帧，防止内存泄漏
        window.cancelAnimationFrame(this.draw);
        window.cancelAnimationFrame(this.drawSmaller);
        this.setState({
        	flag: 1,
        	rli: [8,6,4,3,0]
        })
    }
    
    drawCircle(ctx,i){
        ctx.beginPath();
	    ctx.fillStyle = this.state.colorli[i];
	    ctx.arc(this.state.xli[i],this.state.y,this.state.rli[i],0,Math.PI*2,false); 
	    ctx.closePath();
	    ctx.fill();
    }
    
    smaller(ctx,i){
    	const newrli = [...this.state.rli].map((item,index)=>{
    		if(index === i){
    			return item - 0.4;
    		}
    		return item;
    	})
        this.setState({
        	rli: newrli
        })
		if(this.state.rli[i]<0){
		    const newrlip = [...this.state.rli].map((item,index)=>{
    		if(index === i){
    			return 0;
    		}
    		return item;
    	})
        this.setState({
        	rli: newrlip
        })
		}
		this.drawCircle(ctx,i);
		if(this.state.rli[i] === 0 && i === 3){
		    this.resetCircleGroup();
		    this.setState({
		    	flag: 1
		    })
		}   
		if(this.state.flag === 0){
			this.drawSmaller=window.requestAnimationFrame(()=>{
			    this.smaller(ctx,i);
			});
		}
    }

    bigger(ctx,i){
    	const newrli = [...this.state.rli].map((item,index)=>{
    		if(index === i){
    			return item + 0.4;
    		}
    		return item;
    	})
        this.setState({
        	rli: newrli
        })

        this.drawCircle(ctx,i);
		if(this.state.rli[i]>=15){
			this.setState({
		    	flag: 0
		    })  //开启变小的动画
			this.drawSmaller=window.requestAnimationFrame(()=>{
			    this.smaller(ctx,i);
			});
		}
    }
    
    drawCircleGroup(ctx){
    	ctx.clearRect(0,0,300,300);
        for(let i = 0; i < 5; i++){
            this.bigger(ctx,i)
        }
       this.draw=window.requestAnimationFrame(()=>{
       	this.drawCircleGroup(ctx)
       });
    }

	draw(){
       const ctx =  this.mycanvas.getContext('2d');
       this.draw=window.requestAnimationFrame(()=>{
       	this.drawCircleGroup(ctx)
       });
	}
    render(){
    	return (
    		<div className='wrapper'>
	    		<div className='loading'>
		    		<canvas 
		    		   ref={ canvas=>this.mycanvas=canvas } 
		    		   width={200} 
		    		   height={60}>
		    		</canvas>
	    		</div>
    		</div>
    	    );
    }
}

export default Loading;