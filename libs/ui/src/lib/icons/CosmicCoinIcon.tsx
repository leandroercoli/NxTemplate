import clsx from 'clsx';

import { IconProps } from './icon.types';

export const CosmicCoinIcon = (props: IconProps) => {
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
            <circle
                cx="50"
                cy="50"
                r="30"
                strokeWidth="2"
                strokeDasharray="5,5"
            />
            <circle
                cx="50"
                cy="50"
                r="38"
                strokeWidth="1"
                strokeDasharray="1,4"
            />
            <circle
                cx="50"
                cy="50"
                r="20"
                strokeWidth="1"
                strokeDasharray="1,4"
            />
            <circle cx="50" cy="50" r="3" fill="currentColor" />
        </svg>
    );
};
