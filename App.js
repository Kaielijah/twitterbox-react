import React from 'react';
import ReactDOM from 'react-dom';

const CHAR_LIMIT = 160;

class App extends React.Component{
  render(){
    return (

      <div>
      <h2>TWEETER BOX</h2>
      <WordCount/>
      </div>

    )
  }
}

class WordCount extends React.Component{
  constructor(){
    super();
this.state={
  chars_left : CHAR_LIMIT,
  chars_typed: 0
  };

  }

  _updateEvent(event){
    let input = event.target.value;

    if(this.state.chars_left !== 0){
      this.setState({chars_left: CHAR_LIMIT - input.length, chars_typed: input.length
      })
    }else{
      alert('TOOO LONGGS')

    }
  }

render(){
  return(
    <div>
    <textarea onChange={this._updateEvent.bind(this)} maxLength={CHAR_LIMIT}></textarea>
    <p>Characters left: {this.state.chars_left}</p>
    <p>Characters typed: {this.state.chars_typed}</p>
    </div>
  )


}

}

ReactDOM.render(
  <App />,
  document.getElementById('tweets')
)
