<script lang="ts">
	import { hero } from '$lib/content';
	import { cn } from '$lib/utils';
</script>

<section aria-label="Цифры" class="border-line border-b">
	<div class="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4">
		{#each hero.stats as item, i (item.label)}
			<div
				class={cn(
					'px-5 py-8 sm:px-8',
					i % 2 === 1 && 'border-line border-l',
					i >= 2 && 'border-line border-t lg:border-t-0',
					i >= 1 && 'lg:border-l'
				)}
			>
				<p class="font-serif text-4xl font-medium tracking-tight tabular-nums sm:text-5xl">
					{item.value}<span class="text-muted ml-1 text-2xl">{item.unit}</span>
				</p>
				<p class="text-muted mt-2 text-sm">{item.label}</p>
			</div>
		{/each}
	</div>
</section>
