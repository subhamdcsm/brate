<script>
  import { getBankAccount } from '$lib/fn.remote';
  import BankCard from '$lib/components/BankCard.svelte';
</script>

Orders List
<div class="">
  {#each await getBankAccount() as bankAccount}
    <BankCard {bankAccount} />
  {/each}
</div>
