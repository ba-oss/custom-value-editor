import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TagValueExtension } from "./extension";
import { BoldIcon, ItalicIcon, LayersIcon, MailIcon } from "lucide-react";
import { Button } from "../button";

type Props = {
  email: string;
  name: string;
};

const LOCALE_STORAGE_KEY = "__DATA";

function Editor({ name, email }: Props) {
  const editor = useEditor({
    extensions: [StarterKit, TagValueExtension],
    content: localStorage.getItem(LOCALE_STORAGE_KEY) ?? "Hellow World!",
    onUpdate({ editor }) {
      localStorage.setItem(LOCALE_STORAGE_KEY, editor.getHTML());
    },
  });

  // wait for editor to inialize
  if (!editor) return null;

  const onBold = () => void editor.chain().focus().toggleBold().run();
  const onItalic = () => void editor.chain().focus().toggleItalic().run();
  const onNameInsertion = () =>
    void editor
      .chain()
      .focus()
      .insertContent(`<tag-value>${name}</tag-value> `)
      .run();
  const onEmailInsertion = () =>
    void editor
      .chain()
      .focus()
      .insertContent(`<tag-value>${email}</tag-value> `)
      .run();

  return (
    <>
      {/* actions bar */}
      <div className="max-w-[90vw] flex-wrap w-[768px] mx-auto flex gap-3">
        <Button
          variant="icon"
          onClick={onBold}
          active={editor.isActive("bold")}
        >
          <BoldIcon className="w-5 text-gray-500" />
        </Button>
        <Button
          variant="icon"
          onClick={onItalic}
          active={editor.isActive("italic")}
        >
          <ItalicIcon className="w-5 text-gray-500" />
        </Button>
        <Button variant="primary" onClick={onNameInsertion}>
          <LayersIcon className="w-5 text-gray-200" />
          {name}
        </Button>
        <Button variant="primary" onClick={onEmailInsertion}>
          <MailIcon className="w-5 text-gray-200" />
          {email}
        </Button>
      </div>

      {/* main editor content */}
      <EditorContent placeholder="Start typing" editor={editor} />
    </>
  );
}

export { Editor };
