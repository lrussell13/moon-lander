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
      y: 0,
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
    }, barriers: [
      {
        y: 300,
        viewportY: 300,
        dy: -2,
        length: 0
      }, {
        y: 450,
        viewportY: 450,
        offsetY: 0,
        dy: -2,
        length: 0
      }, {
        y: 600,
        viewportY: 600,
        offsetY: 0,
        dy: -2,
        length: 0
      }, {
        y: 750,
        viewportY: 750,
        offsetY: 0,
        dy: -2,
        length: 0
      }, {
        y: 900,
        viewportY: 900,
        offsetY: 0,
        dy: -2,
        length: 0
      }, {
        y: 1050,
        viewportY: 1050,
        offsetY: 0,
        dy: -2,
        length: 0
      }, {
        y: 1200,
        viewportY: 1200,
        offsetY: 0,
        dy: -2,
        length: 0
      }, {
        y: 1350,
        viewportY: 1350,
        offsetY: 0,
        dy: -2,
        length: 0
      }, {
        y: 1500,
        viewportY: 1500,
        offsetY: 0,
        dy: -2,
        length: 0
      }, {
        y: 1650,
        viewportY: 1650,
        offsetY: 0,
        dy: -2,
        length: 0
      }, {
        y: 1800,
        viewportY: 1800,
        offsetY: 0,
        dy: -2,
        length: 0
      }, {
        y: 1950,
        viewportY: 1950,
        offsetY: 0,
        dy: -2,
        length: 0
      }, {
        y: 2100,
        viewportY: 2100,
        offsetY: 0,
        dy: -2,
        length: 0
      }, {
        y: 2250,
        viewportY: 2250,
        offsetY: 0,
        dy: -2,
        length: 0
      }, {
        y: 2400,
        viewportY: 2400,
        offsetY: 0,
        dy: -2,
        length: 0
      }, {
        y: 2550,
        viewportY: 2550,
        offsetY: 0,
        dy: -2,
        length: 0
      }, {
        y: 2700,
        viewportY: 2700,
        offsetY: 0,
        dy: -2,
        length: 0
      }]
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

    for(let i = 0; i < barriers.length; i++){
      barriers[i].length = Math.floor(Math.random() * 150);
    }

    this.setState({barriers});
    
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
    
    for(let i = 0; i < barriers.length; i++){
      barriers[i].dy = -(lander.dy);
    }

    if(lander.y >= 2880){
      lander.viewport.y = lander.y - 2880;
    } else {
      lander.viewport.y = lander.y + offsetY;
    }
    
    if((lander.y + lander.viewport.y + lander.dy) >= 3200 - 160){
      lander.dy = 0;
    } else {
      for(let i = 0; i < barriers.length; i++){
        barriers[i].viewportY += barriers[i].dy  
      }

      lander.y += lander.dy;
      lander.x += lander.dx;
    }
   
    for(let i = 0; i < barriers.length; i++){
      if((lander.y + 100) > barriers[i].y && (lander.y + 50) < barriers[i].y){
        if(lander.x < barriers[i].length || lander.x + 50 > barriers[i].length + 100){
          console.log("passing", lander.x, barriers[i].length);
        }
      }
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
    const img = this.choseImg(this.state.lander.animationFrame);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    
    const barriers = this.state.barriers;

    for(let i = 0; i < barriers.length; i++){
      ctx.moveTo(0, barriers[i].viewportY);
      ctx.lineTo(barriers[i].length, barriers[i].viewportY);
      ctx.stroke();
      ctx.moveTo(barriers[i].length + 100, barriers[i].viewportY);
      ctx.lineTo(300, barriers[i].viewportY);
      ctx.stroke();
    }

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