'use client';

import { Button } from '@/components/UI/button';
import { motion } from 'framer-motion';
import { getSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';

export const AuthForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      setFormValues({ email: '', password: '' });

      const res = await signIn('credentials', {
        redirect: false,
        email: formValues.email,
        password: formValues.password
      });

      if (!res?.error) {
        const session = await getSession();

        if (session?.user.role === 'ADMIN') {
          router.push('/admin/articles');
        } else {
          router.push('/');
        }
        setLoading(false); // Move this line here
      } else {
        setLoading(false);
        setError('invalid email or password');
      }
    } catch (error: any) {
      setLoading(false);
      setError(error);
    }
  };
  const input_style =
    'block py-2.5 px-0 w-full text-black relative z-[1] bg-transparent border-0 border-b-2 border-bt-forest-green appearance-none focus:outline-none focus:ring-0 peer';
  const label_style =
    'z-[0] peer-focus:font-medium absolute uppercase font-bold text-slate-400 duration-300 transform -translate-y-4 scale-75 bottom-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6';
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full mr-auto max-w-2xl relative "
    >
      {loading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          Loading...
        </motion.div>
      ) : (
        <form onSubmit={onSubmit}>
          {error && (
            <p className="text-center bg-red text-white py-2 mb-6 rounded">
              {error}
            </p>
          )}
          <div className="relative w-full group mb-4">
            <input
              className={input_style}
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder=""
              aria-label="Email"
              required
            />
            <label htmlFor="email" className={label_style}>
              Email address
            </label>
          </div>
          <div className="relative w-full group">
            <input
              className={input_style}
              type="password"
              name="password"
              id="Password"
              value={formValues.password}
              onChange={handleChange}
              placeholder=""
              required
              aria-label="Password"
            />
            <label htmlFor="Password" className={label_style}>
              Password
            </label>
          </div>

          <Button
            type="submit"
            style={{ backgroundColor: `${loading ? '#ccc' : ''}` }}
            className="mx-auto w-[174px] mt-3 "
            disabled={loading}
            aial-label="Login"
          >
            {loading ? 'Loading...' : 'Login'}
          </Button>
        </form>
      )}
    </motion.div>
  );
};
