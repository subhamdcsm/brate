<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import { signUp } from '$lib/auth-client';
	import { toast } from 'svelte-sonner';
	import src from '$lib/assets/iron.jpg';

	const id = $props.id();
	let email = $state('');
	let password = $state('');
	let confirmPassword = $state('');
	let name = $state('');
	const onclick = async () => {
		if (password === confirmPassword) {
			await signUp.email(
				{
					email,
					password,
					name,
					callbackURL: '/dashboard',
					
				},
				{
					onError (ctx) {
						toast.error(ctx.error.message)
					}
				}
			);
		} else {
			toast.error("Passwords don't match");
		}
	};
</script>

<div class="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
	<div class="w-full max-w-sm md:max-w-3xl">
		<Card.Root class="overflow-hidden p-0">
			<Card.Content class="grid p-0 md:grid-cols-2">
				<form class="p-6 md:p-8">
					<div class="flex flex-col gap-6">
						<div class="flex flex-col items-center text-center">
							<h1 class="text-2xl font-bold">Create your account</h1>
							<p class="text-balance text-muted-foreground">
								Register below to create your account
							</p>
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
							<Label for="name-{id}">Firm Name</Label>
							<Input
								id="name-{id}"
								type="text"
								placeholder="Acme Inc."
								required
								bind:value={name}
							/>
						</div>
						<div class="grid gap-3">
							<Label for="password-{id}">Password</Label>
							<Input type="password" required id="password-{id}" bind:value={password} />
						</div>
						<div class="grid gap-3">
							<Label for="passwordConfirm-{id}">Confirm Password</Label>
							<Input
								type="password"
								required
								id="passwordConfirm-{id}"
								bind:value={confirmPassword}
							/>
						</div>
						<Button {onclick} type="submit" class="w-full">Create Account</Button>
						<div class="text-center text-sm">
							Already an user?
							<a href="/login" class="underline underline-offset-4">Log In</a>
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
