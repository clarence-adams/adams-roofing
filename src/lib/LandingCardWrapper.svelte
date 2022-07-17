<script>
	export let flyIn = false;
	export let delay = 0;
</script>

<div
	style:transform={flyIn ? 'translateY(75%)' : ''}
	style:opacity={flyIn ? '0%' : '100%'}
	style:animation-delay={flyIn ? `${delay}ms` : ''}
	class="max-w-6xl rounded-lg border-2 border-amber-600 bg-black/75 p-8 text-white shadow"
>
	<slot />
</div>

<style>
	div {
		animation: 500ms ease-out flyin;
		animation-fill-mode: forwards;

		@keyframes flyin {
			from {
				transform: translateY(100px);
				opacity: 0%;
			}

			to {
				transform: translateY(0%);
				opacity: 100%;
			}
		}
	}
</style>
