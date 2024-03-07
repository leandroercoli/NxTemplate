import { z } from 'zod';

import { MAX_TEXT_LENGTH } from '../utils';

export const userSchema = z.object({
    clerkUserId: z.string().optional(),
    displayName: z.string().max(MAX_TEXT_LENGTH),
    imageUrl: z.string().optional(),
    slug: z.string(),
    isPrivate: z.boolean().default(false),
    isVerified: z.boolean().default(false),
    isBot: z.boolean().default(false),
});
