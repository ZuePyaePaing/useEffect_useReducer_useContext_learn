
const Backdrop = ({ onClose, children }) => {

  return (
    <div
      onClick={onClose}
      className="fixed w-full top-0 left-0 h-screen bg-black bg-opacity-30 flex items-center justify-center"
    >
      <div className="bg-white w-[400px] h-[300px] p-5 rounded overflow-y-scroll" onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};

export default Backdrop;
