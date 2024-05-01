'use client';

import { Main } from "next/document";
import MainPage from "./component/templates/main_page";
import ProfilePage from "./component/templates/profile_page";

export default function Home(){
  return(
    <>
      <MainPage/>
      <hr />
      <ProfilePage/>
    </>
  );
}