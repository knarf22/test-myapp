import axios from "axios";
import type { ContactMessage } from "../types/contact_form";
import { API_ROUTES, API_URL } from "../constants/apiRoutes";


export async function get(): Promise<ContactMessage[]> {
    const res = await axios.get<ContactMessage[]>(`${API_URL}${API_ROUTES.GET_CONTACT_MSG}`);
    return res.data;
}

export async function create(contact: ContactMessage): Promise<void> {
   await axios.post<ContactMessage>(`${API_URL}${API_ROUTES.CREATE_CONTACT_MSG}`, contact);
}

export async function update(id: number, status: string): Promise<void> {
    await axios.put(`${API_URL}${API_ROUTES.UPDATE_CONTACT_MSG(id)}`,  JSON.stringify(status), // wrap in JSON
    {
      headers: {
        "Content-Type": "application/json",
      },
    })

}