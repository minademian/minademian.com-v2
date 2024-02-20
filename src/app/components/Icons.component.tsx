import * as React from 'react';

type IconProps = {
  className?: string | null;
};

export const TwitterIcon = ({ className = '', ...rest }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.23em"
    height="1em"
    viewBox="0 0 256 209"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="rgba(255, 255, 255, 0)" d="M0 0h256v209H0z" />
    <path
      fill="#55acee"
      d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
    />
  </svg>
);

export const GitHubIcon = ({ className = '', ...rest }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="rgba(255, 255, 255, 0)" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

export const LinkedInComponent = ({ className = '', ...rest }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="rgba(255, 255, 255, 0)" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);

export const LinkArrow = ({ className = '', ...rest }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);

export const HireMeIcon = ({ className = '', ...rest }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1080}
    height={1080}
    viewBox="0 0 810 810"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path d="m368.198 684.695 2.39-15.421-27.03-4.22 1.702-10.827 27.032 4.218 3.312-21.28 13.5 2.109-9.11 58.375-44.124-6.875 1.703-10.844ZM283.637 657.507l16.313-42.375 11.672 4.5-1.938 5.047a17.577 17.577 0 0 1 7.453-1.97c2.625-.1 5.25.352 7.875 1.36 5.563 2.137 9.36 5.434 11.391 9.89 2.023 4.458 1.82 9.837-.61 16.142l-9.218 23.937-12.281-4.734 8.515-22.14c2.637-6.825 1.09-11.337-4.64-13.532-2.938-1.133-5.664-1.086-8.188.14-2.531 1.227-4.523 3.735-5.984 7.516l-8.063 20.953ZM262.075 664.783l-11.39-6.625 31.437-54.156 11.39 6.625ZM237.63 649.73l-10.703-7.672 36.516-50.875 10.703 7.672ZM238.053 608.33l-17.75-15.985 7.062-7.843 17.75 15.984ZM223.338 550.525c2.918 3.657 5.242 7.586 6.969 11.782 1.73 4.199 2.625 7.968 2.687 11.312l-10.937 2.797c-.125-3.137-.832-6.422-2.125-9.86-1.3-3.437-3.04-6.519-5.219-9.25-2.426-3.03-4.664-4.906-6.719-5.624-2.062-.727-3.843-.492-5.343.703-1.102.875-1.676 2.031-1.72 3.469-.038 1.43.259 2.992.892 4.687.636 1.688 1.601 3.887 2.89 6.594 1.98 4.18 3.45 7.723 4.406 10.64.95 2.915 1.141 5.91.579 8.985-.57 3.082-2.399 5.851-5.485 8.312-2.676 2.133-5.68 3.344-9.015 3.625-3.332.29-6.801-.523-10.407-2.437-3.613-1.906-7.101-4.965-10.468-9.172a45.445 45.445 0 0 1-5.844-9.5c-1.551-3.375-2.504-6.645-2.86-9.813l10.735-3.171c.992 6.199 3.187 11.425 6.594 15.687 2.386 2.988 4.636 4.813 6.75 5.469 2.105.664 3.945.367 5.515-.89 1.594-1.274 2.121-3.044 1.578-5.313-.55-2.262-1.804-5.383-3.765-9.36-1.977-4.187-3.446-7.734-4.407-10.64a18.129 18.129 0 0 1-.64-8.922c.531-3.04 2.34-5.79 5.422-8.25 2.636-2.113 5.633-3.3 8.984-3.563 3.344-.257 6.836.575 10.469 2.5 3.625 1.93 7.12 4.996 10.484 9.203ZM189.782 503.36c1.46.68 2.855 1.73 4.187 3.157 1.324 1.417 2.485 3.039 3.485 4.859 2.593 4.73 3.398 9.058 2.406 12.984-1 3.918-3.844 7.157-8.531 9.719l-16.36 8.969 3.36 6.14-8.875 4.875-3.36-6.14-9.703 5.312-6.328-11.547 9.703-5.312-5.437-9.922 8.875-4.875 5.437 9.922 16.203-8.89c1.68-.907 2.735-2.04 3.172-3.407.438-1.375.227-2.848-.64-4.422-1-1.832-2.348-3.117-4.047-3.86ZM140.85 497.676c-2.289-6.644-2.472-12.296-.546-16.953 1.918-4.664 6.074-8.101 12.468-10.312l24.485-8.453 4.031 11.64-5.344 1.844c4.805.969 8.305 4.649 10.5 11.031 1.137 3.293 1.563 6.344 1.282 9.157-.282 2.804-1.18 5.183-2.704 7.14-1.52 1.95-3.53 3.352-6.03 4.219-3.99 1.383-7.645.969-10.97-1.25-3.32-2.219-6.07-6.469-8.25-12.75l-3.421-9.89c-2.72.937-4.52 2.484-5.407 4.64-.894 2.156-.773 4.883.36 8.172a22.687 22.687 0 0 0 3.422 6.39c1.48 1.961 3.093 3.493 4.843 4.61l-7.156 7.469c-2.445-1.774-4.687-4.137-6.719-7.094a40.2 40.2 0 0 1-4.843-9.61Zm36.157-11.421c-.738-2.125-1.883-3.844-3.438-5.157-1.55-1.312-3.41-1.984-5.578-2.015l-4.375 1.515 2.953 8.532c1.774 5.117 4.328 7.093 7.672 5.937 1.594-.55 2.64-1.613 3.14-3.187.5-1.57.376-3.446-.374-5.625ZM173.502 433.784c.668 4.793.281 9.234-1.156 13.328-1.446 4.093-3.774 7.46-6.985 10.093-3.218 2.637-7.054 4.266-11.515 4.891-4.457.625-8.586.11-12.39-1.547-3.813-1.656-6.974-4.254-9.485-7.797-2.52-3.539-4.114-7.707-4.781-12.5-.665-4.738-.254-9.015 1.234-12.828 1.48-3.82 3.95-6.789 7.406-8.906l6.844 9.344c-3.79 2.906-5.379 6.562-4.766 10.968.469 3.399 1.977 6.06 4.516 7.985 2.543 1.93 5.734 2.621 9.578 2.078 3.844-.54 6.727-2.082 8.64-4.625 1.919-2.54 2.641-5.508 2.173-8.906-.625-4.457-3.16-7.54-7.61-9.25l4.125-10.875c3.774 1.105 6.914 3.289 9.422 6.547 2.5 3.261 4.086 7.261 4.75 12ZM153.527 391.128l5.844 6.703 11.547.719-.812 13.156-62.5-3.875.812-13.156 35.375 2.187-17-20.312.984-15.672 18.016 20.047 27.39-18.922-.984 15.922ZM185.076 293.746l10.235 3.921-16.39 42.72-55.157-21.157 16-41.703 10.234 3.922-11.125 29 11.985 4.593 9.828-25.609 9.937 3.813-9.828 25.609 12.766 4.906ZM174.055 245.8c3.106-4.695 7.023-7.55 11.75-8.563 4.73-1.02 9.86.297 15.39 3.954l21.673 14.359-7.266 10.969-19.984-13.235c-3-1.988-5.672-2.816-8.016-2.484-2.352.336-4.352 1.746-6 4.234-1.832 2.774-2.438 5.547-1.813 8.328.625 2.774 2.625 5.278 6 7.516l18.72 12.39-7.266 10.985-37.86-25.062 6.938-10.5 4.437 2.921c-.644-2.5-.68-5.113-.11-7.843.563-2.727 1.7-5.383 3.407-7.969ZM229.028 185.95l26.125 27.343c5.75 6.012 8.457 11.98 8.125 17.907-.336 5.93-3.508 11.765-9.515 17.515-3.188 3.032-6.575 5.524-10.157 7.47-3.586 1.956-7.011 3.093-10.28 3.405l-2.767-10.453c2.477-.176 5.094-.937 7.844-2.281 2.758-1.352 5.203-3.04 7.328-5.063 3.282-3.144 4.993-6.207 5.14-9.187.157-2.988-1.202-5.988-4.077-9l-1.344-1.406c.125 5.105-2.027 9.777-6.453 14.015-3.023 2.875-6.418 4.844-10.188 5.907-3.761 1.062-7.515 1.093-11.265.093-3.758-1-7.133-3.066-10.125-6.203-3-3.133-4.91-6.597-5.735-10.39-.832-3.79-.628-7.54.61-11.25 1.242-3.72 3.37-7.016 6.39-9.891 4.75-4.55 9.86-6.453 15.329-5.703l-4.016-4.203Zm4.375 40.625c2.52-2.407 3.875-5.114 4.063-8.125.195-3.02-.852-5.735-3.14-8.14-2.306-2.407-4.97-3.58-8-3.517-3.024.055-5.79 1.282-8.313 3.688-2.508 2.406-3.868 5.133-4.079 8.172-.218 3.031.825 5.75 3.125 8.156 2.293 2.406 4.961 3.574 8 3.5 3.051-.082 5.832-1.328 8.344-3.734ZM241.527 177.54l10.844-7.469 25.719 37.422-10.844 7.469Zm1.844-8.953c-2 1.375-4.024 1.914-6.078 1.61-2.051-.301-3.66-1.305-4.828-3.016-1.188-1.719-1.551-3.582-1.094-5.594.46-2.02 1.687-3.719 3.687-5.094 2-1.375 4.008-1.93 6.016-1.672 2 .25 3.574 1.211 4.719 2.875 1.25 1.813 1.664 3.743 1.234 5.782-.437 2.03-1.656 3.734-3.656 5.109ZM289.338 149.027c5.093-2.406 9.925-2.828 14.5-1.266 4.57 1.563 8.28 5.344 11.125 11.344l11.14 23.485-11.906 5.64-10.266-21.656c-1.554-3.258-3.418-5.348-5.593-6.266-2.18-.925-4.61-.754-7.297.516-3 1.43-4.953 3.492-5.86 6.187-.906 2.7-.492 5.883 1.25 9.547l9.625 20.282-11.906 5.64-19.453-41.031 11.375-5.39 2.266 4.812c.758-2.477 2.082-4.738 3.968-6.781 1.895-2.04 4.239-3.727 7.032-5.063ZM370.018 148.773c.04.168.234 1.34.578 3.516l-33.453 7.843c1.238 2.606 3.164 4.438 5.781 5.5 2.625 1.063 5.61 1.2 8.953.407 2.301-.54 4.266-1.364 5.891-2.47 1.625-1.1 3.023-2.577 4.203-4.421l8.563 5.797c-3.043 5.75-8.57 9.562-16.578 11.437-4.98 1.18-9.618 1.246-13.907.203-4.293-1.039-7.886-3.046-10.781-6.015-2.898-2.969-4.852-6.64-5.875-11.016-1.02-4.332-.91-8.476.328-12.437 1.242-3.957 3.426-7.328 6.563-10.11 3.132-2.789 6.914-4.707 11.343-5.75 4.332-1.02 8.47-1.008 12.407.032 3.937 1.03 7.312 3.054 10.125 6.062 2.82 3.012 4.773 6.82 5.859 11.422Zm-26.031-7.844c-2.906.68-5.156 2.074-6.75 4.188-1.586 2.105-2.258 4.632-2.016 7.578l21.781-5.11c-1.117-2.687-2.851-4.632-5.203-5.843-2.355-1.22-4.96-1.489-7.812-.813ZM422.18 146.874c.007.168-.04 1.352-.141 3.547l-34.344.97c.687 2.792 2.203 4.968 4.547 6.53 2.351 1.563 5.25 2.297 8.687 2.203 2.363-.07 4.445-.484 6.25-1.234 1.813-.758 3.485-1.922 5.016-3.484l7.234 7.39c-4.148 5.024-10.328 7.649-18.547 7.875-5.117.145-9.672-.718-13.672-2.593-3.992-1.883-7.105-4.57-9.343-8.063-2.23-3.488-3.407-7.476-3.532-11.969-.125-4.445.817-8.484 2.829-12.11 2.007-3.632 4.828-6.5 8.453-8.593 3.625-2.101 7.71-3.222 12.265-3.36 4.446-.124 8.492.72 12.14 2.532 3.657 1.813 6.563 4.48 8.72 8 2.156 3.512 3.3 7.633 3.437 12.36Zm-23.923-12.937c-2.992.086-5.476 1-7.453 2.75-1.969 1.742-3.137 4.078-3.5 7.016l22.36-.625c-.543-2.864-1.852-5.125-3.922-6.782-2.063-1.656-4.559-2.441-7.485-2.36ZM444.784 133.364c1.864-1.926 4.196-3.258 7-4 2.813-.738 5.946-.86 9.407-.36l-1.72 12.017c-1.437-.313-2.405-.504-2.905-.579-3.742-.53-6.813.102-9.22 1.891-2.405 1.781-3.913 4.762-4.515 8.938l-3.03 21.218-13.048-1.875 6.438-44.953 12.453 1.781ZM464.128 178.103c-2.243-.574-3.922-1.82-5.047-3.734-1.125-1.926-1.39-4.032-.797-6.313.601-2.344 1.851-4.039 3.75-5.094 1.894-1.05 3.96-1.289 6.203-.718 2.226.585 3.922 1.796 5.078 3.64 1.156 1.844 1.43 3.938.828 6.281-.594 2.282-1.855 3.985-3.781 5.11-1.93 1.133-4.008 1.41-6.234.828ZM604.337 183.362l-48.265 39.172-12.344-7.969 10.766-40.672-32.969 26.344-12.266-7.906 15.703-60.156 11.907 7.671-11.282 42.11 34.204-27.328 10.64 6.875-11.344 42.484 34.25-27.719ZM616.024 255.065c-.125.102-1.074.813-2.844 2.125l-22.39-26.062c-1.731 2.3-2.465 4.86-2.204 7.672.27 2.812 1.524 5.52 3.766 8.125 1.54 1.789 3.176 3.148 4.906 4.078 1.727.926 3.676 1.492 5.844 1.703l-1.172 10.266c-6.512-.055-12.445-3.2-17.797-9.438-3.336-3.875-5.531-7.96-6.594-12.25-1.054-4.293-.933-8.402.36-12.328 1.3-3.937 3.66-7.367 7.078-10.297 3.375-2.906 7.102-4.723 11.187-5.453 4.083-.727 8.079-.344 11.985 1.156 3.914 1.5 7.36 3.98 10.328 7.438 2.906 3.367 4.805 7.031 5.703 11 .895 3.976.656 7.91-.719 11.797-1.367 3.894-3.843 7.382-7.437 10.468Zm-5.031-26.718c-1.95-2.27-4.227-3.618-6.829-4.047-2.593-.438-5.152.125-7.671 1.687l14.593 16.969c1.883-2.23 2.817-4.668 2.797-7.312-.023-2.649-.984-5.079-2.89-7.297ZM653.842 273.765c2.008 3.707 2.988 7.539 2.938 11.5-.055 3.969-1.153 7.656-3.297 11.062-2.149 3.414-5.278 6.242-9.39 8.485-4.095 2.226-8.157 3.312-12.188 3.25-4.032-.055-7.73-1.133-11.094-3.235-3.356-2.105-6.04-5.011-8.047-8.718-2.992-5.493-3.539-10.61-1.64-15.36l-4.594 2.5-6-11.047 55.015-29.922 6.297 11.563-19.36 10.531c4.79 1.168 8.579 4.297 11.36 9.39Zm-32.687 15.172c1.613 2.957 3.937 4.843 6.968 5.656 3.04.82 6.239.32 9.594-1.5 3.363-1.824 5.531-4.234 6.5-7.234.977-3 .66-5.98-.953-8.938-1.617-2.969-3.945-4.86-6.984-5.672-3.043-.805-6.246-.293-9.61 1.531-3.355 1.82-5.515 4.227-6.484 7.22-.969 2.987-.649 5.968.969 8.937ZM690.619 329.058l4.39 26.485c1.04 6.332.758 12.125-.843 17.375-1.606 5.25-4.383 9.582-8.329 13-3.937 3.426-8.82 5.617-14.64 6.578-5.844.969-11.18.469-16-1.5-4.824-1.969-8.852-5.184-12.078-9.64-3.219-4.45-5.352-9.84-6.39-16.173l-4.392-26.484Zm-42.938 33.625c.957 5.833 3.348 10.211 7.172 13.141 3.82 2.938 8.516 3.942 14.078 3.016 5.54-.918 9.649-3.383 12.328-7.39 2.676-4 3.536-8.919 2.578-14.75l-2.046-12.329-36.157 5.984ZM660.255 446.283c-.156-.023-1.324-.187-3.5-.5l2.391-34.266c-2.844.407-5.164 1.704-6.953 3.891-1.793 2.188-2.809 4.992-3.047 8.422-.168 2.363.035 4.477.61 6.344.581 1.875 1.578 3.656 2.984 5.343l-8.063 6.47c-4.593-4.618-6.601-11.024-6.031-19.22.367-5.105 1.68-9.554 3.938-13.343 2.257-3.793 5.234-6.633 8.921-8.516 3.696-1.887 7.786-2.672 12.266-2.36 4.438.313 8.363 1.645 11.781 4 3.426 2.352 6.004 5.438 7.735 9.25 1.726 3.821 2.437 8.005 2.125 12.548-.313 4.437-1.547 8.378-3.703 11.828-2.157 3.457-5.094 6.086-8.813 7.89-3.71 1.801-7.922 2.54-12.64 2.22Zm15.204-22.547c.207-2.992-.461-5.554-2-7.687-1.532-2.137-3.743-3.528-6.625-4.172l-1.563 22.312c2.895-.261 5.266-1.34 7.11-3.234 1.851-1.898 2.878-4.305 3.078-7.219ZM668.678 503.339l-38.735-30.485 3.579-13.093 48.828-6.407-3.578 13.11-33.11 3.953 26.36 20.703ZM624.638 540.976l-3.062-1.828 15.39-30.718c-2.793-.711-5.433-.399-7.922.937-2.488 1.332-4.504 3.535-6.047 6.61-1.05 2.113-1.671 4.144-1.859 6.093-.187 1.945.043 3.969.688 6.063l-9.922 2.859c-2.457-6.012-1.848-12.695 1.828-20.047 2.293-4.574 5.215-8.18 8.765-10.812 3.543-2.637 7.375-4.118 11.5-4.438 4.133-.312 8.211.54 12.235 2.563 3.976 1.988 7.086 4.722 9.328 8.203 2.25 3.488 3.441 7.328 3.578 11.515.133 4.188-.812 8.317-2.844 12.391-2 3.969-4.664 7.133-7.984 9.5-3.313 2.363-7.031 3.664-11.156 3.906-4.118.25-8.29-.683-12.516-2.797Zm22.703-14.984c1.332-2.68 1.703-5.297 1.11-7.86-.594-2.562-2.106-4.702-4.532-6.421l-10.015 20.015c2.77.875 5.375.79 7.812-.25 2.438-1.043 4.313-2.87 5.625-5.484ZM652.243 570.19l-7.594 10.766-51.188-36.062 7.594-10.766ZM573.826 566.825c3.325-3.45 7.024-5.852 11.094-7.203 4.074-1.344 8.125-1.555 12.156-.625 4.04.926 7.68 2.953 10.922 6.078 3.239 3.113 5.391 6.672 6.453 10.672 1.07 4 1.008 8.054-.187 12.172-1.2 4.125-3.461 7.91-6.781 11.359-3.325 3.437-7.012 5.816-11.063 7.14-4.05 1.333-8.094 1.536-12.125.61-4.039-.93-7.68-2.95-10.922-6.063-3.238-3.125-5.39-6.687-6.453-10.687-1.07-4-1.02-8.055.156-12.156 1.18-4.094 3.43-7.86 6.75-11.297Zm7.766 7.5c-2.344 2.426-3.441 5.207-3.297 8.344.137 3.144 1.578 6.046 4.328 8.703 2.75 2.644 5.7 3.976 8.844 4 3.145.031 5.89-1.168 8.234-3.594 2.344-2.438 3.457-5.242 3.344-8.406-.117-3.157-1.547-6.059-4.297-8.703-2.75-2.657-5.707-3.993-8.875-4-3.175 0-5.937 1.218-8.28 3.656ZM557.953 640.08c-3.508 2.344-7.238 3.664-11.187 3.969-3.957.3-7.727-.465-11.313-2.297-3.593-1.824-6.687-4.683-9.281-8.578-2.594-3.887-4.039-7.84-4.344-11.86-.312-4.011.434-7.788 2.235-11.327 1.804-3.532 4.46-6.47 7.968-8.813 4.825-3.21 9.633-4.215 14.422-3.016l-11.75-17.625 10.953-7.296 34.25 51.406-10.468 6.969-2.891-4.36c-.531 5.094-3.398 9.367-8.594 12.828Zm-18.047-31.187c-2.8 1.875-4.472 4.363-5.015 7.469-.54 3.101.25 6.242 2.375 9.421 2.117 3.188 4.71 5.125 7.781 5.813 3.074.695 6.012.11 8.813-1.766 2.812-1.867 4.492-4.351 5.03-7.453.532-3.094-.257-6.234-2.374-9.422-2.125-3.18-4.719-5.117-7.781-5.812-3.07-.7-6.016-.117-8.829 1.75ZM477.603 652.368c-.063-.156-.414-1.289-1.063-3.39l31.953-12.61c-1.601-2.398-3.773-3.93-6.515-4.593-2.75-.668-5.723-.371-8.922.89-2.196.864-4.016 1.957-5.453 3.282-1.438 1.32-2.614 2.984-3.532 4.984l-9.296-4.5c2.18-6.117 7.09-10.684 14.734-13.703 4.762-1.875 9.344-2.61 13.75-2.203 4.398.406 8.242 1.863 11.531 4.375 3.281 2.52 5.742 5.875 7.39 10.062 1.634 4.133 2.126 8.25 1.47 12.344-.649 4.101-2.32 7.758-5.016 10.969-2.695 3.207-6.164 5.644-10.406 7.312-4.133 1.633-8.223 2.223-12.266 1.766-4.05-.45-7.687-1.961-10.906-4.531-3.227-2.563-5.711-6.047-7.453-10.454Zm26.906 4.016c2.781-1.105 4.809-2.82 6.078-5.14 1.262-2.313 1.563-4.907.906-7.782l-20.828 8.203c1.48 2.508 3.477 4.192 5.985 5.047 2.511.852 5.132.742 7.859-.328ZM460.943 672.762c-1.101 2.457-2.843 4.507-5.218 6.156-2.383 1.644-5.286 2.82-8.704 3.531l-2.484-11.89c1.45-.188 2.422-.336 2.922-.438 3.7-.773 6.375-2.406 8.031-4.906 1.656-2.5 2.059-5.82 1.203-9.953l-4.375-20.985 12.891-2.687 9.266 44.453-12.313 2.578ZM427.517 637.291c2.304-.219 4.312.379 6.031 1.797 1.71 1.414 2.68 3.3 2.906 5.656.23 2.406-.367 4.426-1.797 6.063-1.425 1.644-3.289 2.578-5.593 2.796-2.29.208-4.29-.359-6-1.703-1.72-1.336-2.692-3.203-2.922-5.609-.227-2.355.37-4.39 1.797-6.11 1.43-1.718 3.289-2.683 5.578-2.89Zm0 0" />
  </svg>
);

export const SunIcon = ({ className, ...rest }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);
