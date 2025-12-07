"use client";
import React, { useEffect, useRef } from "react";

interface Props {
  onClose: () => void;
}

const ContactModal = ({ onClose }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal on click outside
  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  // Close modal on ESC key press
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[999]">
      <div
        ref={modalRef}
        className="bg-white rounded-xl shadow-xl p-8 w-[90%] max-w-lg relative"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl text-gray-600 hover:text-black"
          aria-label="Close contact info"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-5">Contact Info</h2>

        <div className="space-y-4 text-gray-700 text-lg">
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:chloedaull10@gmail.com"
              className="text-[#A67B5B] hover:underline"
            >
              chloedaull10@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a
              href="tel: +1 (514) 968 3588"
              className="text-[#A67B5B] hover:underline"
            >
              +1 (514) 968-3588
            </a>
          </p>

          {/* Social Links */}
          <div className="space-y-4 text-gray-700 text-lg">
            <p>
              <strong>Linkedin: </strong>{" "}
              <a
                href="https://www.linkedin.com/in/chloe-daull/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A67B5B] hover:underline"
              >
                https://www.linkedin.com/in/chloe-daull/
              </a>
            </p>

            <p>
              <strong>Github: </strong>
              <a
                href="https://github.com/chloedaull"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A67B5B] hover:underline"
              >
                https://github.com/chloedaull
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
