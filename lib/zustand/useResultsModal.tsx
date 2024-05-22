import { create } from 'zustand';

type Store = {
  isOpen: boolean;
  onOpen: (info: { title: string; ref: string; fileExt: string }) => void;
  onClose: () => void;
  info: {
    title: string;
    ref: string;
    fileExt: string;
  };
};

export const useResultModal = create<Store>((set) => ({
  isOpen: false,
  info: {
    title: '',
    ref: '',
    fileExt: '',
  },
  onOpen: ({
    title,
    ref,
    fileExt,
  }: {
    title: string;
    ref: string;
    fileExt: string;
  }) => {
    set({ isOpen: true, info: { title, ref, fileExt } });
  },
  onClose: () => set({ isOpen: false }),
}));
