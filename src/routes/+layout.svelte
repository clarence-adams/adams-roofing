<script>
	import '../app.css';
</script>

<header
	class="fixed top-0 z-50 flex h-16 w-full items-center justify-between border-b-2 border-amber-600 bg-white px-8 text-stone-900 shadow sm:px-16 2xl:px-64"
>
	<p class="text-3xl font-bold">Adams Roofing</p>

	<nav />
</header>

<main class="relative flex w-full flex-col items-center gap-16 bg-stone-100 pt-16 text-stone-900">
	<slot />
</main>
