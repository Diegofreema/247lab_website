import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useResultModal } from '@/lib/zustand/useResultsModal';
import { Image } from '@chakra-ui/react';

type Props = {};

export const ResultModal = ({}: Props): JSX.Element => {
  const { isOpen, onClose, info } = useResultModal();

  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      {/* <DialogTrigger></DialogTrigger> */}
      <DialogContent className="md:w-[600px] w-[300px] h-[300px] md:h-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#009a51] text-center">
            {info.title}
          </DialogTitle>
          <DialogDescription className="text-center font-semibold text-black">
            <Image
              alt="image"
              src={`https://247laboratory.net/uploads/${info.ref}${info.fileExt}`}
              width={{ base: 300, md: 600 }}
              height={{ base: 300, md: '500px' }}
              objectFit={'fill'}
              fallbackSrc="/loading.gif"
            />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
