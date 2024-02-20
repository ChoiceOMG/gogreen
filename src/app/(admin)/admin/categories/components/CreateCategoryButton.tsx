'use client';
import { createCategory } from '@/app/services/actions';
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
import slugify from '@/utils/slugify';

import React, { useEffect } from 'react';

import { toast } from 'react-toastify';

export function CreateCategoryButton() {
  const [open, setOpen] = React.useState(false);
  const [link, setLink] = React.useState('' as string);
  const [name, setName] = React.useState('' as string);

  useEffect(() => {
    setLink(slugify(name));
  }, [name]);

  const handleCreateCategory = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const res = await createCategory({ name: name, link: slugify(link) });

    if (res.status === 'success') {
      toast.success('Category created!');
      setName('');
      setLink('');
      setOpen(false);
      //close the dialog
    } else {
      toast.error(res.message as string);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Create Category</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogTitle>New Category</DialogTitle>
        <DialogDescription>
          Enter the name of the new category you want to create
        </DialogDescription>
        <form
          onSubmit={handleCreateCategory}
          className="flex flex-col space-y-4"
        >
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
            <Button type="submit">Create</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
