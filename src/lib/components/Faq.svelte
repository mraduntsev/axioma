<script lang="ts">
	import { ChevronDown } from 'lucide-svelte';
	import { faqs } from '$lib/content';
</script>

<section id="faq" class="border-line scroll-mt-24 border-b">
	<div class="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
		<p class="kicker">Вопросы</p>
		<h2 class="text-title mt-3 font-serif font-medium">Коротко о формате, оплате и сроках.</h2>
		<div class="mt-10 grid gap-x-12 md:grid-cols-2">
			{#each faqs as item (item.q)}
				<details class="group border-line border-b py-1">
					<summary
						class="flex min-h-14 cursor-pointer items-center justify-between gap-4 py-3 text-left"
					>
						<span class="font-medium">{item.q}</span>
						<ChevronDown
							class="text-subtle size-4 shrink-0 transition-transform duration-150 group-open:rotate-180"
						/>
					</summary>
					<p class="text-muted pr-8 pb-5 text-sm leading-relaxed">{item.a}</p>
				</details>
			{/each}
		</div>
	</div>
</section>
