import React from 'react';
import { AuthForm } from './AuthForm';

const MainSection = () => {
  return (
    <section
      className="min-h-screen w-full"
      style={{
        backgroundImage: "url('/images/admin/login-bg.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="myContainer mx-auto px-6 py-12 h-screen flex justify-center items-center flex-col">
        <div className="w-full md:w-8/12 lg:w-4/12 bg-[#eeefef] px-8 py-10 rounded-xl shadow-xl">
          <AuthForm />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
