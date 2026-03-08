const Button = ({ children, className }) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
