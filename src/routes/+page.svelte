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
		<h1>
			<span class="welcome">
				<picture class="w-16">
					<img srcset="/cropped-iso.webp" type="image/webp" alt="Logo de Beseller" class="w-20 mx-auto"/>
				</picture>
			</span>
	
		</h1>
	
		<div>
			<form class="card shadow flex items-center space-x-2 text-lg" on:submit|preventDefault="{save}" >
				<div class="grow text-lg">
					<input type="text" id="title" bind:value={title} class="text-lg" placeholder="Nombre de la Tienda">
				</div>
				<div>
					<button type class="btn primary text-lg">
						Comenzar a Vender
					</button>
				</div>
			</form>
		</div>
	</div>

</section>
