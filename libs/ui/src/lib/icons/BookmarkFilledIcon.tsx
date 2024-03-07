import clsx from 'clsx';

import { IconProps } from './icon.types';

export const BookmarkFilledIcon = (props: IconProps) => {
    return (
        <svg
            className={clsx('w-6 h-6', props.className)}
            color={props.color}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
        >
            <path d="M7.8 2c-.5 0-1 .2-1.3.6A2 2 0 0 0 6 3.9V21a1 1 0 0 0 1.6.8l4.4-3.5 4.4 3.5A1 1 0 0 0 18 21V3.9c0-.5-.2-1-.5-1.3-.4-.4-.8-.6-1.3-.6H7.8Z" />
        </svg>
    );
};
