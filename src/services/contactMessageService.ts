import { create, get, update } from "../api/contactMessageAPI";
import type { ContactMessage } from "../types/contact_form";

export async function getContactMessages(): Promise<ContactMessage[]> {
  return await get();
}

export async function createContactMessage(contactMessage: ContactMessage): Promise<void> {
  await create(contactMessage);
}

export async function updateContactMessage(id: number, status: string): Promise<void> {
  await update(id, status);
}
