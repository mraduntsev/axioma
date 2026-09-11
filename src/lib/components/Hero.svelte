<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';
	import ButtonLink from './ButtonLink.svelte';
	import HeroFigure from './HeroFigure.svelte';
	import { site } from '$lib/content';
</script>

<section class="border-line border-b">
	<div
		class="mx-auto grid max-w-6xl items-end gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-20"
	>
		<div>
			<p class="hero-enter kicker">Репетитор · {site.city}</p>
			<h1 class="hero-enter text-display text-ink mt-5 font-serif font-medium">
				Ясная математика. <em class="text-ink-soft font-normal italic">Честная информатика.</em>
			</h1>
			<p class="hero-enter-delay text-muted mt-6 max-w-xl text-base leading-relaxed sm:text-lg">
				Индивидуальные занятия для ОГЭ и ЕГЭ и первых курсов. После диагностики выбираем один трек.
				Смешивать две цели в одном часе обычно вредно — скажу, если это ваш случай.
			</p>
			<div class="hero-enter-delay mt-8 flex flex-col gap-3 sm:flex-row">
				<ButtonLink href="#contact" class="pr-4">
					Записаться на урок
					<ArrowRight class="size-4" />
				</ButtonLink>
				<ButtonLink href="#programs" variant="secondary">Смотреть программу</ButtonLink>
			</div>
			<p class="text-subtle mt-5 text-sm">
				Первая встреча — диагностика 40 минут. Можно остановиться после неё.
			</p>
		</div>
		<div class="shadow-border overflow-hidden rounded-xl">
			<div
				class="border-line bg-paper-elevated flex items-center justify-between border-b px-4 py-2.5"
			>
				<span class="kicker">Рис. 1 · построение</span>
				<span class="text-subtle font-mono text-[11px]">ΔABC ⊂ ○(O)</span>
			</div>
			<div class="bg-paper-elevated aspect-4/5 sm:aspect-5/6">
				<HeroFigure />
			</div>
		</div>
	</div>
</section>
