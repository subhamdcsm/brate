<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="flex h-screen flex-col items-center justify-center bg-muted">
	<p>{page.status}</p>
	<div class="text-6xl font-bold">{page.error?.message}</div>
</div>
