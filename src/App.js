import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './Profile.js';
import Calculator from './Calculator';


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
    });
  }
  
  info(name){
    if(name == 'Calculator'){
      //display calc
      return <Calculator></Calculator>;
    }
    else if(name=='Profile'){
      //display menu Profile
      return <Profile nama="Say"/>;
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

