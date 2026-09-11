<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Stats from '$lib/components/Stats.svelte';
	import Subjects from '$lib/components/Subjects.svelte';
	import Programs from '$lib/components/Programs.svelte';
	import Method from '$lib/components/Method.svelte';
	import About from '$lib/components/About.svelte';
	import Reviews from '$lib/components/Reviews.svelte';
	import Pricing from '$lib/components/Pricing.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import MobileDock from '$lib/components/MobileDock.svelte';

	const APP_NAME = 'Аксиома';
</script>

<svelte:head>
	<title>{APP_NAME} — репетитор математики и информатики</title>
	<meta
		name="description"
		content="Индивидуальные занятия по математике и информатике: ЕГЭ, олимпиады, первый курс. Москва и онлайн."
	/>
</svelte:head>

<div id="top" class="min-h-dvh bg-paper text-ink">
	<Navbar />
	<main>
		<Hero />
		<Stats />
		<Subjects />
		<Programs />
		<Method />
		<About />
		<Reviews />
		<Pricing />
		<Faq />
		<Contact />
	</main>
	<Footer />
	<MobileDock />
</div>
