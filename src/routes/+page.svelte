<script>
	import {shop} from '$lib/db'
	import {onMount} from 'svelte'
	import {goto} from '$app/navigation'

	let title = ''
	const routeShop = '/config/shop'

	onMount(()=>{
		if (!!$shop.name) {
			goto(routeShop)
		}
	})

	const save = () => {
        $shop.name = title
		$shop.slug = title.toLowerCase().replace(' ','-')
        goto(routeShop)
    } 

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="BeeSeller demo app" />
</svelte:head>

<section class="flex items-center justify-center h-screen">
	<div  class="w-full max-w-screen-md">
		<h1 class="text-center text-2xl sm:text-6xl mb-6">
			<div class="">
				<img srcset="/cropped-iso.webp" type="image/webp" alt="Logo de Beseller" class="w-24 mx-auto"/>
			</div>
			<div class="relative">Crea tu tienda <span class="font-bold text-orange-500 z-20 relative">Gratis<span class="w-full z-10 transition-all absolute ease-out duration-300 bg-bee/60 h-3 sm:h-6 bottom-0 left-0 skew-x-12 -rotate-3"></span></span></div>
	
		</h1>
	
		<div>
			<form class="card shadow flex items-center space-x-2 text-lg" on:submit|preventDefault="{save}" >
				<div class="grow text-lg">
					<input type="text" id="title" bind:value={title} class="text-lg" placeholder="Nombre de la Tienda">
				</div>
				<div>
					<button type class="btn primary text-lg">
						<span class="hidden sm:inline mr-2">Comenzar a Vender</span>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
						  </svg>
					</button>
				</div>
			</form>
		</div>
	</div>

</section>
