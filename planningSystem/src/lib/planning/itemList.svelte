<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher()

    let grid = 0;
    let currentGrid;

    function mouseOver(e){
        currentGrid = grid
        dispatch("currentGrid", currentGrid)
    }

    function mouseLeave(e){
        currentGrid = -1
        dispatch("currentGrid", currentGrid)
    }
</script>

<div class="list" on:mouseover={mouseOver} on:mouseleave={mouseLeave} on:focus={()=>{}} role="button" tabindex="0">
    <div class="listGrid">
        <slot/>
    </div>
</div>

<style scoped>
    .list{
        position: relative;
        top: 10px;
        left: 20px;

        display: block;
        background-color: #D9D9D9;
        width: 300px;
        height: 800px;
    }

    .listGrid{
        display: grid;
        padding: 20px;
        height: calc(100% - 40px);
        grid-template-columns: 1fr;
        grid-template-rows: repeat(15, 1fr);
        grid-gap: 10px;
    }
</style>