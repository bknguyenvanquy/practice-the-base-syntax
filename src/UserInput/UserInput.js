import React, { Component } from 'react';

// class UserInput extends Component {
//     render() {
//         return (
//             <div>
//                 <p>UserInput Component</p>
//             </div>
//         );
//     }
// }

// export default UserInput;

const userInput = (props) => {
    return (
        <div>
            <input type="text" onChange={props.change}/>
        </div>
    );
}
export default userInput;