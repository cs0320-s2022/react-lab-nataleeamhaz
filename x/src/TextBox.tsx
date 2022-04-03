import React from 'react';
import './App.css';
function TextBox(props: any) {
  return (
      <div>
          <label>{props.label}: </label>
          <input type={'text'} onChange={(e)=>props.change(e.target.value)} />
           </div>

            );
          }

          export default TextBox;