<script lang="ts">
	import { cn } from '$lib/utils';

	let { class: className = '' }: { class?: string } = $props();

	const vLines = Array.from({ length: 14 }, (_, i) => 30 + i * 28);
	const hLines = Array.from({ length: 18 }, (_, i) => 20 + i * 28);
</script>

<svg
	viewBox="0 0 420 520"
	class={cn('h-full w-full', className)}
	role="img"
	aria-label="Геометрическое построение: окружность и вписанный треугольник"
>
	<rect width="420" height="520" fill="#faf7f1" />
	<g stroke="#d9d2c5" stroke-width="0.6" fill="none">
		{#each vLines as x (x)}
			<line x1={x} y1="20" x2={x} y2="500" />
		{/each}
		{#each hLines as y (y)}
			<line x1="20" y1={y} x2="400" y2={y} />
		{/each}
	</g>
	<g fill="none" stroke="#141512" stroke-width="1.15">
		<circle cx="210" cy="268" r="148" />
		<path d="M210 120 L338 380 H82 Z" />
		<line x1="210" y1="120" x2="210" y2="380" stroke-dasharray="3 5" />
		<line x1="82" y1="380" x2="338" y2="380" />
		<circle cx="210" cy="120" r="3.2" fill="#141512" stroke="none" />
		<circle cx="338" cy="380" r="3.2" fill="#141512" stroke="none" />
		<circle cx="82" cy="380" r="3.2" fill="#141512" stroke="none" />
		<circle cx="210" cy="268" r="3.2" fill="#1f4452" stroke="none" />
	</g>
	<g fill="#5e5950" font-family="IBM Plex Serif, serif" font-size="13" font-style="italic">
		<text x="210" y="108" text-anchor="middle">A</text>
		<text x="352" y="392">B</text>
		<text x="58" y="392">C</text>
		<text x="222" y="262">O</text>
	</g>
	<g fill="none" stroke="#1f4452" stroke-width="1">
		<path d="M210 268 L210 380" />
		<path d="M202 372 H218" />
	</g>
</svg>
