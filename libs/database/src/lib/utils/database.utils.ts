import { Post } from '@prisma/client-app-1';
import moment from 'moment';

export const MAX_AMOUNT_VALUE = 999999.99;

export const MAX_TEXT_LENGTH = 255;

export const getCreatedAt = (item?: Post) => {
    return formatDate(item?.createdAt || '');
};

export const formatDate = (date: string | Date) => {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    });
};

export const formatDateFromNow = (date: string | Date) => {
    return moment(date).fromNow();
};
