'use client';
import { Button } from '@/components/UI/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogTitle,
    DialogTrigger
} from '@/components/UI/dialog';
import { Input } from '@/components/UI/input';
import { updateCategory } from '@/services/actions';
import slugify from '@/utils/slugify';
import { Category } from '@prisma/client';

import React, { useEffect } from 'react';

import { toast } from 'react-toastify';

export function EditCategoryButton({ category }: { category: Category }) {
  const [open, setOpen] = React.useState(false);
  const [link, setLink] = React.useState(category?.link || '');
  const [name, setName] = React.useState(category?.name || '');

  useEffect(() => {
    setLink(slugify(name));
  }, [name]);

  const handleEditCategory = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const res = await updateCategory(category.id, {
      name: name,
      link: slugify(link)
    });

    if (res.status === 'success') {
      toast.success('Category updated!');
      setOpen(false);
    } else {
      toast.error(res.message as string);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="hover:underline px-2 hover:scale-105 active:scale-95 w-fit h-fit flex justify-center items-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            />
          </svg>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogTitle>Edit Category</DialogTitle>
        <DialogDescription>
          Update the details of the category.
        </DialogDescription>
        <form onSubmit={handleEditCategory} className="flex flex-col space-y-4">
          <Input
            id="categoryName"
            required
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <Input
            id="categoryLink"
            value={link}
            readOnly
            required
            className=" read-only:bg-gray-100"
            placeholder="Link"
          />

          <DialogFooter className="sm:justify-end">
            <Button type="submit">Update</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
