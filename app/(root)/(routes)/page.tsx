"use client";

import { useCustomerModal } from "@/hooks/use-customer-modal";
import { useEffect } from "react";

const SetupPage = () => {
    const onOpen = useCustomerModal((state) => state.onOpen);
    const isOpen = useCustomerModal((state) => state.isOpen);

    useEffect(() => {
      if (!isOpen) {
        onOpen();
      }
    }, [isOpen, onOpen]);

    return null;
  }

export default SetupPage;
  