import React, { Component } from 'react'
import questions from './components/Data';
import OneQuestion from './components/Questions';

class App extends React.Component{
  render() {
    return(
       <>
       <div className='container'>
       <h1>Faq's</h1>
       <section className='info'>
          {
            questions.map((question)=>{
              return(
                 <OneQuestion key={question.id} {...question} />
              )
            })
          }
       </section>
       </div>
       </>

    );
  }
}

export default App