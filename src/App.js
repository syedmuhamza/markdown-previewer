import { useState,useEffect } from 'react';
import './App.css';
import {marked} from 'marked';

marked.setOptions({
  breaks:true
})

const renderer = new marked.Renderer();

function App() {
  return (
    <>
    <Writer />
    </>
  );
}

const Writer=()=>{

  const onChangeHandler=(e)=>{
  setText(e.target.value);
}
const initialString=`# This is h1

## This is h2

Here is a link [AAES](https://aaespak.com)

In-line code: \`console.log('hello world');\`
Some function: 
\`\`\`
function add(a, b) {
return a + b;
}
\`\`\`

This is a list
- item
- item
- item

Here is a blockquote:

> This is a quote.

Here is an image:

![alt text](https://via.placeholder.com/150)

Here is some **bolded text**.


`
const [text,setText]=useState(initialString);

useEffect(()=>{
  console.log(text)
},[text]);

  return(
  <div className='main-container'>
    <div className='container'>
    <div className='top-tab'>
      <h5 style={{fontSize:'1rem'}}>Editor</h5>
    </div>
    <div className='input-area'>
      <textarea name="input-field" id="editor" cols="75" rows="10" placeholder='input text here' onChange={onChangeHandler}>
        {text}
      </textarea>
    </div>
  </div>
  
  <div  className='container reader'>
    <div className='top-tab'>
      <h5 style={{fontSize:'1rem'}}>Previewer</h5>
    </div>
    <Preview id='preview' markdown={text} />
  </div>
  </div>
  );
};

function Preview({markdown}){
  return (<div id='preview' dangerouslySetInnerHTML={{
    __html:marked(markdown,{renderer:renderer})
  }}>

  </div>)
}



export default App;
