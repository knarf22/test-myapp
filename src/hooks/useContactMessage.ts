import { useState } from "react";
import type { ContactMessage } from "../types/contact_form";
import { getContactMessages, createContactMessage, updateContactMessage } from "../services/contactMessageService";

export function useContactMessage() {
  const [loading, setLoading] = useState(false);

  const fetchContactMessages = async (): Promise<ContactMessage[]> => {
    setLoading(true);
    try {
      return await getContactMessages();
    } finally {
      setLoading(false);
    }
  };

  const addContactMessage = async (contactMsg: ContactMessage): Promise<void> => {
    setLoading(true);
    try {
      return await createContactMessage(contactMsg);
    } finally {
      setLoading(false);
    }
  };

  const editContactMessage = async (id: number, status: string): Promise<void> => {
    setLoading(true);
    try {
      await updateContactMessage(id, status);
    } finally {
      setLoading(false);
    }
  };

  return {
    fetchContactMessages,
    addContactMessage,
    editContactMessage,
    loading,
  };
}
