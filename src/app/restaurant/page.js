'use client';

import { useState } from 'react';
import RestaurantLogin from '../_components/restaurantLogin';
import RestaurantSignUp from '../_components/restaurantSignUp';

const page = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
      <h1>Restaurant Login and SignUp</h1>
      {login ? <RestaurantLogin /> : <RestaurantSignUp />}
      <button onClick={()=>setLogin(!login)}>
        {login
          ? 'Do not have an Account: SignUp'
          : 'Already have an account : Login'}
      </button>
    </>
  );
};

export default page;
