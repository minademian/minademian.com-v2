'use client';

interface Category {
  key: string;
  label: string;
}

interface ProjectToggleProps {
  categories: Category[];
  active: string;
  onChange: (key: string) => void;
}

export const ProjectToggle = ({ categories, active, onChange }: ProjectToggleProps) => {
  return (
    <div className="flex justify-center mb-12">
      <div
        className="inline-flex gap-1 p-1 rounded-full
          bg-white dark:bg-dark/80 shadow-md
          border border-dark/10 dark:border-light/10"
      >
        {categories.map((category) => (
          <button
            key={category.key}
            type="button"
            onClick={() => onChange(category.key)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              active === category.key
                ? 'bg-primary text-light dark:bg-primaryDark dark:text-dark shadow-sm'
                : 'text-dark/60 dark:text-light/60 hover:text-dark dark:hover:text-light'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
};
