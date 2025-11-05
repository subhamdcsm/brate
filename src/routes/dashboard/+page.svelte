<script lang="ts">
  import RateCard from '$lib/components/RateCard.svelte';
  import NumberFlow from '@number-flow/svelte';

  const socket = new WebSocket('ws://localhost:3000');
  socket.addEventListener('message', (event) => {
    let rates = JSON.parse(event.data);
    rate = rates[0].price_sell;
  });
  let rate = $state(0);
</script>

<p>{rate}</p>
<NumberFlow value={rate} />

<RateCard />
