<script lang="ts">
	import { person } from '$lib/content';
</script>

<section id="about" class="scroll-mt-24 border-b border-line">
	<div
		class="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
	>
		<div class="overflow-hidden rounded-xl bg-paper-elevated shadow-border">
			<div class="relative flex aspect-[4/5] flex-col justify-between p-8">
				<svg
					viewBox="0 0 200 240"
					class="pointer-events-none absolute inset-0 h-full w-full opacity-40"
					aria-hidden="true"
				>
					<g fill="none" stroke="#d9d2c5" stroke-width="0.8">
						<circle cx="148" cy="72" r="44" />
						<path d="M148 28 L186 108 H110 Z" />
					</g>
				</svg>
				<p class="relative kicker">{ person.title }</p>
				<div class="relative">
					<p class="font-serif text-6xl font-medium leading-none tracking-tight">{person.initials}</p>
					<p class="mt-6 font-serif text-2xl">{person.tutor}</p>
					<p class="mt-2 text-sm text-muted">{person.background}</p>
					<ul class="mt-6 space-y-1 text-sm text-muted">
						{#each person.skills as p, i (i)}
							<li>{p}</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
		<div>
			<p class="kicker">{person.about}</p>
			<h2 class="mt-3 font-serif text-title font-medium">
				{person.description}
			</h2>
			<div class="mt-6 space-y-4 text-muted">
				{#each person.paragraph as p, i (i)}
					<li>{p}</li>
				{/each}
			</div>
		</div>
	</div>
</section>
