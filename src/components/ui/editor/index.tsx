'use client'

import TextAlign from '@tiptap/extension-text-align'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useEffect } from 'react'
import { cn } from '@/lib/utils'
import { MenuBar } from './menu-bar'

type EditorProps = {
  value: string
  onChange?: (value: string) => void
  className?: string
}

export const Editor = ({ value, onChange, className }: EditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: 'list-disc pl-4',
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: 'list-decimal pl-4',
          },
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: value,
    editorProps: {
      attributes: {
        class: 'focus:outline-none h-full p-4',
      },
    },
    onCreate({ editor }) {
      onChange?.(editor.getHTML())
    },
    onUpdate({ editor }) {
      onChange?.(editor.getHTML())
    },
    autofocus: false,
    immediatelyRender: false,
  })

  useEffect(() => {
    const editorHTML = editor?.getHTML()

    if (editorHTML !== value) {
      setTimeout(() => {
        editor?.commands.setContent(value)
      }, 0)
    }
  }, [value, editor?.commands.setContent, editor?.getHTML])

  return (
    <div className={cn('flex w-full flex-col rounded-2xl border border-muted bg-background', className)}>
      <MenuBar editor={editor} />
      <div className="flex h-full flex-col overflow-y-auto [&>div]:h-full">
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}
