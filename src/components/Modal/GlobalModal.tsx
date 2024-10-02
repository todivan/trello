import React, { useState, createContext, useContext, ReactNode } from 'react';

interface ModalStore {
    title: string
    content: null | ReactNode
    buttonTitle: string
}

interface GlobalModalContextProps {
    store: ModalStore
}

interface GlobalModalContextActionsProps {
    showModal: (modalProps: ModalStore) => void
    hideModal: () => void
}

const initalState: GlobalModalContextProps = {
    store: {
        title: '',
        content: null,
        buttonTitle: ''
    }
};

const initalStateActions: GlobalModalContextActionsProps = {
    showModal: () => {},
    hideModal: () => {}
};

const GlobalModalContext = createContext(initalState);
const GlobalModalActionsContext = createContext(initalStateActions);
export const useGlobalModalContext = () => useContext(GlobalModalContext);
export const useGlobalModalActionsContext = () => useContext(GlobalModalActionsContext);

export const GlobalModal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [store, setStore] = useState({
        title: '',
        content: null as null | ReactNode,
        buttonTitle: ''
    });

    const showModal = (modalProps: ModalStore) => {
        setStore((prevStore: ModalStore) => {
            return {
                ...prevStore,
                ...modalProps
            };
        });
    };

    const hideModal = () => {
        setStore((prevStore) => {
            return {
                ...prevStore,
                modalProps: {}
            };
        });
    };

    return (
        <GlobalModalActionsContext.Provider value={{ showModal, hideModal }}>
            <GlobalModalContext.Provider value={{ store }}>
                {children}
                {store.content}
            </GlobalModalContext.Provider>
        </GlobalModalActionsContext.Provider>
    );
};
