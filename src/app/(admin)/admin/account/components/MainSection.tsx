import React from 'react';
import AccountForm from './AccountForm';
import Management from './Management';

type Props = {
  user: any;
};

const MainSection = ({ user }: Props) => {
  return (
    <section className="py-10">
      <div className="container">
        <h1 className="h1 normal-case mb-8">Account</h1>
        <h4 className="h4  ">Click a field to change</h4>
        <hr className=" w-full h-1 my-8" />
        {user && <AccountForm user={user} />}
        <Management />
      </div>
    </section>
  );
};

export default MainSection;
