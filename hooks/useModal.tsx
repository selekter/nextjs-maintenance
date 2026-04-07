"use client";

import { useState } from "react";

export const useModal = <T = any,>() => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<T | null>(null);

  const openModal = (payload: T | null = null) => {
    (setData(payload), setIsOpen(true));
  };
  const closeModal = () => {
    (setData(null), setIsOpen(false));
  };
  const toggleModal = () => setIsOpen(!isOpen);

  return {
    isOpen,
    data,
    openModal,
    closeModal,
    toggleModal,
  };
};
