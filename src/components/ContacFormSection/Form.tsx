'use client';

import { sendContactForm } from '@/app/services/actions';
import { Button } from '@/components/UI/button';
import { useRef, useState } from 'react';

import OverlayMessage from '@/components/UI/OverlayMessage';
import { validatePhoneNumber } from '@/utils/validators';

export const Form = ({ className = '' }: { className?: string }) => {
  // State for the form fields
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  // Styles for the form elements
  const style_label = 'pl-6 pb-4 Accent uppercase';
  const style_input =
    'rounded-[10px] w-full border-[1px] border-goGreen-green h-[59px] px-6 text-goGreen-green';

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setLoading(true);
    if (formRef.current) {
      try {
        const phone = (
          formRef.current?.elements.namedItem('phone') as HTMLInputElement
        )?.value;
        if (!validatePhoneNumber(phone)) {
          setPhoneError('Invalid phone number');
          setLoading(false);
          return;
        }

        const formData = new FormData(formRef.current);
        const res = await sendContactForm(formData);

        if (res.errors) {
          // Handle validation errors here
          console.error(res.errors);
          setError(true);
        } else {
          setSuccess(true);
          setTimeout(() => setSuccess(false), 5000);
          formRef.current?.reset();
        }
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
        setTimeout(() => setError(false), 5000);
      }
    }
  };
  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className={`lg:pl-8 relative ${className}`}
    >
      <div className=" grid md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label htmlFor="fullName" className={style_label}>
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className={style_input}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="companyName" className={style_label}>
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            className={style_input}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className={style_label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={style_input}
            required
          />
        </div>
        <div className="flex flex-col max-md:order-1 row-span-2">
          <label htmlFor="message" className={style_label}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={2}
            className={style_input + ' h-full min-h-[118px] resize-none py-4'}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className={style_label}>
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className={style_input}
            pattern="[\d\-\(\)]*"
            required
          />
          {phoneError && <div className="text-red-500">{phoneError}</div>}
        </div>
      </div>
      <div className=" flex justify-center mt-8 md:mt-16">
        <Button className=" w-fit " type="submit" aria-disabled={loading}>
          SEND
        </Button>
      </div>
      {loading && (
        <div className="absolute inset-0  rounded-[10px] z-10">
          Loading...
        </div>
      )}

      {success && (
        <OverlayMessage
          title="It’s Sent!"
          message="Thank you for contacting GoGreen. We have received your email and will get back to you soon."
          onClose={() => setSuccess(false)}
        />
      )}
      {error && (
        <OverlayMessage
          title="Error!"
          message="Oops! Something went wrong. Please try again."
          onClose={() => setError(false)}
        />
      )}
    </form>
  );
};
