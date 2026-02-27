import DOMPurify from "dompurify";

export const tiptapJsonToHtml = (json: any) => {
  // In a real app with Tiptap, you'd use generateHTML(json, extensions)
  // For simplicity here, we'll assume we store HTML or handle conversion.
  return DOMPurify.sanitize(json);
};
