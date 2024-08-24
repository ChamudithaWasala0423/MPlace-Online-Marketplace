'use client';  // Add this line at the top

import React from 'react';
import Button from '@/components/button';
import Textarea from '@/components/textarea';
import SearchBar from '@/components/searchbar';
import LoginPage from './pages/loginpage';
import Signup from './pages/signup';
import PostAdPage from './pages/postadd';
import EditAddPage from './pages/editadd';

const Page: React.FC = () => {
  return (
    <>
     <Signup/>
    </>
  );
};

export default Page;
