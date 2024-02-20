'use client';

import '@/styles/editor.scss';

import Highlight from '@tiptap/extension-highlight';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import TaskList from '@tiptap/extension-task-list';
import { TextAlign } from '@tiptap/extension-text-align';
import { Typography } from '@tiptap/extension-typography';
import Youtube from '@tiptap/extension-youtube';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect, useState } from 'react';

import { CustomTaskItem } from './CustomTaskItem';
import { SelectionMenu } from './SelectionMenu';
import { Toolbar } from './Toolbar';
import axios from 'axios';
import { Loader } from './LoaderEditor';
import ResizableImageExtension from './UI/plugins/resize-image';
import { Button } from './UI/primitives/Button';
import Preview from './Preview';

type Props = {
  onSave: (data: string) => void;
  initialValue?: string;
};

const uploadImage = async (file: string | Blob) => {
  if (file) {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        console.log(data.file.url);
        return data.file.url;
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error uploading the image:', error);
    }
  }
};
export function Editor({ onSave, initialValue }: Props) {
  // Get user info from Liveblocks authentication endpoint
  const [loading, setLoading] = useState(false);
  const [contentHTML, setContentHTML] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  // Set up editor with plugins, and place user info into Yjs awareness and cursors
  const editor = useEditor({
    editable: true,
    editorProps: {
      attributes: {
        // Add styles to editor element
        class: 'editor'
      },
      handleDrop: function (view, event, slice, moved) {
        if (
          !moved &&
          event.dataTransfer &&
          event.dataTransfer.files &&
          event.dataTransfer.files.length
        ) {
          const file = event.dataTransfer.files[0];

          setLoading(true); // Начало загрузки, показать лоадер
          uploadImage(file as File)
            .then(function (response) {
              const url = response; // URL загруженного изображения
              const coordinates = view.posAtCoords({
                left: event.clientX,
                top: event.clientY
              });

              if (coordinates) {
                const { schema } = view.state;
                const imageNode = schema.nodes.image;
                const node = imageNode.create({ src: url });
                const transaction = view.state.tr.insert(coordinates.pos, node);
                view.dispatch(transaction);
              } else {
                console.error('Could not determine coordinates');
              }
            })
            .catch(function (error) {
              console.error('Error uploading image:', error);
              window.alert(
                'There was a problem uploading your image, please try again.'
              );
            })
            .finally(() => {
              setLoading(false); // Загрузка завершена, скрыть лоадер
            });
          return true;
        }
        return false;
      }
    },
    extensions: [
      StarterKit.configure({
        blockquote: {
          HTMLAttributes: {
            class: 'tiptap-blockquote'
          }
        },
        code: {
          HTMLAttributes: {
            class: 'tiptap-code'
          }
        },
        codeBlock: {
          languageClassPrefix: 'language-',
          HTMLAttributes: {
            class: 'tiptap-code-block',
            spellcheck: false
          }
        },
        heading: {
          levels: [1, 2, 3],
          HTMLAttributes: {
            class: `tiptap-heading`
          }
        },
        // The Collaboration extension comes with its own history handling
        history: false,
        horizontalRule: {
          HTMLAttributes: {
            class: 'tiptap-hr'
          }
        },
        listItem: {
          HTMLAttributes: {
            class: 'tiptap-list-item'
          }
        },
        orderedList: {
          HTMLAttributes: {
            class: 'tiptap-ordered-list'
          }
        },
        paragraph: {
          HTMLAttributes: {
            class: 'tiptap-paragraph'
          }
        }
      }),
      Highlight.configure({
        HTMLAttributes: {
          class: 'tiptap-highlight'
        }
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'tiptap-image'
        },
        inline: true,
        allowBase64: true
      }),

      ResizableImageExtension.configure({}),
      Link.configure({
        HTMLAttributes: {
          class: 'tiptap-link'
        }
      }),

      Placeholder.configure({
        placeholder: 'Start writing…',
        emptyEditorClass: 'tiptap-empty'
      }),
      CustomTaskItem,
      TaskList.configure({
        HTMLAttributes: {
          class: 'tiptap-task-list'
        }
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph']
      }),
      Typography,
      Youtube.configure({
        modestBranding: true,
        HTMLAttributes: {
          class: 'tiptap-youtube'
        }
      })
    ]
  });

  // Set initial content

  useEffect(() => {
    if (initialValue && editor) {
      setTimeout(() => {
        editor.commands.setContent(initialValue);
      }, 0);
    }
  }, [initialValue, editor]);

  const html = editor?.getHTML();
  useEffect(() => {
    if (html) onSave(html);
  }, [html]);

  // Function to toggle preview mode
  const togglePreview = () => {
    // If we're in preview mode, go back to edit mode
    if (showPreview) {
      setShowPreview(false);
    } else {
      // If we're in edit mode, go to preview mode
      if (html) {
        setContentHTML(html);
        setShowPreview(true);
      }
    }
  };

  return (
    <div className="relative">
      {!showPreview && (
        <>
          <div className="editorHeader">
            {editor && <Toolbar editor={editor} />}
          </div>
          <div className="editorPanel ">
            {editor && <SelectionMenu editor={editor} />}
            <EditorContent editor={editor} className="editorContainer" />
            {loading && <Loader />}
          </div>
        </>
      )}

      {showPreview && <Preview contentHTML={contentHTML} />}

      <Button onClick={togglePreview} className="my-5 ml-auto">
        {showPreview ? 'Go Back to Edit' : 'Read Mode'}
      </Button>
    </div>
  );
}
