<script lang="ts">
	import { Check } from 'lucide-svelte';
	import ButtonLink from './ButtonLink.svelte';
	import { plans } from '$lib/content';
	import { cn } from '$lib/utils';
</script>

<section id="pricing" class="border-line scroll-mt-24 border-b">
	<div class="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
		<p class="kicker">Стоимость</p>
		<h2 class="text-title mt-3 max-w-lg font-serif font-medium">
			Прозрачные пакеты. Без абонемента «на год вперёд».
		</h2>
		<div class="mt-12 grid gap-4 lg:grid-cols-3">
			{#each plans as plan (plan.name)}
				<article
					class={cn(
						'flex flex-col rounded-xl p-6 sm:p-8',
						plan.featured ? 'bg-ink text-paper' : 'bg-paper-elevated text-ink shadow-border'
					)}
				>
					<p class={cn('kicker', plan.featured && 'text-chalk/80')}>
						{plan.featured ? 'Основной формат' : 'Пакет'}
					</p>
					<h3 class="mt-3 font-serif text-2xl font-medium">{plan.name}</h3>
					<p class="mt-6 font-serif text-4xl font-medium tracking-tight tabular-nums">
						{plan.price}
						<span
							class={cn(
								'ml-2 font-sans text-base font-normal',
								plan.featured ? 'text-chalk/80' : 'text-muted'
							)}
						>
							{plan.unit}
						</span>
					</p>
					<p
						class={cn(
							'mt-4 text-sm leading-relaxed',
							plan.featured ? 'text-chalk/85' : 'text-muted'
						)}
					>
						{plan.note}
					</p>
					<ul class="mt-6 flex-1 space-y-2.5">
						{#each plan.points as point (point)}
							<li class="flex gap-2.5 text-sm">
								<Check
									class={cn('mt-0.5 size-4 shrink-0', plan.featured ? 'text-chalk' : 'text-accent')}
									stroke-width={1.75}
								/>
								{point}
							</li>
						{/each}
					</ul>
					<ButtonLink
						href="#contact"
						variant={plan.featured ? 'invert' : 'secondary'}
						class="mt-8 w-full"
					>
						Выбрать
					</ButtonLink>
				</article>
			{/each}
		</div>
	</div>
</section>
