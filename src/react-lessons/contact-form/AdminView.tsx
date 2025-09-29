import { useEffect, useState } from "react";
import type { ContactMessage } from "../../types/contact_form";
import { useContactMessage } from "../../hooks/useContactMessage";

const statusColors: Record<string, string> = {
  Pending: "bg-red-200 text-orange-700",
  default: "bg-blue-200 text-blue-700",
  Done: "bg-green-200 text-green-700",
};

const statuses = ["New", "Pending", "Done"];

export function AdminContactTable() {

  const { editContactMessage, fetchContactMessages } = useContactMessage()
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [changedMessages, setChangedMessages] = useState<Record<number, string>>({});

  useEffect(() => {
    fetchContactMessages()
      .then((data) => setMessages(data))
      .catch((err) => console.error("Error fetching contact messages:", err));
  }, []);

  function handleStatusChange(id: number, newStatus: string) {
    setMessages((prev) =>
      prev.map((msg) => (msg.id === id ? { ...msg, status: newStatus } : msg))
    );
    setChangedMessages((prev) => ({ ...prev, [id]: newStatus }));
  }

  async function handleSave() {
    try {
      await Promise.all(
        Object.entries(changedMessages).map(([id, status]) =>
          editContactMessage(Number(id), status)
        )
      );
      alert("Changes saved!");
      setChangedMessages({});
    } catch (err) {
      console.error("Error saving updates:", err);
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin – Contact Messages</h1>

      <div className="overflow-x-auto rounded-lg shadow mb-6">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Name</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Email</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Message</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg) => (
              <tr key={msg.id} className="border-t hover:bg-gray-50">
                <td className="py-3 px-4 text-sm text-gray-800">{msg.name}</td>
                <td className="py-3 px-4 text-sm text-gray-600">{msg.email}</td>
                <td className="py-3 px-4 text-sm text-gray-800">{msg.message}</td>
                <td className="py-3 px-4">
                  <div
                    className={`inline-block rounded-full px-2 py-1 ${statusColors[msg.status] || statusColors.default
                      }`}
                  >
                    <select
                      value={msg.status}
                      onChange={(e) => handleStatusChange(msg.id, e.target.value)}
                      className="bg-transparent cursor-pointer text-xs font-medium focus:outline-none"
                    >
                      {statuses.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end">
        <button
          className="cursor-pointer px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
}
