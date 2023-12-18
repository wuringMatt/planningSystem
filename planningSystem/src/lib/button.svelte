<script>
    import { createEventDispatcher } from 'svelte';

    export let type = "button";
    export let name = "empty";

    const dispatch = createEventDispatcher();

    let value;

    function buttonClick() {
        dispatch('emitClick', {text:value});
        console.log("emitted button click")
    }

    

</script>

{#if type == "button"}
    <button on:keydown={() => {value = true; buttonClick;}}>
        <p>{name}</p>
    </button>
{:else if type == "toggle"}
    <div class="toggleWrapper">
        <div class="option op1" on:keydown={() => {value = "op1"; buttonClick;}} role="button" tabindex="0"><p>dag</p></div>
        <div class="option op2"><p>week</p></div>
    </div>
{/if}

<style scoped>
    button{
        height: 100%;
        border-radius: 10px;
        border: none;
        background-color: white;
        margin-right: 10px;
        cursor: pointer;
    }

    p{
        padding-left: 10px;
        padding-right: 10px;
    }

    .toggleWrapper {
        display: flex;
        height: 100%;
        background-color: white;
        border-radius: 10px;
        align-items: center;
    }

    .op1{
        margin-left: 3px;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        background-color: #D9D9D9;
    }

    .op2{
        margin-right: 3px;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }

    .option {
        height: calc(100% - 6px);
        justify-content: center;
        align-items: center;
        display: flex;
        cursor: pointer;
    }

    
</style>