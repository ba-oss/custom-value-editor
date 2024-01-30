import { NodeViewContent, NodeViewWrapper, NodeViewProps } from "@tiptap/react";
import { XIcon } from "lucide-react";

const TagValue = ({ deleteNode }: NodeViewProps) => {
  return (
    <NodeViewWrapper
      className="rounded-full mx-1 my-1 inline-flex py-0.5 px-2 cursor-default border hover:bg-gray-50 transition-all gap-1.5 flex-wrap"
      as="span"
    >
      <NodeViewContent
        as="span"
        className="font-medium"
        contentEditable={false}
      />

      <button
        onClick={deleteNode}
        contentEditable={false}
        className=" transition-all h-7 flex items-center justify-center group "
      >
        <XIcon className="w-4 h-4 text-red-600 group-hover:text-red-400 transition-all" />
      </button>
    </NodeViewWrapper>
  );
};

export { TagValue };
