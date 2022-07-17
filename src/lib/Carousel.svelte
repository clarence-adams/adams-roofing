<script>
	import { onMount } from 'svelte';
	export let images = [];

	let carousel;
	let activeImage = 0;
	let observer;

	onMount(() => {
		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						let id = entry.target.getAttribute('id');
						activeImage = id;
					}
				});
			},
			{
				root: carousel,
				rootMargin: '0px',
				threshold: 0.5
			}
		);

		document.querySelectorAll('img').forEach((e) => {
			observer.observe(e);
		});
	});

	const scrollRight = () => {
		carousel.scrollBy({ top: 0, left: 100, behavior: 'smooth' });
	};

	const scrollLeft = () => {
		carousel.scrollBy({ top: 0, left: -100, behavior: 'smooth' });
	};
</script>

<div class="relative">
	<div
		bind:this={carousel}
		class="flex h-full w-full max-w-6xl snap-x snap-mandatory overflow-x-auto rounded-lg"
	>
		{#each images as image, i}
			<img id={i} src={image} alt="" class="h-full w-full flex-shrink-0 snap-center object-cover" />
		{/each}
	</div>

	<!-- Controls -->
	<div
		class="absolute bottom-0 flex h-8 w-full items-center justify-between rounded-b-lg bg-black/50 px-8 sm:h-16"
	>
		<button on:click={scrollLeft}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				fill="currentColor"
				class="fill-stone-50"
				viewBox="0 0 16 16"
			>
				<circle cx="8" cy="8" r="8" class="fill-amber-600" />
				<path
					d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
				/>
			</svg>
		</button>

		<!-- Dots -->
		<div class="flex gap-8">
			{#each images as image, i}
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
					<circle
						style:fill={activeImage == i ? '#fff' : ''}
						cx="8"
						cy="8"
						r="6"
						class="fill-white/50 stroke-stone-900 stroke-2"
					/>
				</svg>
			{/each}
		</div>

		<button on:click={scrollRight}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				fill="currentColor"
				class="fill-stone-50"
				viewBox="0 0 16 16"
			>
				<circle cx="8" cy="8" r="8" class="fill-amber-600" />
				<path
					d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
				/>
			</svg>
		</button>
	</div>
</div>
