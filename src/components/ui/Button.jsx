const Button = ({ children, className }) => {
  return (
    <button
      className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 
      bg-white text-black hover:bg-gray-200 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
