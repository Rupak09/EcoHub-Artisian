/* eslint-disable react/prop-types */
// CustomAlert.js

function CustomAlert({ message, type, onClose }) {
  const alertClasses = `bg-${type}-200 text-${type}-800 border-${type}-500`;

  return (
    <div className={`p-4 rounded border ${alertClasses}`}>
      <p>{message}</p>
      <button
        className="ml-auto"
        onClick={() => {
          onClose();
        }}
      >
        Close
      </button>
    </div>
  );
}

export default CustomAlert;
