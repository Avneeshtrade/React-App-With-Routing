import About from "../component/about";
import Contact from "../component/contact";
import Home from "../component/home";
import Login from "../component/login";

export const routes = {
    guest:[
        {
            key:4,   
            title:'login',
            path:'/login',
            exact:true,
            component:Login         
        },
        {
            key:1,
            title:'home',
            path:'/home',
            exact:true,
            component:Home
        },
        // {
        //     key:2,
        //     title:'about us',
        //     path:'/about',
        //     exact:true,
        //     component:About
        // },
        // {
        //     key:3,
        //     title:'contact us',
        //     path:'/contact',
        //     exact:true,
        //     component:Contact
        // }
    ],
    registeredUser:[
        {
            key:1,
            title:'home',
            path:'/home',
            exact:true,
            component:Home
        },
        {
            key:2,
            title:'about us',
            path:'/about',
            exact:true,
            component:About
        },
        {
            key:3,
            title:'contact us',
            path:'/contact',
            exact:true,
            component:Contact
        }
    ]
}