<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import src from '$lib/assets/iron.jpg';
	import { toast } from 'svelte-sonner';
	import { signIn } from '$lib/auth-client';

	const id = $props.id();
	let email = $state('');
	let password = $state('');
	const onclick = async () => {
		await signIn.email(
			{
				email,
				password,
				callbackURL: '/dashboard'
			},
			{
				onError(ctx) {
					toast.error(ctx.error.message);
				}
			}
		);
	};
</script>

<div class="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
	<div class="w-full max-w-sm md:max-w-3xl">
		<Card.Root class="overflow-hidden p-0">
			<Card.Content class="grid p-0 md:grid-cols-2">
				<form class="p-6 md:p-8">
					<div class="flex flex-col gap-6">
						<div class="flex flex-col items-center text-center">
							<h1 class="text-2xl font-bold">Welcome back</h1>
							<p class="text-balance text-muted-foreground">Login to your account</p>
						</div>
						<div class="grid gap-3">
							<Label for="email-{id}">Email</Label>
							<Input
								id="email-{id}"
								type="email"
								placeholder="something@example.com"
								required
								bind:value={email}
							/>
						</div>
						<div class="grid gap-3">
							<div class="flex items-center">
								<Label for="password-{id}">Password</Label>
								<a href="##" class="ml-auto text-sm underline-offset-2 hover:underline"
									>Forgot your password?</a
								>
							</div>
							<Input type="password" id="password-{id}" required bind:value={password} />
						</div>
						<Button {onclick} type="submit" class="w-full">Login</Button>
						<div class="text-center text-sm">
							Don't have an account?
							<a href="/signup" class="underline underline-offset-4">Sign Up</a>
						</div>
					</div>
				</form>
				<div class="relative hidden bg-muted md:block">
					<img class="h-full w-full grayscale" {src} alt="" />
				</div>
			</Card.Content>
		</Card.Root>
	</div>
</div>
