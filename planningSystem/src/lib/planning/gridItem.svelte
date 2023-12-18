<script>
    export let item

    import { createEventDispatcher } from 'svelte'
    import App from '../../App.svelte';
    const dispatch = createEventDispatcher()

    let columnStart = item.start
    let columnSpan = item.end - item.start + 1
    let gridRow = item.board

    let movingLeft =false
    let movement = 0;
    $: moving = false;

    export let hoveringCurrent = 0

    $: if(moving){
        console.log(hoveringCurrent)
        item.planning.day = hoveringCurrent
    }

    $: top = 0;
    $: left = 0;
    function calcPosition(e){

    }
</script>

{#if item.planning.day == 0}
    <div class="item">
        <div class="slider"></div>
        <div class="innerItem {item.planning.day == -1? "moving": ""}" on:mousedown={() => moving = true} role="button" tabindex="-1">{item.name}</div>
        <div class="slider"></div>
    </div>
{:else if item.planning.day == 1}
    <div class="item" style="grid-column: {columnStart} / span {columnSpan}; grid-row: {gridRow};">
        <div class="slider" on:mousedown={() => movingLeft = true} role="button" tabindex="-1"></div>
        <div class="innerItem {item.planning.day == -1? "moving": ""}" on:mousedown={() => moving = true} role="button" tabindex="-1">{item.name}</div>
        <div class="slider" on:mousedown={() => {}} role="button" tabindex="-1"></div>
    </div>
{:else}
    <div class="item">
        <div class="slider"></div>
        <div class="innerItem {item.planning.day == -1? "moving": ""}" style="top: {top}; left: {left}" on:mousedown={() => moving = true} role="button" tabindex="-1">{item.name}</div>
        <div class="slider"></div>
    </div>
{/if}

<svelte:window on:mouseup={() => {moving = false; movement = 0;}} on:mousemove={(e) => {calcPosition(e)}}/>

<style scoped>
    * {
        user-select: none;
    }

    .item {
        width: 100%;
        height: 100%;
        background-color: red;
        display: flex;
        border-radius: 10px;
        overflow: hidden;
    }

    .innerItem {
        width: calc(100% - 40px);
        height: 100%;
        cursor: move;
    }

    .slider {
        height: 100%;
        width: 20px;
        cursor: grab;
        background-color: darkred;
    }

    .moving{
        position: absolute;
        width: 200px;
    }
</style>

<!-- style="grid-column: {columnStart} / span {columnSpan}; grid-row: {gridRow};" -->