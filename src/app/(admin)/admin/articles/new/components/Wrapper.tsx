'use client';

import { Editor } from '@/components/UI/Editor/TextEditor';
import { Button } from '@/components/UI/button';
import { createArticle } from '@/services/actions';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/UI/select';
import { _siteUrl } from '@/utils/constants';
import slugify from '@/utils/slugify';
import { Category } from '@prisma/client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function Wrapper({ Categories }: { Categories: Category[] }) {
  const router = useRouter();

  const [title, setTitle] = useState('');

  const [openDropdown, setOpenDropdown] = useState(false);
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [categories, setCategories] = React.useState([0]);
  const [excerpt, setExcerpt] = useState('');
  const [slug, setSlug] = useState('');
  const [URL, setURL] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [status, setStatus] = useState('Draft');
  const [loadingImage, setLoadingImage] = useState(false);
  const [editor, setEditor] = useState<string>('');
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLoadingImage(true);
      const formData = new FormData();
      formData.append('image', file);

      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData
        });
        const data = await response.json();
        if (data.success) {
          setImageURL(data.file.url);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error('Error uploading the image:', error);
      } finally {
        setLoadingImage(false);
      }
    }
  };
  const handleDateChange = (e: any) => {
    setSelectedDate(new Date(e.target.value));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const targetElement = event.target as Element;

      if (openDropdown !== null && !targetElement.closest('.dropdown')) {
        setOpenDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown]);
  useEffect(() => {
    const mainSlug = slug ? slug : title;
    const parseURL = slugify(mainSlug);
    setURL(parseURL);
  }, [URL, slug, title]);

  useEffect(() => {
    if (Categories && Categories.length > 0) {
      setCategories([Categories.find(cat => cat.id === 0)?.id || 0]);
    }
  }, [Categories]);

  const handleSave = async () => {
    if (!title) {
      return toast.error('Title is required!');
    }

    try {
      const createArticleData = {
        title,
        description: editor,
        image: imageURL,
        excerpt,
        URL,

        date: selectedDate,
        status
      };

      const res = await createArticle(createArticleData, categories);

      console.log(res);

      if (res.status === 'success') {
        toast.success('Article created!');
        router.push('/admin/articles');
      } else if (res.status === 'error') {
        toast.error('Something went wrong!');
        toast.error(res.message);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        toast.error(error.message || 'Something went wrong!');
      } else {
        toast.error('Something went wrong!');
      }
    }
  };

  return (
    <>
      <section className="py-10 ">
        <div className="container">
          <input
            type="text"
            className="h1 mb-3 w-full outline-none  bg-transparent border-0 appearance-none focus:outline-none focus:ring-0  peer"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <div className="bg-stone-50 rounded-[20px] md:flex text-black">
            <div className="relative py-10 px-4 w-full">
              <Editor
                onSave={e => {
                  setEditor(e);
                }}
                initialValue=""
              />
            </div>
            <div className="py-10 px-4 border-l-4 border-bt-forest-green w-full md:max-w-[25%]">
              <div className="mb-8">
                <label htmlFor="articleDate font-normal text-2xl">Date</label>
                <hr className="w-[60px] h-[4px] bg-black mt-1 mb-3" />

                <input
                  type="date"
                  id="articleDate"
                  name="articleDate"
                  className="w-full outline-none bg-transparent MasqualeroBold border-b-2 border-black appearance-none focus:outline-none focus:ring-0 peer"
                  value={
                    selectedDate instanceof Date
                      ? selectedDate.toISOString().slice(0, 10)
                      : ''
                  }
                  onChange={handleDateChange}
                />
              </div>

              <div className="mb-8">
                <label htmlFor="articleDate font-normal text-2xl">Image</label>
                <hr className="w-[60px] h-[4px] bg-black mt-1 mb-3" />
                {loadingImage ? (
                  <div className="relative">
                   " Loading..."
                  </div>
                ) : (
                  <div className="relative">
                    <input
                      type="file"
                      id="imageUpload"
                      style={{ display: 'none' }}
                      onChange={handleImageUpload}
                      accept="image/*"
                    />

                    {imageURL ? (
                      <Image
                        src={imageURL}
                        alt="Uploaded"
                        className="cursor-pointer"
                        onClick={() =>
                          document.getElementById('imageUpload')?.click()
                        }
                        width={256}
                        height={256}
                      />
                    ) : (
                      <div
                        className="bg-gray-200 h-64 flex items-center justify-center cursor-pointer w-full hover:bg-gray-300 duration-500"
                        onClick={() =>
                          document.getElementById('imageUpload')?.click()
                        }
                      >
                        <span>Click to upload image</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="mb-8">
                <label htmlFor="articleDate font-normal text-2xl">
                  Excerpt
                </label>
                <hr className="w-[60px] h-[4px] bg-black mt-1 mb-3" />

                <textarea
                  className="w-full outline-none h-32 p-2 bg-transparent resize-none MasqualeroBold border-2 border-black appearance-none focus:outline-none focus:ring-0 peer"
                  placeholder="Type here..."
                  value={excerpt}
                  onChange={e => setExcerpt(e.target.value)}
                />
              </div>
              {Categories && Categories.length > 0 && (
                <div className="mb-8">
                  <label htmlFor="category">Category</label>
                  <hr className="w-[60px] h-[4px] bg-black mt-1 mb-3" />
                  <div className="flex flex-wrap items-center gap-4">
                    {categories.map((category, index) => (
                      <div
                        key={index}
                        className="px-2 py-1 bg-gray-200 rounded-full text-sm relative group"
                      >
                        {Categories.find(cat => cat.id === category)?.name}
                        {category !== 0 && (
                          <span
                            className="absolute w-full h-full top-0 right-0  bg-red/70 text-white rounded-full  items-center justify-center cursor-pointer hidden group-hover:flex transition-all
                        duration-300"
                            onClick={() => {
                              setCategories(
                                categories.filter(cat => cat !== category)
                              );
                            }}
                          >
                            X
                          </span>
                        )}
                      </div>
                    ))}
                    <Button
                      onClick={() => setIsSelectOpen(true)}
                      className="w-8 h-8 flex p-0 justify-center items-center   rounded-full text-sm"
                    >
                      +
                    </Button>
                    {isSelectOpen && (
                      <Select
                        onValueChange={values => {
                          setCategories([...categories, parseInt(values)]);
                          setIsSelectOpen(false);
                        }}
                        name="categories"
                      >
                        <SelectTrigger className="w-full text-black outline-none">
                          <SelectValue placeholder="Categories" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {Categories.map((category, index) => (
                              <SelectItem
                                key={index}
                                value={category.id.toString()}
                                disabled={categories.includes(category.id)}
                              >
                                {category.name}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    )}
                  </div>
                </div>
              )}
              <div className="mb-8">
                <label htmlFor="slug">SLUG</label>
                <hr className="w-[60px] h-[4px] bg-black mt-1 mb-3" />

                <input
                  type="text"
                  name="slug"
                  className="w-full outline-none h-10 p-2 bg-transparent resize-none MasqualeroBold border-b-2 border-black appearance-none focus:outline-none focus:ring-0 peer"
                  placeholder="Type here..."
                  value={slug}
                  onChange={e => setSlug(e.target.value)}
                />
              </div>
              {URL && (
                <div className="mb-8">
                  <label htmlFor="articleDate font-normal text-2xl">URL</label>
                  <hr className="w-[60px] h-[4px] bg-black mt-1 mb-3" />

                  <div className="flex flex-col gap-4">
                    {categories.length > 0 &&
                      Categories.length > 0 &&
                      categories.map((cat, index) => {
                        return (
                          <div
                            key={index}
                            className="w-full block overflow-auto outline-none h-auto p-2 bg-transparent resize-none MasqualeroBold border-2 border-black appearance-none focus:outline-none focus:ring-0 peer"
                            style={{ overflowWrap: 'break-word' }}
                          >
                            {_siteUrl}/blog/
                            {Categories.find(c => c.id === cat)?.name
                              ? slugify(
                                  Categories.find(c => c.id === cat)!.name
                                ) + '/'
                              : ''}
                            {URL}
                          </div>
                        );
                      })}
                  </div>
                </div>
              )}

              <div className="mt-8">
                <div className="flex flex-col">
                  <label className="relative inline-flex items-center mb-5 cursor-pointer">
                    <input
                      type="checkbox"
                      name="status"
                      value="Publish"
                      className="sr-only peer"
                      checked={status === 'Publish'}
                      onChange={() => setStatus('Publish')}
                    />

                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-goGreen-green"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900">
                      Publish
                    </span>
                  </label>

                  <label className="relative inline-flex items-center mb-5 cursor-pointer">
                    <input
                      type="checkbox"
                      name="status"
                      value="Draft"
                      className="sr-only peer"
                      checked={status === 'Draft'}
                      onChange={() => setStatus('Draft')}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-goGreen-green"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900">
                      Draft
                    </span>
                  </label>
                </div>

                <Button
                  aial-label="Save Post"
                  onClick={handleSave}
                  className="mb-4 w-full mt-10 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Save
                </Button>

                <Button
                  aial-label="Cancel Post"
                  variant="outline"
                  onClick={() => router.push('/admin/articles')}
                  className="my-4 w-full"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Wrapper;
