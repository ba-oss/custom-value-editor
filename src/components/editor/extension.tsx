import { mergeAttributes, Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { TagValue } from "./tag-value";

const TagValueExtension = Node.create({
  // make the custom component inline
  name: "tagValue",
  content: "inline*",
  inline: true,
  group: "inline",
  addNodeView() {
    return ReactNodeViewRenderer(TagValue, {
      contentDOMElementTag: "span",
    });
  },
  parseHTML() {
    return [
      {
        tag: "tag-value",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["tag-value", mergeAttributes(HTMLAttributes), 0];
  },
});

export { TagValueExtension };
