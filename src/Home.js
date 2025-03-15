import { useState } from 'react';

const Home = () => {

    const [name, setName] = useState('pawan');
    const [age, setAge] = useState(25);

   
    const handleClick = ()=> {
        console.log("Button clicked ");
        setName('vidun');
        setAge('20')
    }

    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <p>My name is {name} and I'm {age} years old</p>

            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}
 
export default Home;

// const handleClickAgain = (x)=> {
//     console.log("Button clicked " +x );
// }
/* { <button onClick={(e) =>  handleClickAgain('pawan',e) }>Click Me Again</button> } */