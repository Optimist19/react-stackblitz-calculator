import React, {useState} from 'react';
import "./style.css";

const App = () => {
	const [val, setVal] = useState("");


	function changeHandle(event){
		event.preventDefault()
		console.log("val", val);
		console.log("event.target.value", event);
		setVal(val + event.target.value)
	}
	
	function delHandle(event){
		event.preventDefault()
		console.log("val", val);
		console.log("event.target.value", event);
		try{
			// eslint-disable-next-line
			setVal(val.slice(0, -1))
		}catch(error){
			setVal("")
		}
	}

	function equalHandle(event){
		event.preventDefault()
		console.log("val", val);
		console.log("event.target.value", event);
		try{
			// eslint-disable-next-line
			setVal(eval(val))
		}catch(error){
			setVal("ERROR")
		}
	}
	
	


  return ( 
    <div>
		<div className='big-container'>
			<p>ALTSCHOOL REACT CALCULATOR</p>
     		<div className='small-container'>
				<input type="text" className='input' value={val}/> 
				<div className='button-container'>
     				<button className='seven' value="7" onClick={changeHandle}>7</button>
     				<button className='four' value="4" onClick={changeHandle}>4</button>
     				<button className='one' value="1" onClick={(e)=> setVal(val + e.target.value)}>1</button>
     				<button className='del' value="del"  onClick={delHandle}>c</button>
				</div>
				<div className='button-container'>
     				<button className='eight' value="8" onClick={changeHandle}>8</button>
     				<button className='five' value="5" onClick={changeHandle}>5</button>
     				<button className='two' value="2" onClick={changeHandle}>2</button>
     				<button className='zero' value="0" onClick={changeHandle}>0</button>
				</div>
				<div className='button-container'>
     				<button className='nine' value="9" onClick={changeHandle}>9</button>
     				<button className='six' value="6" onClick={changeHandle}>6</button>
     				<button className='three' value="3" onClick={changeHandle}>3</button>
     				<button className='.' value="." onClick={changeHandle}>.</button>
				</div>
				<div className='button-container'>
     				<button className='/' value="/" onClick={changeHandle}>/</button>
     				<button className='*' value="*" onClick={changeHandle}>*</button>
     				<button className='-' value="-" onClick={changeHandle}>-</button>
     				<button className='+' value="+" onClick={changeHandle}>+</button>
				</div>
     			<button className='equal-button' value="=" onClick={equalHandle}>=</button>
			</div>
			<div></div>
		</div>
	
		
    </div>

	);
}
export default App;

