import { create } from "zustand";

interface useCustomerModal {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export const useCustomerModal = create<useCustomerModal>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true}),
    onClose: () => set({ isOpen: false}),
}));