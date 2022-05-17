import React, { Component } from 'react';
import './stylesNew.css';
// import Fcomponent from "./Fcomponent";
// import Fncomponent from "./Fncomponent";
// import Button from '@mui/material/Button';



export default class Ccomponent extends Component {


    constructor(props) {
      super(props)
    
      this.state = {

        error: null,
        isLoaded: false,
        items: []
        // Урок 7
        // inputValue : ''
      }

      //Урок 7
      // this.handleChange = this.handleChange.bind(this); 
    };
 //Урок 7
    // handleChange(event){
    //     this.setState({
    //         inputValue : event.target.value
    //     })
    // }
    componentDidMount(){
      fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
      .then(res =>res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.drinks

          });
        },
        (error) => {
          this.setState({
            isLoaded:true,
            error 
          })
          
      }
      )
    }
 
  render() {
        const {error, isLoaded, items} = this.state
        if(error) {
          return <p>Error {error.message}</p>
        }else if(!isLoaded){
          return <p>Loading...</p>
        }else{
          return(
            <ul>
              {
                items.map(item => (
                  <li key={item.name}>
                    {item.strDrink}
                  </li>
                )
                )
                }  
            </ul>
          )
        }

        // {/* Урок 7 */}
        // {/* <p>Welcome   to YouTuBe {this.state.name}</p> */}
        // {/* <Fcomponent nameweb={this.state.name}/> */}

        // {/* <Fcomponent input={this.state.inputValue}
        // handleChange={this.handleChange}
        // />
        // <Fncomponent input={this.state.inputValue}/> */}
     
  
  }
}






// Уроки 1-6

// export default class Ccomponent extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          count:0,
//          input:"",
//          submit: '',
//          items :[],
//          class:'off',
//          label :'Press',
        
//       }
//       console.log('constructor');
//       this.press= this.press.bind(this)
      
//       this.increment= this.increment.bind(this);
//       this.decrement= this.decrement.bind(this);
//       this.reset= this.reset.bind(this);
//       this.handleChange=this.handleChange.bind(this);
//      this.handelSubmit=this.handelSubmit.bind(this);
//       this.handelSubmit2=this.handelSubmit2.bind(this);

//     }
//     componentDidMount(){
//         console.log('componentDidMount()')
//     }
//     shouldComponentUpdate(){
//         console.log('shouldComponentUpdate()')
//         return true
//     }
//     componentDidUpdate(){
//             console.log('componentDidUpdate()')
//     }
//     componentWillUnmount(){

//     }
//     press(){
//         var className = (this.state.class==='off')?'on':'off';
//         this.setState({class: className});
//     }



    
//     handelSubmit2(event){
//         event.preventDefault()
//         this.setState({
//             input: this.state.input,
//             items: [...this.state.items,  this.state.input]
//         })
//     }
//     handelSubmit(event){
//         event.preventDefault()
//         this.setState({
//             submit: this.state.input
//         })
//     }
//     handleChange(event){
//         this.setState({
//             input: event.target.value
//         });
//     }
//     increment(){
//         this.setState(state=> ({
//             count: state.count + 1
//         }));
//     }
//     decrement(){
//         this.setState(state=> ({
//             count: state.count - 1
//         }));
//     }
//     reset() {
//         this.setState({
//             count:0
//         })

    
//     }
//     render(){
//         return(
//             <div>
//                 {/* Урок 5 */}
//             {/* console.log("render");
//             return <Button onClick={this.press} className={this.state.class}>{this.state.label}</Button>

//  */}

                
//                 {/* Урок 4 */}

//                 {/* <h1 className='hello'>Hello World</h1>

//                 <Button variant="contained">Contained</Button>
//                 <Button variant="contained" disabled>
//                 Disabled
//                 </Button>
//                 <Button variant="contained" href="#contained-buttons">
//                 Link
//                 </Button>

//                 <form onSubmit={this.handelSubmit2}>
//                 <input value={this.state.input} onChange={this.handleChange}/> 
//                 <button type='submit'> Submit </button>
//                 </form>
//                 <ul>
//                     {this.state.items.map((items , index)=>(
//                         <li key={index}>{items}</li>
//                 ))}
//                 </ul> */}







//                 {/* To Do List  Урок 3*/}
//                 {/* <form onSubmit={this.handelSubmit2}>
//                 <input value={this.state.input} onChange={this.handleChange}/> 
//                 <button type='submit'> Submit </button>
//                 </form>
//                 <ul>
//                     {this.state.items.map((items , index)=>(
//                         <li key={index}>{items}</li>
//                 ))}
//                 </ul>
//  */}



//                 {/* Урок 2 */}
//                 {/* <form onSubmit={this.handelSubmit}>
//                 <input value={this.state.input} onChange={this.handleChange}/> 
//                 <button type='submit'> Submit </button>
//                 </form>

//                 <h3>{this.state.submit}</h3> */}

//                 {/*  Урок 1 */}
//                 {/* <button onClick={this.increment}>increment</button>
//                 <button onClick={this.decrement}>decrement</button>
//                 <button onClick={this.reset}>reset</button>
//                 <h1>Current :{this.state.count}</h1>
//                 <input onChange={this.handleChange}/>
//                 <h5>
//                     Controled Input

//                 </h5>
//                 <h3>
//                 {this.state.input}
//                 </h3>   */}


//             </div>

//         )
//     }

// }