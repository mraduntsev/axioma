<script lang="ts">
	import { ArrowRight, ArrowUpRight } from 'lucide-svelte';
	import Button from './Button.svelte';
	import Field from './Field.svelte';
	import { site } from '$lib/content';
	import { createContactForm } from '$lib/form.svelte';

	const form = createContactForm();
</script>

<section id="contact" class="bg-ink text-paper scroll-mt-24">
	<div class="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2">
		<div>
			<p class="kicker-invert">Запись</p>
			<h2 class="text-title text-paper mt-3 font-serif font-medium">
				Напишите, с какой задачей приходите.
			</h2>
			<p class="text-chalk/85 mt-5 max-w-md text-sm leading-relaxed">
				Отвечаю в течение дня. В письме достаточно класса, предмета и срока — к ЕГЭ, к контрольной
				или «просто подтянуть».
			</p>
			<ul class="mt-10 space-y-4 text-sm">
				<li>
					<a
						href={site.telegram}
						class="text-paper hover:text-chalk inline-flex min-h-11 items-center gap-2"
					>
						Telegram
						<ArrowUpRight class="size-4" />
					</a>
				</li>
				<li>
					<a
						href={`mailto:${site.email}`}
						class="text-paper hover:text-chalk inline-flex min-h-11 items-center gap-2"
					>
						{site.email}
						<ArrowUpRight class="size-4" />
					</a>
				</li>
				<li>
					<a
						href={`tel:${site.phone.replace(/\s/g, '')}`}
						class="text-paper hover:text-chalk inline-flex min-h-11 items-center gap-2"
					>
						{site.phone}
					</a>
				</li>
			</ul>
		</div>

		{#if form.sent}
			<div class="bg-paper/5 flex flex-col justify-center rounded-xl p-8">
				<p class="text-paper font-serif text-2xl">Заявку приняла.</p>
				<p class="text-chalk/85 mt-3 text-sm leading-relaxed">
					Напишу в Telegram или на почту в течение дня и предложу слот на диагностику.
				</p>
				<button
					type="button"
					class="text-chalk mt-8 self-start text-sm underline-offset-4 hover:underline"
					onclick={form.reset}
				>
					Отправить ещё одну
				</button>
			</div>
		{:else}
			<form onsubmit={form.submit} class="flex flex-col gap-4">
				<Field label="Имя" name="name" autocomplete="name" required />
				<Field label="Telegram или телефон" name="contact" autocomplete="tel" required />
				<label class="block">
					<span class="text-chalk/85 mb-2 block text-sm">Предмет</span>
					<select
						name="subject"
						required
						value=""
						class="bg-paper text-ink h-11 w-full rounded-md border-0 px-3 text-sm ring-0 outline-none focus:shadow-[0_0_0_2px_var(--color-chalk)]"
					>
						<option value="" disabled>Выберите</option>
						<option>Математика · ЕГЭ / ОГЭ</option>
						<option>Математика · школа или вуз</option>
						<option>Информатика</option>
						<option>Олимпиады</option>
						<option>Пока не уверен(а)</option>
					</select>
				</label>
				<label class="block">
					<span class="text-chalk/85 mb-2 block text-sm">Задача</span>
					<textarea
						name="message"
						rows="4"
						required
						placeholder="Класс, срок, что уже пробовали"
						class="bg-paper text-ink placeholder:text-subtle w-full resize-y rounded-md border-0 px-3 py-3 text-sm outline-none focus:shadow-[0_0_0_2px_var(--color-chalk)]"
					></textarea>
				</label>
				<Button type="submit" variant="invert" class="mt-2 h-12 w-full sm:w-auto">
					Отправить заявку
					<ArrowRight class="size-4" />
				</Button>
			</form>
		{/if}
	</div>
</section>
