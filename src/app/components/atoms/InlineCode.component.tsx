interface InlineCodeProps {
  children: React.ReactNode;
}

export const InlineCode = ({ children }: InlineCodeProps) => {
  return (
    <code
      className="text-[0.875em] font-mono px-1.5 py-0.5 rounded-md
        bg-gray-200 text-dark/90 dark:bg-gray-700 dark:text-light/90"
    >
      {children}
    </code>
  );
};
