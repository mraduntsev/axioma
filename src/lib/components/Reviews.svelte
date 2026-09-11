<script lang="ts">
	import { reviews } from '$lib/content';
</script>

<section id="reviews" class="border-line bg-paper-elevated scroll-mt-24 border-b">
	<div class="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
		<p class="kicker">Отзывы</p>
		<h2 class="text-title mt-3 font-serif font-medium">
			Не «спасибо, всё понравилось» — а что изменилось.
		</h2>
		<div class="mt-12 grid gap-4 lg:grid-cols-3">
			{#each reviews as item (item.name)}
				<blockquote class="bg-paper shadow-border flex flex-col rounded-xl p-6 sm:p-7">
					<p class="text-ink-soft flex-1 font-serif text-lg leading-snug italic">{item.quote}</p>
					<footer class="border-line mt-8 border-t pt-4">
						<cite class="text-ink text-sm font-medium not-italic">{item.name}</cite>
						<p class="text-subtle mt-1 text-xs">{item.meta}</p>
					</footer>
				</blockquote>
			{/each}
		</div>
	</div>
</section>
