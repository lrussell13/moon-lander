import React from 'react';
import './App.css';
import lander from './Images/SpaceLander/pixil-frame-0.png';


class App extends React.Component {
  state = {
    lander: {
      x: 10,
      y: 10,
      dy: 1,
      radius: 20,
    }
  }

  componentWillMount(){
    const img = new Image(50, 50);  
    img.src = lander;
    img.onLoad = this.setState({img});
  }

  componentDidMount(){
    this.update(); 
  }

  update = () => {
    let lander = this.state.lander;

    if(lander.y + lander.dy === (this.refs.canvas.height - 45)){
      lander.dy = 0;
    } else {
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
    const img = this.state.img
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, 50, 50);
  }

  render(){
    return (
      <main className='App'>
        <canvas ref="canvas" className="canvas">
          <img id="image" ref="image" src={lander} className="lander" alt="lander" />
        </canvas>
      </main>
    );
  }
}

export default App;