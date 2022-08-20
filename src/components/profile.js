import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import '../css/profile.css'
// const { user, isAuthenticated, isLoading } = useAuth0();
class Profile extends Component {

  render() {
    const { user, isAuthenticated } = this.props.auth0;
    return (
      <>
        {isAuthenticated && (
          <>
            <div className="profile-div">
              <img src={user.picture} alt={user.name} />
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          </>
        )}
      </>
    );
  }
}

export default withAuth0(Profile);
// import { useAuth0 } from "@auth0/auth0-react";
// import React from "react";
// import { withAuth0 } from '@auth0/auth0-react';

// function Profile(){
//     const { user, isAuthenticated, isLoading } = useAuth0();

//     if (isLoading) {
//       return <div>Loading ...</div>;
//     }

//     return (
//       isAuthenticated && (
//         <div>
//           <img src={user.picture} alt={user.name} />
//           <h2>{user.name}</h2>
//           <p>{user.email}</p>
//         </div>
//       )
//     );
//   };

//   export default withAuth0(Profile);
