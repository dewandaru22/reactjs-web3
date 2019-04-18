import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
      //active: 'Home',
      name: 'Atta',
      color: 'Merah',
      img: 'atta.jpg',
		};
	}
	
	clicked(menu) {
		/*this.setState({
			active: menu,
    });*/
    this.setState({
      name: menu.name,
      color: menu.color,
      img: menu.img,
      angka1: 0,
      angka2: 0,
    });
  }
  
  info(name){
    if(name == 'Calculator'){
      //display calc
      return(
      <div>
				<span className={"selected "+this.state.color}>{this.state.name}
        </span><br/><br/>
        <input type="number" name="angka1" placeholder="angka 1" value={this.state.angka1} onChange={this.changeHandler.bind(this)}/>+
        <input type="number" name="angka2" placeholder="angka 2" value={this.state.angka2} onChange={this.changeHandler.bind(this)}/> =
        <span> {parseInt(this.state.angka1) + parseInt(this.state.angka2)}</span><br/><br/>
			</div>
      );
    }
    else{
      //display default
      return(
      <div>
        Ini adalah <span className={"selected "+this.state.color}>
        {this.state.name}</span><br/><br/>

        <img src={this.state.img} width="200"></img>
        {/* {this.menusaya()} */} 
      </div>
      );
    }
  }

  changeHandler(event){
    this.setState({
      angka1: event.target.value,
    });
  }
  
  /*menusaya(){
    //return <img src={this.state.active+".jpg"} width="200"></img>

    var gambar;
    if(this.state.active.toLowerCase() === 'merah'){
      gambar = "satu";
    }
    else if(this.state.active.toLowerCase() === 'kuning'){
      gambar = "tiga";
    }
    else if(this.state.active.toLowerCase() === 'hijau'){
      gambar = "empat";
    }
    else if(this.state.active.toLowerCase() === 'biru'){
      gambar = "dua";
    }
    return <img src={gambar+".jpg"} width="200"></img>
  }*/
	
  render() {
    return (
	
		<div id="app">
			<nav className="nav">{ this.props.items.map(( menu, index) => {
        var style = 'menu';
				
				if (this.state.color === menu.color) {
					style = `${style} is-active`;
				}
				
				return <a
					className={style+" "+menu.color}
					
					onClick={this.clicked.bind(this,menu)}
					key={index}
				>
					{menu.name}
				</a>;
			} ) }
			</nav>
			
			<div className="info ">
        {this.info(this.state.name)}
			</div>
		</div>
			
    );
  }
}

export default App;

