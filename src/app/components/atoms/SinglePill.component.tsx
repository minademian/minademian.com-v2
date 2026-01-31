interface SinglePillProps {
  label: string;
  classes: string;
}

export const SinglePill = ({ label, classes }: SinglePillProps) => {
  return (
    <span
      key={label}
      className={`w-fit text-sm uppercase font-medium px-3 py-1 rounded-md bg-gray-200 text-gray-500 ${classes}`}
    >
      {label}
    </span>
  );
};