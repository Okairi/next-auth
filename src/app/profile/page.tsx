"use client";
 

import { redirect } from 'next/navigation';
import { useLayoutEffect } from 'react';
import { isAuthenticated } from '../utils/Auth';
import isAuth from '../components/isAuth';


const Profile = () => {

/*     useLayoutEffect(() => {
      const isAuth = isAuthenticated;
      if(!isAuth){
        redirect("/")
      }
    }, []) */
   
  return (
    <main className="text-center h-screen flex justify-center items-center">
      <div>
        <h1>Profile</h1>        
      </div>
    </main>
  );
};


export default isAuth(Profile) ;