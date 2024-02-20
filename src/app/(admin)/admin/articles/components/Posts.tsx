'use client';

import { Article } from '@prisma/client';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import LoadingSpinner from '../../../loading';
import Link from 'next/link';
import { deleteArticle, updateArticle } from '@/app/services/actions';
const STATUSES = ['Draft', 'Publish'];

function Posts({ posts }: { posts: Article[] }) {
  const [postsList, setPostsList] = useState<Article[]>(posts);
  const [loading, setLoading] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [openCategoryDropdown, setOpenCategoryDropdown] = useState<
    number | null
  >(null);
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleSortClick = (field: keyof Article) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(String(field));
      setSortDirection('asc');
    }

    const sortedPosts = [...postsList].sort((a, b) => {
      if (sortDirection === 'asc') {
        return a[field]! > b[field]! ? 1 : -1;
      } else {
        return a[field]! < b[field]! ? 1 : -1;
      }
    });

    setPostsList(sortedPosts);
  };

  useEffect(() => {
    setPostsList(posts);
  }, [posts]);
  const handleUpdate = async (
    index: number,
    field: 'status' | 'categoryId',
    newValue: string | number
  ) => {
    setLoading(true);
    // Update the local state
    (posts[index] as any)[field] = newValue;

    // Close the dropdown
    if (field === 'status') {
      setOpenDropdown(null);
    } else if (field === 'categoryId') {
      setOpenCategoryDropdown(null);
    }

    // Update the database
    try {
      await updateArticle(posts[index].id, { [field]: newValue });
      toast.success(
        `${field.charAt(0).toUpperCase() + field.slice(1)} updated!`
      );
    } catch (e: any) {
      toast.error(e.data);
    }

    setLoading(false);
  };

  const handleDelete = async (id: number) => {
    await deleteArticle(id)
      .then(e => {
        if (e.message === 'success') toast.success('Post deleted!');
        else toast.error(e.errors as string);

        console.log(e);
      })
      .catch(e => {
        console.log(e);
        toast.error(e.data);
      });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const targetElement = event.target as Element;

      if (
        (openDropdown !== null || openCategoryDropdown !== null) &&
        !targetElement.closest('.dropdown')
      ) {
        setOpenDropdown(null);
        setOpenCategoryDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown, openCategoryDropdown]);

  const th_style = 'py-4 px-4 text-left text-sm font-bold';
  const td_style = 'py-4 px-4 relative';
  return (
    <div className="min-h-[600px]">
      {postsList.length === 0 ? (
        <div className="flex items-center justify-center">
          <p className="text-2xl">No Posts Found</p>
        </div>
      ) : (
        <table className="min-w-full bg-[#F9F9F9] rounded-lg mt-10 text-black">
          {loading ? (
            <LoadingSpinner />
          ) : (
            <>
              <thead>
                <tr>
                  <th
                    className={`${th_style} cursor-pointer`}
                    onClick={() => handleSortClick('title')}
                  >
                    Title
                    {sortField === 'title' &&
                      (sortDirection === 'asc' ? '↑' : '↓')}
                  </th>
                  <th
                    className={`${th_style} cursor-pointer`}
                    onClick={() => handleSortClick('status')}
                  >
                    Status
                    {sortField === 'status' &&
                      (sortDirection === 'asc' ? '↑' : '↓')}
                  </th>
                  <th
                    className={`${th_style} cursor-pointer`}
                    onClick={() => handleSortClick('date')}
                  >
                    Date
                    {sortField === 'date' &&
                      (sortDirection === 'asc' ? '↑' : '↓')}
                  </th>

                  <th className={th_style}>Edit</th>
                </tr>
              </thead>

              <tbody>
                {postsList.map((post, index) => (
                  <motion.tr
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    key={index}
                    className="border-b-2 border-bt-forest-green last:border-b-0"
                  >
                    <td className={td_style}>{post.title}</td>
                    <td className={td_style}>
                      <span
                        className="cursor-pointer hover:underline"
                        onClick={() => setOpenDropdown(index)}
                      >
                        {post.status}
                      </span>
                      <DropdownMenu
                        items={STATUSES}
                        selectedItem={post.status}
                        onItemSelected={status =>
                          handleUpdate(index, 'status', status)
                        }
                        isOpen={openDropdown === index}
                      />
                    </td>
                    <td className={`${td_style} whitespace-nowrap`}>
                      {new Date(post.date)
                        .toLocaleDateString()
                        .split('/')
                        .join('-')}
                    </td>

                    <td
                      className={`${td_style} whitespace-nowrap flex items-center`}
                    >
                      <Link
                        href={`/admin/articles/${post.URL}`}
                        className="text-bt-forest-green hover:underline px-2 hover:scale-105 active:scale-95 w-fit h-fit flex justify-center items-center"
                      >
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
                      </Link>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-bt-forest-green hover:underline px-2"
                        onClick={() => handleDelete(post.id)}
                      >
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
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </motion.button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </>
          )}
        </table>
      )}
    </div>
  );
}

export default Posts;

type DropdownProps = {
  items: string[];
  selectedItem: string | number;
  onItemSelected: (item: string | number) => void;
  isOpen: boolean;
};

const DropdownMenu: React.FC<DropdownProps> = ({
  items,
  selectedItem,
  onItemSelected,
  isOpen
}) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="absolute dropdown top-full left-0 w-32 bg-white border border-bt-forest-green rounded shadow-md z-10"
    >
      <div className="w-3 h-3 absolute top-0 left-1/3 transform -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white border-t border-l border-bt-forest-green"></div>
      <div className="max-h-64 overflow-y-auto overflow-x-hidden">
        {items.map((item, index) => (
          <motion.div
            key={item}
            className="cursor-pointer p-2"
            onClick={() => onItemSelected(item)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {item}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
