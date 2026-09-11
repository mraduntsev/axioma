<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';
	import { buttonVariants, type ButtonVariant } from './Button.svelte';

	let {
		variant = 'primary',
		class: className = '',
		href,
		children,
		...rest
	}: HTMLAnchorAttributes & { variant?: ButtonVariant; children: Snippet; href: string } = $props();
</script>

<a
	{href}
	class={cn(
		'inline-flex h-11 min-w-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium',
		'transition-[background-color,box-shadow,transform,color] duration-150 ease-out',
		'focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2',
		'active:scale-[0.96]',
		buttonVariants[variant],
		className
	)}
	{...rest}
>
	{@render children()}
</a>
