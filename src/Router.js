import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Root from "./Components/Root";
import Login from "./Components/Login";
// import JobListing from "./Components/JobListing";
import User from "./Components/User";

// const router = createBrowserRouter(
//     [
//         {
//             path: "/",
//             element: <Root />,
//             children: [
//                 {
//                     // path:"/",
//                     element: <Home />,
//                     index: true
//                 },
//                 {
//                     path:"about",
//                     element: <About />
//                 },
//                 {
//                     path:"login",
//                     element: <Login />
//                 }
//             ]
//         }
//     ]
// );

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />}>
            <Route path='' element={<Home />}/>
            <Route path='user/:userid' element={<User />}/>
            <Route path='login' element={<Login />}/>
        </Route>
    )
)

export default router;