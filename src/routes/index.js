import React from 'react';

const About = React.lazy(()=>import("../component/about"));
const Contact = React.lazy(()=>import("../component/contact"));
const Home = React.lazy(()=>import("../component/home"));
const Login = React.lazy(()=>import("../component/login"));

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