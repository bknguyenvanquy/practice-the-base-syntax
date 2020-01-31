import React, { Component } from 'react';

// class UserOutput extends Component {
//     render() {
//         return (
//             <div>
//                 <p>UserOutput Component</p>
//             </div>
//         );
//     }
// }

// export default UserOutput;

const userOutput = (props) => {
    return (
        <div>
            <p>User Name: {props.userName}</p>
            <p>UserOutput Function</p>
        </div>
    );
}
export default userOutput;