<script>
	export let images = [];
</script>

<div class="flex h-full w-full max-w-6xl snap-x snap-mandatory overflow-x-auto rounded-lg">
	{#each images as image}
		<img src={image} alt="" class="h-full w-full flex-shrink-0 snap-center object-cover" />
	{/each}
</div>
