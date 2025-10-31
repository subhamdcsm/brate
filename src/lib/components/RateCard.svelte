<script>
	import { currencyFormat } from '$lib/utils';
	import Button from './ui/button/button.svelte';
</script>

<div class="flex w-full max-w-150 rounded-md border-2 p-2 hover:ring-2">
	<div class="flex grow justify-between">
		<div class="flex-col">
			<div class="font-bold">Gold 995 GST Extra</div>
			<div class="text-center">1 kg</div>
		</div>
		<div class="flex items-center justify-center text-3xl font-mono">{currencyFormat.format(100000)}</div>
	</div>
	<div class="pl-8">
		<Button class="h-full hover:cursor-pointer">Book</Button>
	</div>
</div>
