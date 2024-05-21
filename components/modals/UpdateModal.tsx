import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { RegisterForm } from '../ui/form/RegisterForm';
import { useUpdateForm } from '@/lib/zustand/useUpdateForm';
import { UpdateForm } from '../ui/form/UpdateForm';

type Props = {};

export const UpdateModal = ({}: Props): JSX.Element => {
  const { isOpen, onClose } = useUpdateForm();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#009a51] text-center">
            {'Update'}
          </DialogTitle>
          <DialogDescription className="text-center font-semibold text-black">
            {'Fill the form below to update your profile'}
          </DialogDescription>
          <UpdateForm />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
