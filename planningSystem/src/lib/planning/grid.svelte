<script>
    export let width = 30;
    export let height = 9;
    export let grid = 0;

    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()

    let currentGrid = 0;
    let moiving = false;

    function mouseOver(e){
        currentGrid = grid
        dispatch("currentGrid", currentGrid)
    }

    function mouseLeave(e){
        currentGrid = -1
        dispatch("currentGrid", currentGrid)
    }

</script>

<div class="wrapper">
    <div class="grid lower" style="--grid-width: {width}; --grid-height: {height}">
        {#each {length: (width * height)} as _} 
            <div class="white"></div>
        {/each}
    </div>
    <div class="grid higher" style="--grid-width: {width}; --grid-height: {height}" on:focus={() => {}} on:mouseover={(e) => {mouseOver(e)}} on:mouseleave={(e) => {mouseLeave(e)}} role="grid" tabindex="0">
        <slot />
    </div>
</div>

<style scoped>

    .wrapper{
        position: relative;
    }

    .grid{
        display: grid;
        padding: 1px;
        width: calc(var(--grid-width) * 40px);
        height: calc(var(--grid-height) * 40px);
        grid-template-columns: repeat(var(--grid-width), 1fr);
        grid-template-rows: repeat(var(--grid-height), 1fr);
        grid-gap: 1px;
    }

    .lower {
        background-color: #D9D9D9;
    }

    .higher {
        position: absolute;
        top: 0;
    }

    .grid > * {
        width: 100%;
        height: 100%;
    }

    .grid > .white {
        background-color: white;
    }

</style>