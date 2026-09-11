<script lang="ts">
	import { cn } from '$lib/utils';

	let { class: className = '' }: { class?: string } = $props();
</script>

<svg viewBox="0 0 32 32" class={cn('size-8', className)} aria-hidden="true">
	<rect width="32" height="32" rx="6" fill="currentColor" class="text-ink" />
	<g fill="none" stroke="#f3efe6" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round">
		<circle cx="16" cy="16.5" r="8.2" />
		<path d="M16 8.8 23.2 21.2H8.8Z" />
	</g>
</svg>
