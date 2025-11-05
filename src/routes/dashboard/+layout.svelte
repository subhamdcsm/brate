<script lang="ts">
  import { goto } from '$app/navigation';
  import { authClient, useSession } from '$lib/auth-client';
  import * as Avatar from '$lib/components/ui/avatar';
  import Button from '$lib/components/ui/button/button.svelte';

  let { children } = $props();
  const session = useSession();
</script>

<div class="flex items-center justify-between border-2 p-2">
  <div>Goldfinity Jewels Private Limited</div>
  <div>NAVBAR</div>
  <div class="flex items-center gap-2">
    {#if $session.data}
      <Avatar.Root>
        <Avatar.Fallback>
          {$session.data.user.name.match(/\b\w/g).join('')}
        </Avatar.Fallback>
      </Avatar.Root>
      <Button
        class="hover:cursor-pointer"
        variant="destructive"
        onclick={async () => {
          await authClient.signOut({
            fetchOptions: {
              onSuccess: () => {
                goto('/login');
              }
            }
          });
        }}
      >
        Sign Out
      </Button>
    {/if}
  </div>
</div>

{@render children?.()}
