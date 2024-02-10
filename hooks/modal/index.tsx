"use client"
import Modal from '@/sections/utils/modal';
import ModalContainer from '@/sections/utils/modal-container';
import React, { SetStateAction, createContext, useContext, useState } from 'react';

export type Modal = {
    title?: string;
    subTitle?: string;
    type: 'switch' | 'normal' | '';
    variant?: 'wallet' | 'buy' | '';
};

type ModalContextType = {
    modal: Modal;
    setModal: React.Dispatch<React.SetStateAction<Modal>>;
};

export const ModalContext = createContext<ModalContextType>({
    modal: { title: '', subTitle: '', type: '', variant: ''},
    setModal: () => { },
});

export const ModalProvider = ({ children }: any) => {
    const [modal, setModal] = useState<Modal>({ title: '', variant: '', subTitle: '', type: '',});

    return (
        <ModalContext.Provider value={{ modal, setModal }}>
            <ModalContainer modal={modal} />
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);
