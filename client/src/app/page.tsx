import React from 'react';
import Button from '@/components/ui/button';

const Page: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-8 space-y-4">
      <Button title="View All Products" variant="primary" />
      <Button title="Add To Cart" variant="small" />
      <Button title="View All Products" variant="secondary" />
    </div>
  );
};

export default Page;
