import React from 'react';

// modules
const LazyCatalog = React.lazy(() => import('modules/Catalog'));
const LazyAdmin = React.lazy(() => import('modules/Admin'));

// config routes
const routesLink =  [
  {
    path: '/catalog',
    Component: LazyCatalog,
  },
  {
    path: '/',
    Component: LazyAdmin,
  }
];

export default routesLink;

