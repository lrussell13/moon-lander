import React from 'react';
import './App.css';
import lander from './Images/SpaceLander/pixil-frame-0.png';
import animFrame1 from './Images/SpaceLander/pixil-frame-1.png';
import animFrame2 from './Images/SpaceLander/pixil-frame-2.png';
import animFrame3 from './Images/SpaceLander/pixil-frame-3.png';
import animFrame4 from './Images/SpaceLander/pixil-frame-4.png';
import animFrame5 from './Images/SpaceLander/pixil-frame-5.png';

class App extends React.Component {
  state = {
    lander: {
      x: 120,
      y: 160,
      dy: 2,
      dx: 0,
      bottomY: 0,
      radius: 20,
      playAnimation: false,
      animationFrame: 0,
      offsetY: 0,
      viewport: {
        y: 160
      }
    }, barriers: {
        barrier1: {
        y: 300,
        offsetY: 0,
        dy: -2,
        length: 0
      }, barrier2: {
        y: 450,
        offsetY: 0,
        dy: -2,
        length: 0
      }, barrier3: {
        y: 600,
        offsetY: 0,
        dy: -2,
        length: 0
      }, barrier4: {
        y: 750,
        offsetY: 0,
        dy: -2,
        length: 0
      }, barrier5: {
        y: 900,
        offsetY: 0,
        dy: -2,
        length: 0
      }, barrier6: {
        y: 1050,
        offsetY: 0,
        dy: -2,
        length: 0
      }, barrier7: {
        y: 1200,
        offsetY: 0,
        dy: -2,
        length: 0
      }, barrier8: {
        y: 1350,
        offsetY: 0,
        dy: -2,
        length: 0
      }, barrier9: {
        y: 1500,
        offsetY: 0,
        dy: -2,
        length: 0
      }, barrier10: {
        y: 1650,
        offsetY: 0,
        dy: -2,
        length: 0
      }, barrier11: {
        y: 1800,
        offsetY: 0,
        dy: -2,
        length: 0
      }, barrier12: {
        y: 1950,
        offsetY: 0,
        dy: -2,
        length: 0
      }, barrier13: {
        y: 2100,
        offsetY: 0,
        dy: -2,
        length: 0
      }, barrier14: {
        y: 2250,
        offsetY: 0,
        dy: -2,
        length: 0
      }, barrier15: {
        y: 2400,
        offsetY: 0,
        dy: -2,
        length: 0
      }, barrier16: {
        y: 2550,
        offsetY: 0,
        dy: -2,
        length: 0
      }, barrier17: {
        y: 2700,
        offsetY: 0,
        dy: -2,
        length: 0
      }
    }
  }

  componentWillMount(){
    const img = new Image(50, 50);  
    img.src = lander;
    img.onLoad = this.setState({img});

    const animFrame1img = new Image(50, 50);  
    animFrame1img.src = animFrame1;
    animFrame1img.onLoad = this.setState({animFrame1img});

    const animFrame2img = new Image(50, 50);  
    animFrame2img.src = animFrame2
    animFrame2img.onLoad = this.setState({animFrame2img});

    const animFrame3img = new Image(50, 50);  
    animFrame3img.src = animFrame3
    animFrame3img.onLoad = this.setState({animFrame3img});

    const animFrame4img = new Image(50, 50);  
    animFrame4img.src = animFrame4
    animFrame4img.onLoad = this.setState({animFrame4img});

    const animFrame5img = new Image(50, 50);  
    animFrame5img.src = animFrame5
    animFrame5img.onLoad = this.setState({animFrame5img});

    const barriers = this.state.barriers;
    barriers.barrier1.length = Math.floor(Math.random() * 150)
    barriers.barrier2.length = Math.floor(Math.random() * 150)
    barriers.barrier3.length = Math.floor(Math.random() * 150)
    barriers.barrier4.length = Math.floor(Math.random() * 150)
    barriers.barrier5.length = Math.floor(Math.random() * 150)
    barriers.barrier6.length = Math.floor(Math.random() * 150)
    barriers.barrier7.length = Math.floor(Math.random() * 150)
    barriers.barrier8.length = Math.floor(Math.random() * 150)
    barriers.barrier9.length = Math.floor(Math.random() * 150)
    barriers.barrier10.length = Math.floor(Math.random() * 150)
    barriers.barrier11.length = Math.floor(Math.random() * 150)
    barriers.barrier12.length = Math.floor(Math.random() * 150)
    barriers.barrier13.length = Math.floor(Math.random() * 150)
    barriers.barrier14.length = Math.floor(Math.random() * 150)
    barriers.barrier15.length = Math.floor(Math.random() * 150)
    barriers.barrier16.length = Math.floor(Math.random() * 150)
    barriers.barrier17.length = Math.floor(Math.random() * 150)

    this.setState({barriers});
    console.log(barriers)
    
  }

  componentDidMount(){
    window.addEventListener('keydown', (e) => this.handleKeys(e, true));
    window.addEventListener('keyup',   (e) => this.handleKeys(e, false));
    this.update(); 
  }

  update = () => {
    let lander = this.state.lander;
    let offsetY = -(lander.y);
    lander.offsetY = offsetY
    
    const barriers = this.state.barriers;
    let barrier1 = barriers.barrier1;
    let barrier2 = barriers.barrier2;
    let barrier3 = barriers.barrier3;
    let barrier4 = barriers.barrier4;
    let barrier5 = barriers.barrier5;
    let barrier6 = barriers.barrier6;
    let barrier7 = barriers.barrier7;
    let barrier8 = barriers.barrier8;
    let barrier9 = barriers.barrier9;
    let barrier10 = barriers.barrier10;
    let barrier11 = barriers.barrier11;
    let barrier12 = barriers.barrier12;
    let barrier13 = barriers.barrier13;
    let barrier14 = barriers.barrier14;
    let barrier15 = barriers.barrier15;
    let barrier16 = barriers.barrier16;
    let barrier17 = barriers.barrier17;
  

    barrier1.dy = -(lander.dy)
    barrier2.dy = -(lander.dy)
    barrier3.dy = -(lander.dy)
    barrier4.dy = -(lander.dy)
    barrier5.dy = -(lander.dy)
    barrier6.dy = -(lander.dy)
    barrier7.dy = -(lander.dy)
    barrier8.dy = -(lander.dy)
    barrier9.dy = -(lander.dy)
    barrier10.dy = -(lander.dy)
    barrier11.dy = -(lander.dy)
    barrier12.dy = -(lander.dy)
    barrier13.dy = -(lander.dy)
    barrier14.dy = -(lander.dy)
    barrier15.dy = -(lander.dy)
    barrier16.dy = -(lander.dy)
    barrier17.dy = -(lander.dy)

    if(lander.y >= 2880){
      lander.viewport.y = lander.y - 2880;
    } else {
      lander.viewport.y = lander.y + offsetY;
    }
    
    if((lander.y + lander.viewport.y + lander.dy) >= 3200 - 160){
      lander.dy = 0;
    } else {
      //lander.dy *= 1.04;
      barrier1.y += barrier1.dy
      barrier2.y += barrier1.dy
      barrier3.y += barrier1.dy
      barrier4.y += barrier1.dy
      barrier5.y += barrier1.dy
      barrier6.y += barrier1.dy
      barrier7.y += barrier1.dy
      barrier8.y += barrier1.dy
      barrier9.y += barrier1.dy
      barrier10.y += barrier1.dy
      barrier11.y += barrier1.dy
      barrier12.y += barrier1.dy
      barrier13.y += barrier1.dy
      barrier14.y += barrier1.dy
      barrier15.y += barrier1.dy
      barrier16.y += barrier1.dy
      barrier17.y += barrier1.dy

      lander.y += lander.dy;
      lander.x += lander.dx;
    }
  
    this.setState({barriers})
    this.setState({lander});
    requestAnimationFrame(this.update);
    
    this.draw();
  }
  
  draw = () => {
    let x = this.state.lander.x
    let y = this.state.lander.viewport.y + 25

    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    const img = this.choseImg(this.state.lander.animationFrame)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    
    const barriers = this.state.barriers;
    ctx.moveTo(0, barriers.barrier1.y);
    ctx.lineTo(barriers.barrier1.length, barriers.barrier1.y);
    ctx.stroke();
    ctx.moveTo(0, barriers.barrier2.y);
    ctx.lineTo(barriers.barrier2.length, barriers.barrier2.y);
    ctx.stroke();
    ctx.moveTo(0, barriers.barrier3.y);
    ctx.lineTo(barriers.barrier3.length, barriers.barrier3.y);
    ctx.stroke();
    ctx.moveTo(0, barriers.barrier4.y);
    ctx.lineTo(barriers.barrier4.length, barriers.barrier4.y);
    ctx.stroke();
    ctx.moveTo(0, barriers.barrier5.y);
    ctx.lineTo(barriers.barrier5.length, barriers.barrier5.y);
    ctx.stroke();
    ctx.moveTo(0, barriers.barrier6.y);
    ctx.lineTo(barriers.barrier6.length, barriers.barrier6.y);
    ctx.stroke();
    ctx.moveTo(0, barriers.barrier7.y);
    ctx.lineTo(barriers.barrier7.length, barriers.barrier7.y);
    ctx.stroke();
    ctx.moveTo(0, barriers.barrier8.y);
    ctx.lineTo(barriers.barrier8.length, barriers.barrier8.y);
    ctx.stroke();
    ctx.moveTo(0, barriers.barrier9.y);
    ctx.lineTo(barriers.barrier9.length, barriers.barrier9.y);
    ctx.stroke();
    ctx.moveTo(0, barriers.barrier10.y);
    ctx.lineTo(barriers.barrier10.length, barriers.barrier10.y);
    ctx.stroke();
    ctx.moveTo(0, barriers.barrier11.y);
    ctx.lineTo(barriers.barrier11.length, barriers.barrier11.y);
    ctx.stroke();
    ctx.moveTo(0, barriers.barrier12.y);
    ctx.lineTo(barriers.barrier12.length, barriers.barrier12.y);
    ctx.stroke();
    ctx.moveTo(0, barriers.barrier13.y);
    ctx.lineTo(barriers.barrier13.length, barriers.barrier13.y);
    ctx.stroke();
    ctx.moveTo(0, barriers.barrier14.y);
    ctx.lineTo(barriers.barrier14.length, barriers.barrier14.y);
    ctx.stroke();
    ctx.moveTo(0, barriers.barrier15.y);
    ctx.lineTo(barriers.barrier15.length, barriers.barrier15.y);
    ctx.stroke();
    ctx.moveTo(0, barriers.barrier16.y);
    ctx.lineTo(barriers.barrier16.length, barriers.barrier16.y);
    ctx.stroke();
    ctx.moveTo(0, barriers.barrier17.y);
    ctx.lineTo(barriers.barrier17.length, barriers.barrier17.y);
    ctx.stroke();
    ctx.moveTo(barriers.barrier1.length + 100, barriers.barrier1.y);
    ctx.lineTo(300, barriers.barrier1.y);
    ctx.stroke();
    ctx.moveTo(barriers.barrier2.length + 100, barriers.barrier2.y);
    ctx.lineTo(300, barriers.barrier2.y);
    ctx.stroke();
    ctx.moveTo(barriers.barrier3.length + 100, barriers.barrier3.y);
    ctx.lineTo(300, barriers.barrier3.y);
    ctx.stroke();
    ctx.moveTo(barriers.barrier4.length + 100, barriers.barrier4.y);
    ctx.lineTo(300, barriers.barrier4.y);
    ctx.stroke();
    ctx.moveTo(barriers.barrier5.length + 100, barriers.barrier5.y);
    ctx.lineTo(300, barriers.barrier5.y);
    ctx.stroke();
    ctx.moveTo(barriers.barrier6.length + 100, barriers.barrier6.y);
    ctx.lineTo(300, barriers.barrier6.y);
    ctx.stroke();
    ctx.moveTo(barriers.barrier7.length + 100, barriers.barrier7.y);
    ctx.lineTo(300, barriers.barrier7.y);
    ctx.stroke();
    ctx.moveTo(barriers.barrier8.length + 100, barriers.barrier8.y);
    ctx.lineTo(300, barriers.barrier8.y);
    ctx.stroke();
    ctx.moveTo(barriers.barrier9.length + 100, barriers.barrier9.y);
    ctx.lineTo(300, barriers.barrier9.y);
    ctx.stroke();
    ctx.moveTo(barriers.barrier10.length + 100, barriers.barrier10.y);
    ctx.lineTo(300, barriers.barrier10.y);
    ctx.stroke();
    ctx.moveTo(barriers.barrier11.length + 100, barriers.barrier11.y);
    ctx.lineTo(300, barriers.barrier11.y);
    ctx.stroke();
    ctx.moveTo(barriers.barrier12.length + 100, barriers.barrier12.y);
    ctx.lineTo(300, barriers.barrier12.y);
    ctx.stroke();
    ctx.moveTo(barriers.barrier13.length + 100, barriers.barrier13.y);
    ctx.lineTo(300, barriers.barrier13.y);
    ctx.stroke();
    ctx.moveTo(barriers.barrier14.length + 100, barriers.barrier14.y);
    ctx.lineTo(300, barriers.barrier14.y);
    ctx.stroke();
    ctx.moveTo(barriers.barrier15.length + 100, barriers.barrier15.y);
    ctx.lineTo(300, barriers.barrier15.y);
    ctx.stroke();
    ctx.moveTo(barriers.barrier16.length + 100, barriers.barrier16.y);
    ctx.lineTo(300, barriers.barrier16.y);
    ctx.stroke();
    ctx.moveTo(barriers.barrier17.length + 100, barriers.barrier17.y);
    ctx.lineTo(300, barriers.barrier17.y);
    ctx.stroke();


    ctx.drawImage(img, x, y, 50, 50);
    console.log(x, this.state.lander.y, y);
  }



  choseImg(animationFrame) {
    if(animationFrame === 0){
      return this.state.img
    }
    if(animationFrame === 1){
      let lander = this.state.lander;
      lander.animationFrame += 1;
      this.setState({lander})
      return this.state.animFrame1img
    }
    if(animationFrame === 2){
      let lander = this.state.lander;
      lander.animationFrame += 1;
      this.setState({lander})
      return this.state.animFrame2img
    }
    if(animationFrame === 3){
      let lander = this.state.lander;
      lander.animationFrame += 1;
      this.setState({lander})
      return this.state.animFrame3img
    }
    if(animationFrame === 4){
      let lander = this.state.lander;
      lander.animationFrame += 1;
      this.setState({lander})
      return this.state.animFrame4img
    }
    if(animationFrame === 5){
      let lander = this.state.lander;
      lander.animationFrame = 1;
      this.setState({lander})
      return this.state.animFrame5img
    }
  }

  handleKeys = (e, bool) => {
    if(e.keyCode === 32 && bool){
      let lander = this.state.lander;
      lander.dy = -2;
      lander.animationFrame = 1;
      this.setState({lander})
    } else if (e.keyCode === 32){
      let lander = this.state.lander; 
      lander.dy = 2;
      lander.animationFrame = 0;
      this.setState({lander})
    } else if(e.keyCode === 39 && bool){
      let lander = this.state.lander; 
      lander.dx = 2;
    } else if(e.keyCode === 39){
        let lander = this.state.lander; 
        lander.dx = 0;
    } else if(e.keyCode === 37 && bool){
      let lander = this.state.lander; 
      lander.dx = -2;
    } else if(e.keyCode === 37){
      let lander = this.state.lander; 
      lander.dx = 0;
    }
  }

  render(){
    return (
      <main tabIndex="0" className='App'>
        <div onKeyPress={(e) => this.handleKeyPress(e)}>
          <canvas ref="canvas" className="canvas">
          </canvas>
        </div>
      </main>
    );
  }
}

export default App;