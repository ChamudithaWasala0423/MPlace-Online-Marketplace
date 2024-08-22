'use client';  // Add this line at the top

import React from 'react';
import Button from '@/components/ui/button';
import SearchBar from '@/components/ui/searchbar';
import Textarea from '@/components/ui/textarea';
import LoginPage from './pages/loginpage';


const Page: React.FC = () => {
  return (
    <>
      <LoginPage />
    </>
  );
};

export default Page;
