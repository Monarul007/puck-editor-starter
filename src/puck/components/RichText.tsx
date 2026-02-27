import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { generateHTML } from "@tiptap/html";
import DOMPurify from "dompurify";

export interface RichTextProps {
  content: any; // Now stores Tiptap JSON
  editMode?: boolean;
  onChange?: (value: any) => void;
}

const extensions = [StarterKit];

export const RichText: React.FC<RichTextProps> = ({
  content,
  editMode = false,
  onChange,
}) => {
  const editor = useEditor({
    extensions,
    content,
    editable: editMode,
    onUpdate: ({ editor }) => {
      if (onChange) {
        onChange(editor.getJSON());
      }
    },
  });

  // Keep editor content in sync with external content prop
  React.useEffect(() => {
    if (editor && JSON.stringify(content) !== JSON.stringify(editor.getJSON())) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  if (!editMode || !editor) {
    const html = content ? generateHTML(content, extensions) : "";
    const sanitizedHtml = DOMPurify.sanitize(html);
    return (
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
      />
    );
  }

  return (
    <div className="border rounded p-2 bg-white min-h-[100px]">
      <EditorContent editor={editor} />
    </div>
  );
};
