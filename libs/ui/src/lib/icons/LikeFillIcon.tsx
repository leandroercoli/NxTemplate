import clsx from 'clsx';

import { IconProps } from './icon.types';

export const LikeFillIcon = (props: IconProps) => {
    return (
        <svg
            className={clsx('w-6 h-6', props.className)}
            color={props.color}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
        >
            <path d="m12.7 20.7 6.2-7.1c2.7-3 2.6-6.5.8-8.7A5 5 0 0 0 16 3c-1.3 0-2.7.4-4 1.4A6.3 6.3 0 0 0 8 3a5 5 0 0 0-3.7 1.9c-1.8 2.2-2 5.8.8 8.7l6.2 7a1 1 0 0 0 1.4 0Z" />
        </svg>
    );
};