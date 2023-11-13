import { IconButton, Tooltip, useDisclosure } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import ViewNameModal from "./ViewNameModal";

const ViewNames = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <>
      <Tooltip hasArrow label="View owned names" placement="top" p={2}>
        <Button isOpen={isOpen} onOpen={onOpen} />
      </Tooltip>
      <ViewNameModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

const Button = ({
  isOpen,
  onOpen,
}: {
  isOpen: boolean;
  onOpen: () => void;
}) => {
  if (isOpen) {
    return (
      <IconButton
        icon={<ViewOffIcon />}
        aria-label="View Names"
        variant="ghost"
        // onClick={onClose}
      />
    );
  }

  return (
    <IconButton
      icon={<ViewIcon />}
      aria-label="View Names"
      variant="ghost"
      onClick={onOpen}
    />
  );
};

export default ViewNames;
