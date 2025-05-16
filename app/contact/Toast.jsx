"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Toast = ({ message, type = 'success', onClose, duration = 5000 }) => {
  // Auto-close after duration
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    
    return () => clearTimeout(timer);
  }, [onClose, duration]);
  
  // Define colors based on type
  const getBackgroundColor = () => {
    switch(type) {
      case 'error':
        return 'bg-red-500';
      case 'warning':
        return 'bg-yellow-500';
      case 'info':
        return 'bg-blue-500';
      case 'success':
      default:
        return 'bg-green-500';
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg ${getBackgroundColor()} text-white`}
    >
      <div className="flex items-center justify-between">
        <p>{message}</p>
        <button 
          onClick={onClose}
          className="ml-4 text-white hover:text-gray-200 text-xl"
        >
          ×
        </button>
      </div>
    </motion.div>
  );
};

export default Toast;