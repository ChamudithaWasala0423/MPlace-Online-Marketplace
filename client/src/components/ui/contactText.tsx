import React, { TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    customWidth?: string;
    customHeight?: string;
}

const Textarea: React.FC<TextareaProps> = ({ customWidth, customHeight, ...props }) => {
    return (
        <div
            className={`relative bg-neutral-100 rounded transition-colors duration-300 focus:outline-none border-2 p-6 ${customWidth} ${customHeight}`}
        >
            {/* Name Input */}
            <input
                type="text"
                placeholder="Name"
                className="w-full mb-3 p-2 border border-gray-300 rounded text-black"
            />

            {/* Email Input */}
            <input
                type="email"
                placeholder="Email"
                className="w-full mb-3 p-2 border border-gray-300 rounded text-black"
            />

            {/* Phone Number Input */}
            <input
                type="tel"
                placeholder="Phone Number"
                className="w-full mb-3 p-2 border border-gray-300 rounded text-black"
            />

            {/* Message Textarea */}
            <textarea
                placeholder="Your message..."
                className="w-full p-2 border border-gray-300 rounded resize-none mb-3 text-black"
                rows={4}
                {...props}
            ></textarea>

            {/* Submit Button */}
            <div className="flex justify-end">
                <button
                    type="submit"
                    className="mt-4 p-4 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors duration-300"
                >
                    Send Message
                </button>
            </div>
        </div>
    );
};

export default Textarea;
