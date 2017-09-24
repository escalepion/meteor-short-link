import React from 'react';
import { Accounts } from 'meteor/accounts-base';

const PrivateHeader = (props) => {
    // bu şekilde de olur 
    // const onLogout = () => {
    //     Accounts.logout();
    // }
    return (
        <div>
            <h1>{props.title}</h1>
            <button onClick={() => Accounts.logout()}>Logout</button>
        </div>
    );
};

export default PrivateHeader;

// export default class PrivateHeader extends Component {
//     onLogout () {
//         Accounts.logout();
//     }

//     render () {
//         return (
//             <div>
//                 <h1>Your Links</h1>
//                 <button onClick={this.onLogout.bind(this)}>Log Out</button>
//             </div>
//         );
//     }
// }
