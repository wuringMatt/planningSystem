<script>
    import { createEventDispatcher } from "svelte";

    export let active = false;

    const dispatch = createEventDispatcher();
    function toggleActive(){
        console.log("sent")
        dispatch("toggleActive", false)
    }
</script>

<section class="modalBackground" style={active? "display: grid;": "display: none;"} on:keydown={()=>{}} on:click={() => toggleActive} role="button" tabindex="0">
    <div class="modal">
        <h1 class="title">New Employee</h1>
    </div>
</section>

<style scoped>

    .modalBackground{
        position: absolute;
        top:0;
        left:0;
        background-color: #00000050;
        width: 100vw;
        height: 100vh;
        z-index: 5;
        justify-content: center;
        align-items: center;
    }

    .modal{
        width: 600px;
        height: 800px;
        background-color: white;
        border-radius: 50px;
    }

    .title{
        display: flex;
        align-items: center;
        padding: 10%;
        font-size: xx-large;
    }

</style>