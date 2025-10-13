import { useEffect } from "react";

interface ToastProps {
  show: boolean;
  onClose: () => void;
}

const Toast = ({ show, onClose }: ToastProps) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000); // Auto-close after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="mt-4 md:mt-0 md:fixed bottom-5 right-5 z-50">
      <div className="bg-orange-100 dark:bg-orange-900 border border-orange-300 dark:border-orange-700 text-orange-800 dark:text-orange-200 p-4 rounded-lg shadow-lg flex items-center justify-between max-w-sm">
        <div>
          <p className="text-xs mt-1">
            If you don’t receive an email, please check your spam/junk folder.
          </p>
        </div>
        <button
          onClick={onClose}
          className="ml-4 text-orange-800 dark:text-orange-200 hover:text-orange-600 dark:hover:text-orange-300 focus:outline-none"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Toast;
