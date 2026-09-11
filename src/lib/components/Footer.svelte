<script lang="ts">
	import AxiomMark from './AxiomMark.svelte';
	import { nav, site, person } from '$lib/content';

	const year = new Date().getFullYear();
</script>

<footer class="border-line bg-paper border-t pb-24 md:pb-10">
	<div class="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
		<div>
			<a href="#top" class="text-ink inline-flex items-center gap-2.5">
				<AxiomMark class="size-8" />
				<span class="font-serif text-lg font-medium">{site.name}</span>
			</a>
			<p class="text-muted mt-4 max-w-sm text-sm leading-relaxed">
				Репетитор математики и информатики. Индивидуально, с планом и разбором ошибок — без
				натаскивания вслепую.
			</p>
		</div>
		<div>
			<p class="kicker">Разделы</p>
			<ul class="mt-4 space-y-2">
				{#each nav as item (item.href)}
					<li>
						<a href={item.href} class="text-muted hover:text-ink text-sm">{item.label}</a>
					</li>
				{/each}
			</ul>
		</div>
		<div>
			<p class="kicker">Связь</p>
			<ul class="text-muted mt-4 space-y-2 text-sm">
				<li><a href={site.telegram} class="hover:text-ink">Telegram</a></li>
				<li><a href={`mailto:${site.email}`} class="hover:text-ink">{site.email}</a></li>
				<li>
					<a href={`tel:${site.phone.replace(/\s/g, '')}`} class="hover:text-ink">{site.phone}</a>
				</li>
				<li>{site.city}</li>
			</ul>
		</div>
	</div>
	<div
		class="border-line text-subtle mx-auto flex max-w-6xl flex-col gap-2 border-t px-5 py-6 text-xs sm:flex-row sm:justify-between sm:px-8"
	>
		<p>© {year} {site.name}. {person.tutor}.</p>
		<p>Самозанятый · занятия не являются образовательной услугой вуза</p>
	</div>
</footer>
