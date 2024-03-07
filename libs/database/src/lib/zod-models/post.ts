import { z } from 'zod';

import { MAX_TEXT_LENGTH } from '../utils';

// We don't need the userId field in any of these because it will be automatically added by the server when calling the API endpoint.
export const postSchema = z.object({
    title: z.string().max(MAX_TEXT_LENGTH),
    content: z.string().max(MAX_TEXT_LENGTH),
});
