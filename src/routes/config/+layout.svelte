<script>
	import Header from '$lib/header/Header.svelte';
</script>
<div class="">
	<Header />
	<div class="w-full max-w-screen-lg mx-auto py-16">
		
		<main>
			<slot />
		</main>
		
		<footer>
			<!-- <p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p> -->
		</footer>
	</div>

</div>
