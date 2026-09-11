<script lang="ts" module>
	export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'invert';

	export const buttonVariants: Record<ButtonVariant, string> = {
		primary: 'bg-accent text-accent-fg hover:bg-ink focus-visible:outline-accent',
		secondary:
			'bg-transparent text-ink shadow-[inset_0_0_0_1px_var(--color-line)] hover:shadow-[inset_0_0_0_1px_var(--color-ink)]',
		ghost: 'bg-transparent text-ink hover:bg-ink/5',
		invert: 'bg-paper text-ink hover:bg-chalk focus-visible:outline-paper'
	};
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';

	let {
		variant = 'primary',
		class: className = '',
		type = 'button',
		children,
		...rest
	}: HTMLButtonAttributes & { variant?: ButtonVariant; children: Snippet } = $props();
</script>

<button
	{type}
	class={cn(
		'inline-flex h-11 min-w-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium',
		'transition-[background-color,box-shadow,transform,color] duration-150 ease-out',
		'focus-visible:outline-2 focus-visible:outline-offset-2',
		'active:not-disabled:scale-[0.96] disabled:opacity-50',
		buttonVariants[variant],
		className
	)}
	{...rest}
>
	{@render children()}
</button>
