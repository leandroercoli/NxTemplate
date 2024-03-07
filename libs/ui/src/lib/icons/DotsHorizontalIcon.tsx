import clsx from 'clsx';

import { IconProps } from './icon.types';

export const DotsHorizontalIcon = (props: IconProps) => {
    return (
        <svg
            className={clsx('w-6 h-6', props.className)}
            color={props.color}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M6 12h0m6 0h0m6 0h0"
            />
        </svg>
    );
};
