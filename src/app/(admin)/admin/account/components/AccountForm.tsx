'use client';

import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../../../loading';
import { User } from '@prisma/client';
import { toast } from 'react-toastify';
import { changeAccount } from '@/app/services/actions';
import { Button } from '@/components/UI/button';

function AccountForm({ user }: { user: User | null }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!user) return;
    setFirstName(user.firstName || '');
    setLastName(user.lastName || '');
    setUsername(user.userName || '');
    setPhoneNumber(user.phoneNumber || '');
    setEmail(user.email || '');
  }, [user]);

  const handleSave = async () => {
    if (!user) return;
    if (!email) return toast.error('Email is required!');
    if (!userName) return toast.error('Username is required!');

    // Check if the data is the same
    if (
      user.firstName === firstName &&
      user.lastName === lastName &&
      user.userName === userName &&
      user.phoneNumber === phoneNumber &&
      user.email === email
    ) {
      return toast.info('No changes were made.');
    }

    setLoading(true);
    try {
      const res = await changeAccount(user.id, {
        firstName,
        lastName,
        userName,
        phoneNumber,
        email
      });

      console.log(res);

      if (res.errors) {
        return toast.error(JSON.stringify(res.errors));
      } else {
        toast.success(res.message);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        toast.error(error.message || 'Something went wrong!');
      } else {
        toast.error('Something went wrong!');
      }
    }
    setLoading(false);
  };

  const input_style =
    'block max-w-xs py-2.5 px-0 w-full  bg-transparent border-0 border-b-4 border-bt-forest-green appearance-none focus:outline-none focus:ring-0';
  return (
    <form className=" max-w-3xl relative">
      <div className="grid md:grid-cols-2 gap-5">
        <input
          type="text"
          name="firstName"
          id="FirstName"
          placeholder="First Name:"
          className={input_style}
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />

        <input
          type="text"
          name="lastName"
          id="LastName"
          placeholder="Last Name:"
          className={input_style}
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />

        <input
          type="text"
          name="username"
          id="Username"
          placeholder="Username:"
          className={input_style}
          value={userName}
          onChange={e => setUsername(e.target.value)}
        />

        <input
          type="number"
          name="phoneNumber"
          id="PhoneNumber"
          placeholder="Phone Number:"
          className={input_style}
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
        />

        <input
          type="email"
          name="email"
          id="Email"
          placeholder="Email:"
          className={input_style}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>

      <Button
        type="button"
        className="mt-5  w-[150px]"
        onClick={handleSave}
        aial-label="Login"
        disabled={loading}
      >
        Save
      </Button>
      {loading && <LoadingSpinner className="absolute top-0 left-0" />}
    </form>
  );
}

export default AccountForm;
