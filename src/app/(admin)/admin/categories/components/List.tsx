'use client';

import { Category } from '@prisma/client';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import LoadingSpinner from '../../../loading';
import Link from 'next/link';
import { deleteCategory } from '@/app/services/actions';
import { EditCategoryButton } from './EditCategoryButton';

function List({ categories }: { categories: Category[] }) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async (id: number) => {
    setLoading(true);
    await deleteCategory(id)
      .then(e => {
        if (e.message === 'success') toast.success('Post deleted!');
        else toast.error(e.errors as string);

        console.log(e);
      })
      .catch(e => {
        console.log(e);
        toast.error(e.data);
      });
    setLoading(false);
  };

  const th_style = 'py-4 px-4 text-left text-sm font-bold';
  const td_style = 'py-4 px-4 relative';
  return (
    <div className="min-h-[600px]">
      {categories.length === 0 ? (
        <div className="flex items-center justify-center">
          <p className="text-2xl">No Categories Found</p>
        </div>
      ) : (
        <table className="min-w-full bg-[#F9F9F9] rounded-lg mt-10 text-black">
          {loading ? (
            <LoadingSpinner />
          ) : (
            <>
              <thead>
                <tr>
                  <th className={`${th_style}`}>Title</th>

                  <th className={th_style}>Edit</th>
                </tr>
              </thead>

              <tbody>
                {categories.map((item, index) => (
                  <motion.tr
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    key={index}
                    className="border-b-2 border-bt-forest-green last:border-b-0"
                  >
                    <td className={td_style}>{item.name}</td>

                    <td
                      className={`${td_style} whitespace-nowrap flex items-center`}
                    >
                      {item.id !== 0 && (
                        <>
                          <EditCategoryButton category={item} />
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-bt-forest-green hover:underline px-2"
                            onClick={() => handleDelete(item.id)}
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
                        </>
                      )}
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

export default List;
