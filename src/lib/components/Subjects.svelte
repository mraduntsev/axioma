<script lang="ts">
	import { Check } from 'lucide-svelte';
	import { codeSample, subjects } from '$lib/content';
</script>

<section id="subjects" class="border-line scroll-mt-24 border-b">
	<div class="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
		<p class="kicker">Предметы</p>
		<h2 class="text-title mt-3 max-w-xl font-serif font-medium">
			Два языка точности — рядом, не вперемешку.
		</h2>
		<div class="mt-12 grid gap-4 lg:grid-cols-2">
			{#each subjects as subject (subject.id)}
				<article class="bg-paper-elevated shadow-border flex flex-col rounded-xl p-6 sm:p-8">
					<p class="kicker">{subject.kicker}</p>
					<h3 class="mt-3 font-serif text-2xl font-medium">{subject.title}</h3>
					<p class="text-muted mt-3">{subject.lead}</p>
					<ul class="mt-6 space-y-3">
						{#each subject.points as point (point)}
							<li class="flex gap-3 text-sm leading-relaxed">
								<Check class="text-accent mt-0.5 size-4 shrink-0" stroke-width={1.75} />
								<span>{point}</span>
							</li>
						{/each}
					</ul>
					{#if subject.id === 'cs'}
						<pre
							class="bg-ink text-chalk mt-8 overflow-x-auto rounded-md px-4 py-4 font-mono text-[13px] leading-relaxed"><code
								>{codeSample}</code
							></pre>
					{:else}
						<p class="text-ink-soft mt-8 font-serif text-lg italic">
							«Покажите, почему это верно — не только как получить ответ.»
						</p>
					{/if}
				</article>
			{/each}
		</div>
	</div>
</section>
