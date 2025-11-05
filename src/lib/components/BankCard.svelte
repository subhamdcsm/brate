<script lang="ts">
  import type { BankAccount } from '$lib/server/db/schema';
  import * as Card from '$lib/components/ui/card';
  let { bankAccount }: { bankAccount: BankAccount } = $props();
</script>

<Card.Root class="m-2">
  <Card.Header>
    <Card.Title class="text-center text-3xl">{bankAccount.bankName}</Card.Title>
  </Card.Header>
  <Card.Content>
    <div class="grid grid-cols-2">
      <p class="text-center border">Beneficiary Name</p>
      <p class="font-mono border">Goldfinity Jewels Private Limited</p>
      <p class="text-center border">Beneficiary Address</p>
      <p class="font-mono border">49, K. N. C. Road, Haritala, Barasat, Kolkata - 700124</p>
      <p class="text-center border">Account Number</p>
      <p class="font-mono border">{bankAccount.accountNumber}</p>
      <p class="text-center border">IFSC Code</p>
      <p class="font-mono border" >{bankAccount.ifscCode}</p>
      <p class="text-center border">Bank branch</p>
      <p class="font-mono border">{bankAccount.branch}</p>
      <div class="col-span-2 text-center text-red-500 uppercase">Please don't desposit cash</div>
    </div>
  </Card.Content>
</Card.Root>
