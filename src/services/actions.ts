'use server';

import { authOptions } from '@/app/api/auth/[...nextauth]/auth';
import prisma from '@/app/db/client';
import { sendEmail } from '@/utils/email';
import { Prisma } from '@prisma/client';
import { hash } from 'bcryptjs';
import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { StateAccount, UpdateAccountPassword } from './typesAndSchemas';

const ContactForm = z.object({
  fullName: z.string().min(1, {
    message: 'Please enter your first name.'
  }),
  companyName: z.string().min(1, {
    message: 'Please enter your company name.'
  }),
  email: z.string().min(1, {
    message: 'Please enter your email.'
  }),
  phone: z.string().min(1, {
    message: 'Please enter your phone number.'
  }),
  message: z.string().optional()
});

export async function sendContactForm(formData: FormData) {
  // Validate form using Zod
  const validatedFields = ContactForm.safeParse({
    fullName: formData.get('fullName'),
    companyName: formData.get('companyName'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    message: formData.get('message')
  });
  console.log(validatedFields);
  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Send Message.'
    };
  }

  // Prepare data for insertion into the database
  const { fullName, phone, email, message, companyName } = validatedFields.data;
  const htmlMessage = `
<html>
<head>
  <style>
    .body {
      font-family: Montserrat, sans-serif;
      margin: 0;
      padding: 0;
      border-radius: 35px;
      border: 1px solid #495B6E;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }

    .header {
      padding: 20px;
      text-align: center;
      border-bottom: 1px solid #495B6E;
    }

    .header h1 {
      margin: 0;
      padding: 0;
      font-size: 3rem;
      font-weight: bold;
      text-transform: uppercase;
    }

    .content {
      padding: 20px;
    }

    .footer {
      padding: 20px;
      text-align: center;
      font-size: 12px;
      text-transform: uppercase;
      border-top: 1px solid #495B6E;
    }
  </style>
</head>
<body>
<div class="body">
  <div class="container">
    <div class="header">
      <h1>Contact Form</h1>
    </div>
    <div class="content">
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company Name:</strong> ${companyName}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    </div>
    <div class="footer">
      <p>Copyright 2024 © GoGreen. For support, please contact Choice OMG support@choice.marketing. Do not mark these emails as spam.</p>
    </div>
  </div>
</div>
</body>
</html>

  `;
  try {
    const mailTo = process.env.EMAIL_TO
    if (!mailTo) throw new Error("Destination email missing. Please contact the webmaster.")
    await sendEmail({
      to: mailTo,
      // to: email,
      subject: `[Contact Form]: Message from ${fullName}`,
      html: htmlMessage
    });
    return {
      errors: null,
      message: 'Message sent successfully.'
    };
  } catch (error) {
    console.error(error);
    return {
      errors: error,
      message: 'Failed to send message.'
    };
  }
}

/* Admin */

export async function changeAccount(
  id: string,
  changeAccountData: Partial<Prisma.UserUpdateInput>
) {
  if (changeAccountData.email === '') {
    return {
      errors: 'Please enter your email.'
    };
  }
  if (changeAccountData.userName === '') {
    return {
      errors: 'Please enter your username.'
    };
  }

  const { firstName, lastName, userName, phoneNumber, email } =
    changeAccountData;
  try {
    await prisma.user.update({
      where: { id: id },
      data: {
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        phoneNumber: phoneNumber,
        email: email
      }
    });
    revalidatePath('/admin/account');
    return {
      errors: null,
      message: 'Account settings changed successfully.'
    };
  } catch (e) {
    console.error(e);
    return { message: 'Something went wrong. Please try again later.' };
  }
}

export async function changeAccountPassword(
  prevState: StateAccount,
  formData: FormData
) {
  // Validate form using Zod
  const validatedFields = UpdateAccountPassword.safeParse({
    password: formData.get('password')
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Invoice.'
    };
  }
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  const { password } = validatedFields.data;
  const hashedPassword = await hash(password, 12);
  try {
    await prisma.user.update({
      where: { id: userId },
      data: {
        password: hashedPassword
      }
    });
    revalidatePath('/admin/account');
    return {
      errors: null,
      message: 'Password changed successfully.'
    };
  } catch (e) {
    console.error(e);
    return { message: 'Something went wrong. Please try again later.' };
  }
}

/* Articles */

export async function createArticle(
  createArticleData: Partial<Prisma.ArticleCreateInput>,
  categoryIds: number[]
) {
  try {
    if (createArticleData.title === '') {
      return {
        status: 'error',
        message: 'Please enter your title.'
      };
    }
    //if categoryIds is empty, add 0 to it
    if (!categoryIds.includes(0)) {
      categoryIds.push(0);
    }

    const createdArticle = await prisma.article.create({
      data: {
        ...createArticleData,
        title: createArticleData.title?.toString() || '', // Ensure title is always a string
        description: createArticleData.description?.toString() || '', // Ensure description is always a string
        URL: createArticleData.URL?.toString() || '', // Ensure URL is always a string
        categories: {
          create: categoryIds.map(id => ({
            categoryId: id
          }))
        }
      }
    });

    revalidatePath('/admin/articles');
    revalidatePath('/blog');
    return {
      status: 'success',
      data: createdArticle,
      message: 'Article created successfully.'
    };
  } catch (e: any) {
    if (e && e.code === 'P2002') {
      return {
        status: 'error',
        message: 'Article with this URL or Title already exists.'
      };
    } else {
      console.error(e);
      return {
        status: 'error',
        message: 'Failed to create Article.'
      };
    }
  }
}

export async function deleteArticle(id: number) {
  try {
    const article = await prisma.article.findUnique({ where: { id } });
    if (!article) {
      return {
        errors: 'Article not found.'
      };
    }

    // Then delete the article
    await prisma.articleCategory.deleteMany({
      where: { articleId: id }
    });

    await prisma.article.delete({
      where: { id: id }
    });

    revalidatePath('/admin/articles');
    revalidatePath('/blog');
    return {
      errors: null,
      message: 'success'
    };
  } catch (e) {
    console.error((e as Error).message);
    return { errors: 'Something went wrong. Please try again later.' };
  }
}
export async function updateArticle(
  id: number,
  updateData: Partial<Prisma.ArticleUncheckedUpdateInput>,
  categoryIds: number[]
) {
  try {
    const originalArticle = await prisma.article.findUnique({
      where: { id: id }
    });

    //if categoryIds is empty, add 0 to it
    if (!categoryIds.includes(0)) {
      categoryIds.push(0);
    }

    const updatedArticle = await prisma.article.update({
      where: { id: id },
      data: {
        ...updateData,
        categories: {
          deleteMany: {}, // delete all existing categories
          create: categoryIds.map(categoryId => ({ categoryId })) // create new categories
        }
      }
    });

    revalidatePath('/admin/articles');
    revalidatePath('/blog');

    return {
      status: 'success',
      data: updatedArticle,
      message: 'Article updated successfully.'
    };
  } catch (e) {
    console.error(e);
    return {
      status: 'error',
      message: 'Something went wrong. Please try again later.'
    };
  }
}

export async function updateArticleStatus(
  id: number,
  updateData: Partial<Prisma.ArticleUncheckedUpdateInput>
) {
  try {
    const updatedArticle = await prisma.article.update({
      where: { id: id },
      data: updateData
    });

    revalidatePath('/admin/articles');
    revalidatePath('/blog');

    return {
      status: 'success',
      data: updatedArticle,
      message: 'Article updated successfully.'
    };
  } catch (e) {
    console.error(e);
    return {
      status: 'error',
      message: 'Something went wrong. Please try again later.'
    };
  }
}

/* Categories */

export async function createCategory(
  createCategoryData: Partial<Prisma.CategoryUncheckedCreateInput>
) {
  try {
    if (createCategoryData.name === '') {
      return {
        status: 'error',
        message: 'Please enter your category name.'
      };
    }
    const createdCategory = await prisma.category.create({
      data: {
        ...createCategoryData,
        name: createCategoryData.name?.toString() || '', // Ensure name is always a string
        link: createCategoryData.link?.toString() || '' // Ensure link is always a string
      }
    });

    revalidatePath('/admin/categories');
    revalidatePath('/blog');
    return {
      status: 'success',
      data: createdCategory,
      message: 'Category created successfully.'
    };
  } catch (e: any) {
    if (e && e.code === 'P2002') {
      return {
        status: 'error',
        message: 'Category with this name or link already exists.'
      };
    } else {
      console.error(e);
      return {
        status: 'error',
        message: 'Failed to create Category.'
      };
    }
  }
}

export async function deleteCategory(id: number) {
  try {
    const category = await prisma.category.findUnique({ where: { id } });
    if (!category) {
      return {
        errors: 'Category not found.'
      };
    }

    // First update all articles that reference the category
    await prisma.articleCategory.deleteMany({
      where: { categoryId: id }
    });

    // Then delete the category
    await prisma.category.delete({
      where: { id: id }
    });

    revalidatePath('/admin/categories');
    revalidatePath('/blog');
    return {
      errors: null,
      message: 'success'
    };
  } catch (e) {
    console.error((e as Error).message);
    return { errors: 'Something went wrong. Please try again later.' };
  }
}

export async function updateCategory(
  id: number,
  updateData: Partial<Prisma.CategoryUncheckedUpdateInput>
) {
  try {
    const originalCategory = await prisma.category.findUnique({
      where: { id: id }
    });

    const updatedCategory = await prisma.category.update({
      where: { id: id },
      data: updateData
    });

    revalidatePath('/admin/categories');
    revalidatePath('/blog');
    return {
      status: 'success',
      data: updatedCategory,
      message: 'Category updated successfully.'
    };
  } catch (e) {
    console.error(e);
    return {
      status: 'error',
      message: 'Something went wrong. Please try again later.'
    };
  }
}
