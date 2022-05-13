// import React from 'react';
// import { Route, Redirect } from "react-router-dom";

// function ProtectedRoute({ component: Component, ...props }) {
//     return (
//         <Route path={props.path} exact>
//             {() =>
//                 props.loggedIn ? <Component /> : <Redirect to="./sign-in" />
//             }
//         </Route>
//     )

// }
// export default ProtectedRoute;
import React from "react";
import { Route, Redirect } from "react-router-dom";

/*создаю компонент для защиты Main всех Popup и Footer*/
function ProtectedRoute(props) {
    return (
        <Route>
            {() =>                    //в зависимости от состояния loggedIn открываю или запрещаю доступ 
                props.loggedIn ? props.children : <Redirect to="./sign-in" />
            }
        </Route>
    );
};

export default ProtectedRoute;