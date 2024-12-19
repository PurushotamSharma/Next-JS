"use client";
import React from 'react';

const Toast = ({ message, type, onClose }) => {
  return (
    <div 
      className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out ${
        type === 'error' ? 'bg-red-500' : 'bg-green-500'
      } text-white`}
    >
      <div className="flex items-center justify-between">
        <p>{message}</p>
        <button 
          onClick={onClose}
          className="ml-4 text-white hover:text-gray-200"
        >
          
        </button>
      </div>
    </div>
  );
};

export default Toast;