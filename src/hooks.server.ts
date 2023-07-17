import { auth } from '$lib/lucia';
import type { Handle } from '@sveltejs/kit';
import { handleHooks } from 'lucia-auth/sveltekit';

export const handle: Handle = handleHooks(auth);
