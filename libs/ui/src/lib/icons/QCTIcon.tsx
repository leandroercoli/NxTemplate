import clsx from 'clsx';

import { IconProps } from './icon.types';

export const QCTIcon = (props: IconProps) => {
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
            <circle cx="50" cy="50" r="40" strokeWidth="2" />
            <path d="M30,70 L70,30 M30,30 L70,70" strokeWidth="2" />
            <circle cx="50" cy="50" r="10" strokeWidth="2" />
            <path d="M50,40 L50,60 M40,50 L60,50" strokeWidth="2" />
        </svg>
    );
};
