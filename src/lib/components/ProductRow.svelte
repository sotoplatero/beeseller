<script>
    import { shop } from '$lib/db'
    export let product = {}

    const srcImg = (path) => `https://webapi.pepeganga-api.com:8443/landing/image/api/bucket/download-file-from-store-bucket?pathFile=${path}&prefix=medium/`

    const percentGain = 0.75
    const addProductToCatalog = () => {
        $shop.catalog = [ ...$shop.catalog, product  ]
    }   

</script>

    <td class="grow title font-bold uppercase text-xs sm:text-sm">
        { product.catalogDescrip }
    </td>
    <td class="price text-right">
        { product.pricePesos }
    </td>
    <td class="price-sale font-bold text-right">
        { product.priceSale }
    </td>
    <td class="gain text-right">
        <span class="bg-green-100 text-green-600 text-sm font-bold p-1 px-2 rounded ">
            { Math.round(( product.priceSale - product.pricePesos ) ) }
        </span>
    </td>
    <td class="text-right">
        <button on:click={addProductToCatalog} class="btn secondary ml-auto p-2 rounded">+</button>
    </td>


