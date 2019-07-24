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
      x: 10,
      y: 10,
      dy: 1,
      dx: 0,
      radius: 20,
      playAnimation: false,
      animationFrame: 0
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

  }

  componentDidMount(){
    window.addEventListener('keydown', (e) => this.handleKeys(e, true));
    window.addEventListener('keyup',   (e) => this.handleKeys(e, false));
    this.update(); 
  }

  update = () => {
    let lander = this.state.lander;

    if(lander.y + lander.dy >= (this.refs.canvas.height - 45)){
      lander.dy = 0;
    } else {
      lander.x += lander.dx;
      lander.dy *= 1.04;
      lander.y += lander.dy;
    }
    

    this.setState({lander})
    requestAnimationFrame(this.update);
    this.draw();
  }
  
  draw = () => {
    let x = this.state.lander.x
    let y = this.state.lander.y
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    const img = this.choseImg(this.state.lander.animationFrame)
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, 50, 50);
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
      lander.dy = -1;
      lander.animationFrame = 1;
      this.setState({lander})
    } else if (e.keyCode === 32){
      let lander = this.state.lander; 
      lander.dy = 1;
      lander.animationFrame = 0;
      this.setState({lander})
    } else if(e.keyCode === 39 && bool){
      let lander = this.state.lander; 
      lander.dx = 1;
    } else if(e.keyCode === 39){
        let lander = this.state.lander; 
        lander.dx = 0;
    } else if(e.keyCode === 37 && bool){
      let lander = this.state.lander; 
      lander.dx = -1;
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
            <img id="image" ref="image" src={lander} className="lander" alt="lander" />
          </canvas>
        </div>
      </main>
    );
  }
}

export default App;