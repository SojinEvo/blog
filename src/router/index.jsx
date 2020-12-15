import React, { Component } from 'react'

import Home from '../views/home'
import New from '../views/title/new'
import JavaScript from '../views/title/JavaScript'

export const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/new',
        component: New,
        children: [
            {
                path: '/new/JavaScript',
                component: JavaScript
            },
        ]
    },
];

