import clsx from 'clsx';

import { IconProps } from './icon.types';

export const TimeTokenIcon = (props: IconProps) => {
    return (
        <svg
            className={clsx('w-6 h-6', props.className)}
            color={props.color}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 100 100"
        >
            <circle cx="50" cy="50" r="45" strokeWidth="2" />
            <path
                d="M40,30 L60,30 L40,70 L60,70 M50,30 L50,70"
                strokeWidth="2"
            />
            <path d="M40,50 L60,50" strokeWidth="2" />
            <path d="M45,45 L55,45" strokeWidth="2" />
            <path d="M45,55 L55,55" strokeWidth="2" />
        </svg>
    );
};
