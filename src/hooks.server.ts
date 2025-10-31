import { auth } from '$lib/auth'; // path to your auth file
import { svelteKitHandler } from 'better-auth/svelte-kit';
import { building } from '$app/environment';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const protectedRoutes = ['/dashboard', '/liverate'];
	// Fetch current session from Better Auth
	const session = await auth.api.getSession({
		headers: event.request.headers
	});

	// Make session and user available on server
	if (session) {
		event.locals.session = session.session;
		event.locals.user = session.user;
	} else if (protectedRoutes.some((path) => event.url.pathname.includes(path))) {
		throw redirect(303, '/login');
	}
	return svelteKitHandler({ event, resolve, auth, building });
};
