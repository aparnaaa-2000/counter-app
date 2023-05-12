import React, { useState } from 'react'
import './home.css'
import { useDispatch, useSelector } from 'react-redux';
import { dec, inc, incrementbyamount } from '../redux/counter';

// import { useEffect } from 'react'

export default function Home() {

  const {counter} = useSelector((data)=>data.counter)  //useSelecetor- to call state
  const dispatch = useDispatch();                      //useDispatch - to call function




    // const [ state,setstate]=useState(0)
    // console.log("state",state);

    // const inputvalue=(e)=>{
    //     setstate(e.target.value);

    // }
    // const inc = ()=>{
    //     setstate(Number(state)+ 1)
    // }
    // const dec=()=>{
    //     setstate(state-1)
    // }
 
  return (
    <div>
    <div className='container-fluid'>
        <div className='row'>

            <div className='col'></div>

            <div className='col' id='box'>

              <h2 id='num'>NUMBER COUNTER</h2>
                <div className='row' style={{height:"110px"}}></div>
            {/* <div class="form-floating"> */}
            <div className='hai'>
  <textarea class="form-control" typeof='text' onChange={(e)=>{dispatch(incrementbyamount(e.target.value))}} value={counter} id="floatingTextarea " style={{textAlign:"center"}}  ></textarea>
  </div>
  {/* <label for="floatingTextarea"></label> */}
{/* </div> */}
<div className='row' style={{height:"110px"}}></div>
<div className='row'>

{/* <div className='col-sm-2'id='plus' > */}
<div class="d-flex justify-content-between">
    <a href="#" >
<svg xmlns="http://www.w3.org/2000/svg"  onClick={()=>{dispatch(inc())}} width="50" height="50"  fill="green" class="bi bi-plus-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg></a>
{/* </div> */}
{/* <div className='col' ></div> */}
     
{/* <div className='col-sm-2' > */}
    <a href="#" >
<svg xmlns="http://www.w3.org/2000/svg" onClick={()=>{dispatch(dec())}}  width="50" height="50" fill="red" class="bi bi-dash-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
</svg></a>
{/* </div> */}
</div>
    
    </div>  
  

            </div>
            <div className='col'></div>
        </div>
    </div>
    </div>
  )
}
