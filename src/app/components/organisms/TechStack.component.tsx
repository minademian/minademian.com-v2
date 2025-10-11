type TechStackProps = {
  techs: string[];
};

export const TechStack = ({ techs }: TechStackProps) => {
  // eslint-disable-next-line complexity
  const getColor = (tech: string) => {
    switch (tech.toLowerCase()) {
    case 'react':
      return 'bg-blue-500 text-white';
    case 'next.js':
      return 'bg-gray-800 text-white';
    case 'typescript':
      return 'bg-blue-700 text-white';
    case 'tailwind':
      return 'bg-teal-500 text-white';
    case 'node':
      return 'bg-green-600 text-white';
    case 'express':
      return 'bg-gray-600 text-white';
    case 'postgresql':
      return 'bg-indigo-600 text-white';
    case 'mongodb':
      return 'bg-green-700 text-white';
    case 'docker':
      return 'bg-blue-400 text-white';
    case 'aws':
      return 'bg-orange-400 text-white';
    case 'python':
      return 'bg-yellow-500 text-gray-800';
    case 'django':
      return 'bg-green-800 text-white';
    case 'graphql':
      return 'bg-pink-500 text-white';
    case 'redis':
      return 'bg-red-600 text-white';
    case 'firebase':
      return 'bg-yellow-600 text-gray-800';
    case 'html':
      return 'bg-orange-500 text-white';
    case 'css':
      return 'bg-blue-300 text-gray-800';
    case 'javascript':
      return 'bg-yellow-400 text-gray-800';
    case 'java':
      return 'bg-red-500 text-white';
    case 'nomad':
      return 'bg-purple-600 text-white';
    case 'hashicorp nomad':
      return 'bg-purple-600 text-white';
    case 'styled components':
      return 'bg-pink-600 text-white';
    case 'rest apis':
      return 'bg-yellow-700 text-gray-800';
    case 'microservices':
      return 'bg-cyan-600 text-white';
    case 'google maps api':
      return 'bg-blue-600 text-white';
    default:
      return 'bg-gray-300 text-gray-800';
    }
  };

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {techs.map((tech) => (
        <span
          key={tech}
          className={`text-sm font-medium px-3 py-1 rounded-full ${getColor(
            tech,
          )}`}
        >
          {tech}
        </span>
      ))}
    </div>
  );
};
