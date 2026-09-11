<script lang="ts">
	import { programs } from '$lib/content';
</script>

<section id="programs" class="border-line scroll-mt-24 border-b">
	<div class="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
		<div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
			<div>
				<p class="kicker">Программа</p>
				<h2 class="text-title mt-3 max-w-lg font-serif font-medium">
					Под задачу, а не «под учебник с первой главы».
				</h2>
			</div>
			<p class="text-muted max-w-sm text-sm">
				После диагностики выбираем один трек. Смешивать ЕГЭ и олимпиаду в одном часе обычно вредно —
				скажу, если это ваш случай.
			</p>
		</div>
		<ol class="divide-line border-line mt-12 divide-y border-y">
			{#each programs as item (item.num)}
				<li class="grid gap-3 py-8 sm:grid-cols-[5rem_1fr_1.4fr] sm:items-baseline sm:gap-8">
					<span class="text-subtle font-mono text-sm">{item.num}</span>
					<h3 class="font-serif text-xl font-medium">{item.title}</h3>
					<p class="text-muted">{item.text}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>
