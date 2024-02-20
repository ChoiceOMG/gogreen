'use client';
import { changeAccountPassword } from '@/app/services/actions';
import { initialState } from '@/app/services/typesAndSchemas';
import { Button } from '@/components/UI/button';
import { Input } from '@/components/UI/input';
import React, { useEffect, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { toast } from 'react-toastify';

function Management() {
  const [password, setPassword] = useState('');

  const { pending } = useFormStatus();

  const [state, dispatch] = useFormState(changeAccountPassword, initialState);

  useEffect(() => {
    if (state.message) {
      toast.success(state.message);
    }
    if (Array.isArray(state.errors) && state.errors.length > 0) {
      toast.error(JSON.stringify(state.errors));
    }
  }, [state]);
  return (
    <div className="mt-20">
      <h4 className=" h4 ">Account Management</h4>
      <hr className="w-full h-1 my-8" />

      <form
        className="grid md:grid-cols-[1fr_2fr] gap-5 items-center"
        action={dispatch}
      >
        <Input
          type="password"
          placeholder="New Password"
          value={password}
          name="password"
          min={8}
          aria-label="New Password"
          required
          className=" bg-transparent h-full text-lg border-b-4 border-bt-forest-green appearance-none focus:outline-none focus:ring-0 outline-none"
          onChange={e => setPassword(e.target.value)}
        />

        <Button
          type="submit"
          style={{ backgroundColor: `${pending ? '#ccc' : ''}` }}
          disabled={pending}
          className="max-w-[270px]"
        >
          Set New Password
        </Button>
      </form>
    </div>
  );
}

export default Management;
