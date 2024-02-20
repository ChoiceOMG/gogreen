function LoadingSpinner({ className }: { className?: string }) {
  return (
    <div
      className={`h-screen w-full flex justify-center items-center ${
        className && className
      }`}
    >
      <div className="spinner"></div>
    </div>
  );
}

export default LoadingSpinner;
