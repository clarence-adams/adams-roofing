<script>
	import LandingCardWrapper from '$lib/LandingCardWrapper.svelte';
	import CardWrapper from '$lib/CardWrapper.svelte';
	import Li from '$lib/tags/Li.svelte';
	import Carousel from '$lib/Carousel.svelte';
	import Contact from '$lib/contact/Contact.svelte';
	const IMAGE_COUNT = 28;
	// services that show up over the hero image
	const SERVICES = [
		'Standing seam roofs',
		'Flat seam roofs',
		'Copper box gutters',
		'Chimney flashing',
		'Copper half round gutters',
		'Sheet metal fabrication'
	];
	// images for portfolio gallery
	const IMAGES = [];
	for (let i = 0; i < IMAGE_COUNT; i++) {
		IMAGES.push(`/images/portfolio/gallery${i}.jpg`);
	}
</script>

<svelte:head>
	<title>Adams Roofing</title>
	<meta name="description" content="Copper roofing specialist in Lexington KY" />
</svelte:head>

<!-- Landing -->
<div id="landing" class="relative w-full">
	<!-- Hero Image -->
	<img
		src="/images/hero.jpg"
		alt=""
		class="absolute top-0 h-full w-full object-cover object-center"
	/>

	<!-- Landing Content -->
	<section class="z-40 flex h-full w-full flex-col items-center gap-16 px-4 py-8 sm:p-16 2xl:px-64">
		<!-- Blurb -->
		<LandingCardWrapper flyIn={true} delay={1000}>
			<h1 class="text-2xl font-bold">
				Copper roofing specialists serving Lexington KY and surrounding areas
			</h1>
		</LandingCardWrapper>

		<!-- Services -->
		<LandingCardWrapper flyIn={true} delay={2000}>
			<h2 class="mb-4 text-center text-2xl font-bold">Services we offer</h2>

			<div class="flex justify-center">
				<ul class="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
					{#each SERVICES as service}
						<Li>{service}</Li>
					{/each}
				</ul>
			</div>

			<p class="mt-4 text-center text-lg font-bold">Scroll down to see our work!</p>

			<a href="#portfolio">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="absolute left-1/2 -bottom-4 h-8 w-8 -translate-x-1/2 transform text-white"
					viewBox="0 0 16 16"
				>
					<circle cx="8" cy="8" r="8" class="fill-amber-600 shadow" />
					<path
						d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
					/>
				</svg>
			</a>
		</LandingCardWrapper>
	</section>
</div>

<!-- Portfolio -->
<section id="portfolio" class="scroll-mt-28 px-4 sm:px-16 2xl:px-64">
	<h2 class="mb-16 text-center text-2xl font-bold">Projects we've completed</h2>
	<Carousel images={IMAGES} />
</section>

<!-- Contact -->
<section>
	<Contact />
</section>

<style>
	#landing {
		min-height: calc(100vh - theme(spacing.16));
	}
</style>
