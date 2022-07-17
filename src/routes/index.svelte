<script>
	import LandingCardWrapper from '$lib/LandingCardWrapper.svelte';
	import CardWrapper from '$lib/CardWrapper.svelte';
	import Li from '$lib/tags/Li.svelte';
	import Carousel from '$lib/Carousel.svelte';
	import Contact from '$lib/contact/Contact.svelte';

	const services = [
		'Standing seam roofs',
		'Flat seam roofs',
		'Copper box gutters',
		'Chimney flashing',
		'Copper half round gutters',
		'Sheet metal fabrication'
	];
	const images = ['/images/hero.jpg', '/images/hero.jpg', '/images/hero.jpg'];
</script>

<svelte:head>
	<title>Adams Roofing</title>
	<meta name="description" content="Copper roofing specialist in Lexington KY" />
</svelte:head>

<!-- Landing -->
<div id="landing" class="relative w-full">
	<img
		src="/images/hero.jpg"
		alt=""
		class="absolute top-0 h-full w-full object-cover object-center"
	/>
	<div id="fader" class="aboslute top-0 z-40 h-full w-full bg-black opacity-0" />
	<section
		class="absolute top-0 z-40 flex h-full w-full flex-col items-center gap-16 p-4 pt-16 sm:p-16 2xl:px-64"
	>
		<LandingCardWrapper flyIn={true} delay={1000}>
			<h1 class="text-2xl font-bold">
				Copper roofing specialists serving Lexington KY and surrounding areas
			</h1>
		</LandingCardWrapper>
		<LandingCardWrapper flyIn={true} delay={2000}>
			<h2 class="mb-4 text-center text-xl font-bold">What we do</h2>
			<div class="flex justify-center">
				<ul class="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
					{#each services as service}
						<Li>{service}</Li>
					{/each}
				</ul>
			</div>
		</LandingCardWrapper>
		<a href="#portfolio">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				class="absolute left-1/2 bottom-16 h-8 w-8 -translate-x-1/2 transform text-white"
				viewBox="0 0 16 16"
			>
				<circle cx="8" cy="8" r="8" class="fill-amber-600" />
				<path
					d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
				/>
			</svg>
		</a>
	</section>
</div>

<!-- Portfolio -->
<section id="portfolio" class="scroll-mt-28 px-8 sm:px-16 2xl:px-64">
	<h2 class="mb-16 text-center text-2xl font-bold">Projects we've completed</h2>
	<Carousel {images} />
</section>

<!-- Contact -->

<section>
	<Contact />
</section>

<style>
	#landing {
		min-height: calc(100vh - theme(spacing.16));
	}

	#fader {
		animation: 500ms ease-in 500ms fade;
		animation-fill-mode: forwards;

		@keyframes fade {
			from {
				opacity: 0%;
			}

			to {
				opacity: 33.33%;
			}
		}
	}
</style>
