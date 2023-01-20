import React from 'react';
import {NoSsr} from '@shopify/hydrogen/client';
import Cart from '../routes/cart.server';


const Demo = React.lazy(()=> import('./Demo.client'));

const NoSSR = () => {



  return (
    <div>
        <NoSsr  component={<Demo/>} fallback="Loading..."/>
    </div>
  )
}

export default NoSSR