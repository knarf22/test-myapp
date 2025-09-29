import React from "react";
import type { ThankYouProps } from "../../types/contact_form";


const ThankYouPopover: React.FC<ThankYouProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-80 text-center">
        <h2 className="text-xl font-semibold text-green-600 mb-2">🎉 Thank you!</h2>
        <p className="text-gray-600 mb-4">
          Your message has been received. We'll get back to you soon.
        </p>
        <button
          onClick={onClose}
          className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Close
        </button> 
      </div>
    </div>
  );
};

export default ThankYouPopover;
