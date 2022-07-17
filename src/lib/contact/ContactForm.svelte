<script>
	import { slide } from 'svelte/transition';
	import capitalize from '$lib/utils/capitalize.js';
	import Label from '$lib/tags/Label.svelte';
	import Input from '$lib/tags/Input.svelte';
	import Textarea from '$lib/tags/Textarea.svelte';

	// slide options
	const delay = 250;
	const duration = 250;

	// form
	let formIncomplete = false;
	let disabled = false;
	// inputs
	let inputs = ['name', 'email'];

	let clicked = false;
	let sent = false;
	let textColor = 'text-black';
	let bgColor = 'bg-amber-600';

	const formHandler = (e) => {
		e.preventDefault();
		const formData = new FormData(form);

		const name = formData.get('name');
		const email = formData.get('email');
		const message = formData.get('message');

		if (name === '' || email === '' || message === '') {
			return (formIncomplete = true);
		}

		formIncomplete = false; // remove form incomplete notification
		clicked = true; // starts button text fade
		disabled = true; // disabled form inputs and submit button
		textColor = 'text-white';
		bgColor = 'bg-storm';

		// send formData to nodemailer api
		fetch('/api/form', {
			method: 'POST',
			body: formData
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.success) {
					sent = true;
				}
			});
	};
</script>

<form id="form" on:submit={formHandler} class="w-full">
	<fieldset class="flex flex-col items-start justify-center">
		{#each inputs as input}
			<Label labelFor={input}>{capitalize(input)}</Label>
			<Input name={input} id={input} {disabled} />
		{/each}
		<Label labelFor="message">Message</Label>
		<Textarea name="message" id="message" {disabled} />
	</fieldset>
	{#if formIncomplete}
		<p
			in:slide|local={{ delay: delay, duration: duration }}
			out:slide|local={{ delay: 0, duration: duration }}
			class="mb-4 rounded-lg border-2 border-red-400 bg-red-100 p-2 font-semibold"
		>
			Form is incomplete. Please fill out all forms and try again.
		</p>
	{/if}
	{#if !sent}
		<button
			{disabled}
			type="submit"
			class="flex rounded-lg p-2.5 text-left {textColor} font-bold {bgColor}
			hover:bg-amber-700 disabled:border-2 disabled:border-stone-200 disabled:bg-stone-100"
		>
			{#if !clicked}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="mt-1 mr-1"
					viewBox="0 0 16 16"
				>
					<path
						d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"
					/>
				</svg>
				<span class="whitespace-nowrap">Send Message</span>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					fill="currentColor"
					class="mt-1 mr-1"
				>
					<circle
						cx="10"
						cy="10"
						r="8"
						stroke-dasharray="40"
						class="origin-center animate-spin fill-transparent stroke-amber-600 stroke-2"
					/>
				</svg>
			{/if}
		</button>
	{:else if sent}
		<p class="rounded-lg border-2 border-green-300 bg-green-100 p-2.5">Message sent!</p>
	{/if}
</form>
