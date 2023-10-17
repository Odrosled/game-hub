import { Tag as ChakraTag } from "@chakra-ui/react";

export interface ITag {
  id: number;
  name: string;
}

interface TagProps {
  tag: ITag;
}

const Tag = ({ tag }: TagProps) => {
  return (
    <ChakraTag
      size={"md"}
      key={tag.id}
      borderRadius="full"
      variant="solid"
      backgroundColor="#121212"
      borderColor="white"
      borderWidth={1}
    >
      {tag.name}
    </ChakraTag>
  );
};

export default Tag;
