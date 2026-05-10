import { IconProps } from '@/types/components/atoms/iconProps';
import { cn } from '@/utils/classname';

const PlusIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={cn('w-4 h-4', className)}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 1.66666C10.4603 1.66666 10.8334 2.03975 10.8334 2.5V17.5C10.8334 17.9603 10.4603 18.3333 10 18.3333C9.53976 18.3333 9.16669 17.9603 9.16669 17.5V2.5C9.16669 2.03975 9.53976 1.66666 10 1.66666Z"
        className="fill-current"
      />
      <path
        d="M1.66669 10C1.66669 9.53975 2.03976 9.16666 2.5 9.16666H17.5C17.9603 9.16666 18.3334 9.53975 18.3334 10C18.3334 10.4603 17.9603 10.8333 17.5 10.8333H2.5C2.03976 10.8333 1.66669 10.4603 1.66669 10Z"
        className="fill-current"
      />
    </svg>
  );
};

export default PlusIcon;