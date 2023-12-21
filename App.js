// import { useState } from 'react';
import {    useState } from 'react';
import './App.css';
// import InputBox from './InputBox';
function App() {
 
  const [marks,setmarks] = useState();
  const [credents,setcredits] = useState();
  const [cgpa,setcgpa] = useState("Calculator");
  const [alltodos,setalltodos] = useState([]);
 
  const Handle = () =>{
    
    console.log(marks);
    const Title = {
      Marks:parseInt(marks),
      Credits:parseInt(credents)  
    };
   
    let updatedTodo = [...alltodos];
    updatedTodo.unshift(Title);
    setalltodos(updatedTodo);
    setmarks(' ');
    setcredits(' ');
  }

  const HandleCalculation = (e) =>{
    e.preventDefault();
    var TotalMarks = 0;
    var TotalCredits = 0;
    alltodos.forEach((e)=>{
      if (e.Marks >= 90)
        TotalMarks += 10 * e.Credits;
      else if( 90 >e.Marks  && e.Marks >= 80)
        TotalMarks += 9 * e.Credits;
      else if( 80 >e.Marks  && e.Marks >= 70)
        TotalMarks += 8 * e.Credits;
      else if( 70 >e.Marks  && e.Marks >= 60)
        TotalMarks += 7 * e.Credits;
      else if( 60 >e.Marks  && e.Marks >= 50)
        TotalMarks += 6 * e.Credits;
      else if( 50 >e.Marks  && e.Marks >= 40)
        TotalMarks += 5 * e.Credits;
      else if( 40 >e.Marks  && e.Marks >= 30)
        TotalMarks += 4 * e.Credits;
      else if( 30 >e.Marks  && e.Marks >= 20)
      TotalMarks += 3 * e.Credits;
      else if( 20 >e.Marks  && e.Marks >= 10)
      TotalMarks += 2 * e.Credits;
      else 
        TotalMarks += 1 * e.Credits;
    });
    
    alltodos.forEach((e)=> TotalCredits += e.Credits)
    if (parseFloat(TotalMarks/ TotalCredits) >= 0)
      setcgpa(parseFloat(TotalMarks/ TotalCredits).toFixed(2));
     
  }

  const DeleteEntry = () =>{
    setalltodos([])
  }

  const Deletecontainer = (index) =>{
    let reduced = [...alltodos]
    reduced.splice(index,1);
    setalltodos (reduced);
    window.alert("Record Successfully Deleted ")
  }

  

  return (
    <div className='App'>
      <div className='container'>
        <h1>CGPA {cgpa}<span>
        </span></h1>
        <div className='container1'>
          <input required className='input1' value={marks} onChange={((e)=>{setmarks(e.target.value)})} type='number' placeholder='Marks'></input>
          <input required className='input2' value={credents} onChange={((e)=>{setcredits(e.target.value)})} type='number' placeholder='Credits'></input>
          <button onClick={Handle}>Add</button>
        </div>

        <div className='btn'>
          <button onClick={DeleteEntry}> <i className='bx bx-refresh'></i> Refresh</button>
          <button onClick={HandleCalculation}>Calculate</button>
        </div>

        {
          alltodos.map((item,index)=>{
            return(
              
        <div className='container2' key={index}>
                <div className='container3'>
                  <h4>Marks : {item.Marks}</h4>
                  <p>Credits : {item.Credits} </p>
                  <i className='bx bxs-trash'  onClick={()=>Deletecontainer(index)}></i>
                </div>
        </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
