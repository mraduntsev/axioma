<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	let { label, name, ...rest }: HTMLInputAttributes & { label: string; name: string } = $props();
</script>

<label class="block">
	<span class="text-chalk/85 mb-2 block text-sm">{label}</span>
	<input
		{name}
		class="bg-paper text-ink placeholder:text-subtle h-11 w-full rounded-md border-0 px-3 text-sm outline-none focus:shadow-[0_0_0_2px_var(--color-chalk)]"
		{...rest}
	/>
</label>
