<script lang="ts">
	import { Menu, X } from 'lucide-svelte';
	import AxiomMark from './AxiomMark.svelte';
	import ButtonLink from './ButtonLink.svelte';
	import { nav, site } from '$lib/content';
	import { cn } from '$lib/utils';

	let open = $state(false);

	$effect(() => {
		document.body.style.overflow = open ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	});

	function closeMenu() {
		open = false;
	}
</script>

<header class="border-line bg-paper sticky top-0 z-50 border-b">
	<div class="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
		<a href="#top" class="text-ink flex items-center gap-2.5">
			<AxiomMark class="size-8" />
			<span class="font-serif text-lg font-medium tracking-tight">{site.name}</span>
		</a>

		<nav class="hidden items-center gap-7 lg:flex" aria-label="Разделы">
			{#each nav as item (item.href)}
				<a
					href={item.href}
					class="text-muted hover:text-ink text-sm transition-colors duration-150"
				>
					{item.label}
				</a>
			{/each}
		</nav>

		<div class="flex items-center gap-2">
			<ButtonLink href="#contact" class="hidden sm:inline-flex">Записаться</ButtonLink>
			<button
				type="button"
				class="text-ink inline-flex size-11 items-center justify-center rounded-md lg:hidden"
				aria-expanded={open}
				aria-controls="mobile-nav"
				aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
				onclick={() => (open = !open)}
			>
				{#if open}
					<X class="size-5" />
				{:else}
					<Menu class="size-5" />
				{/if}
			</button>
		</div>
	</div>

	<div
		id="mobile-nav"
		class={cn('border-line bg-paper border-t lg:hidden', open ? 'block' : 'hidden')}
	>
		<nav class="mx-auto flex max-w-6xl flex-col px-5 py-4 sm:px-8" aria-label="Мобильное меню">
			{#each nav as item (item.href)}
				<a
					href={item.href}
					class="text-ink flex min-h-11 items-center text-base"
					onclick={closeMenu}
				>
					{item.label}
				</a>
			{/each}
			<ButtonLink href="#contact" class="mt-3 w-full" onclick={closeMenu}
				>Записаться на урок</ButtonLink
			>
		</nav>
	</div>
</header>
