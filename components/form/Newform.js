import React, {Component} from 'react';

class SubmitFormButon extends React.Component {
    // constructor(props) {
    //     super(props);
        state = {
          inputValue: '',
          submitValue: '',
        };
    //   }
      changeHandler = (event) => {
        console.log(event.target.value);
        this.setState({inputValue : event.target.value});
      };

       formClickHandler = (event) => {
            event.preventDefault();
            console.log('submit is clicked');
            this.setState({
                submitValue: this.state.inputValue,
                inputValue: '',
            });
        }

    render(){
        const { inputValue, submitValue } = this.state;
        // const clickHandler = (event) => {
        //     console.log(event.input.value);
        // }
        return (
            <div>
                <form onSubmit={this.formClickHandler} >
                    <label>input: </label>
                    <input type="text" value = {inputValue} onChange={this.changeHandler}></input>
                    <button type="submit"> submit </button>
                    <p>Submitted value: {submitValue}</p>
                </form>
            </div>
        );
    }
}
export default SubmitFormButon;