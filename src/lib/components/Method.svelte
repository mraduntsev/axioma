<script lang="ts">
	import { method } from '$lib/content';
</script>

<section id="method" class="bg-ink text-paper scroll-mt-24">
	<div class="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
		<p class="kicker-invert">Формат</p>
		<h2 class="text-title text-paper mt-3 max-w-xl font-serif font-medium">
			Как устроен урок, если выкинуть воду.
		</h2>
		<div class="bg-paper/10 mt-12 grid gap-px overflow-hidden rounded-xl sm:grid-cols-2">
			{#each method as step (step.num)}
				<article class="bg-ink p-6 sm:p-8">
					<p class="text-chalk/70 font-mono text-sm">{step.num}</p>
					<h3 class="text-paper mt-4 font-serif text-2xl font-medium">{step.title}</h3>
					<p class="text-chalk/85 mt-3 text-sm leading-relaxed">{step.text}</p>
				</article>
			{/each}
		</div>
		<dl class="border-paper/10 mt-12 grid gap-8 border-t pt-10 sm:grid-cols-3">
			<div>
				<dt class="kicker text-chalk/70">Длительность</dt>
				<dd class="mt-2 font-serif text-xl">60 минут</dd>
			</div>
			<div>
				<dt class="kicker text-chalk/70">Связь</dt>
				<dd class="mt-2 font-serif text-xl">Яндекс Телемост или Telegram/Max</dd>
			</div>
			<div>
				<dt class="kicker text-chalk/70">После урока</dt>
				<dd class="mt-2 font-serif text-xl">Конспект и задачи</dd>
			</div>
		</dl>
	</div>
</section>
