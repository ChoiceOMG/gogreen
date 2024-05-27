import { z } from 'zod';

export const initialState = {
  message: '',
  status: '',
  errors: {}
};

/* Aericle */
export const ArticleSchema = z.object({
  id: z.string(),
  title: z.string({
    invalid_type_error: 'Please enter your title.'
  }),
  subtitle: z.string({
    invalid_type_error: 'Please enter your subtitle.'
  }),
  description: z.string({
    invalid_type_error: 'Please enter your description.'
  }),
  image: z.string({
    invalid_type_error: 'Please enter your image.'
  }),
  URL: z.string({
    invalid_type_error: 'Please enter your URL.'
  }),
  status: z.string({
    invalid_type_error: 'Please enter your status.'
  }),
  excerpt: z.string({
    invalid_type_error: 'Please enter your excerpt.'
  }),
  date: z.string()
});

export const CreateArticle = ArticleSchema.omit({ id: true, date: true });
export const UpdateArticle = ArticleSchema.omit({
  id: true,
  date: true
});

export type StateArticle = {
  errors?: {
    title?: string[];
    subtitle?: string[];
    description?: string[];
    image?: string[];
    URL?: string[];
    status?: string[];
    excerpt?: string[];
  } | null;
  status?: string | null;
  message?: string | null;
};

/* Account */

export const AccountSchema = z.object({
  id: z.string(),
  firstName: z.string({
    invalid_type_error: 'Please enter your first name.'
  }),
  lastName: z.string({
    invalid_type_error: 'Please enter your last name.'
  }),
  username: z.string({
    invalid_type_error: 'Please enter your username.'
  }),
  phoneNumber: z.string({
    invalid_type_error: 'Please enter your phone number.'
  }),
  email: z.string({
    invalid_type_error: 'Please enter your email.'
  }),
  /* min 8 */
  password: z
    .string({
      invalid_type_error: 'Please enter your password.'
    })
    .min(8),
  date: z.string()
});
export const CreateAccount = AccountSchema.omit({ id: true, date: true });
export const UpdateAccount = AccountSchema.omit({
  id: true,
  date: true,
  password: true
});
export const UpdateAccountPassword = AccountSchema.omit({
  id: true,
  date: true,
  firstName: true,
  lastName: true,
  username: true,
  phoneNumber: true,
  email: true
}).merge(z.object({ password: z.string() }));

export type StateAccount = {
  errors?:
    | {
        firstName?: string[];
        lastName?: string[];
        username?: string[];
        phoneNumber?: string[];
        email?: string[];
        password?: string[];
      }
    | null
    | string;

  message?: string | null;
};
