<script>
    import { createEventDispatcher } from 'svelte';
    export let product = {}

    const srcImg = (path) => `https://webapi.pepeganga-api.com:8443/landing/image/api/bucket/download-file-from-store-bucket?pathFile=${path}&prefix=medium/`
    const dispatch = createEventDispatcher();

</script>

<div class="flex flex-col w-full h-full border border-gray-100 bg-white rounded-xl overflow-hidden" on:click>
    <div class="aspect-square">
        <!-- <img src="{srcImg(product.images[0])}" alt=""> -->
    </div>
    <div class="grow pt-2 pb-6 px-8 text-center">
        <div class="font-bold " >
            <span>UYU</span>
            <span>
                {product.pricePesos}
            </span>
        </div>
        <div class="font-bold text-gray-700 text-xs uppercase">
            {product.catalogDescrip}
        </div>
        <button on:click="{() => dispatch('add', product)}" class="btn primary p-2 px-3 text-white mt-4 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
        </button>
    </div>
</div>