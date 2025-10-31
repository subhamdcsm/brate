<script lang="ts">
	import { useSession } from '$lib/auth-client';
	import RateCard from '$lib/components/RateCard.svelte';
	import NumberFlow from '@number-flow/svelte'

	const socket = new WebSocket('ws://localhost:3000');
	socket.addEventListener('message', (event) => {
		let rates = JSON.parse(event.data);
		rate = rates[0].price_sell;
	});
	let rate = $state(0);

	const session = useSession();
</script>

<p>
	{$session.data?.user.name}
</p>

<p>{rate}</p>
<NumberFlow value={rate} />

<RateCard />
