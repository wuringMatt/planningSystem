<script>
    export let title = "";
    export let filters = false;
</script>

<div class="menu">
    <div class="title">
        <h1>{title}</h1>
    </div>
    {#if filters == true}
        <div class="filterBar">
            <div class="filters">
                <slot />
            </div>
        </div>
    {/if}
</div>

<style scoped>
    .menu{
        width: 100%;
        border-top-right-radius: 50px;
        overflow: hidden;
    }

    .title{
        height: 80px;
        background-color: #12487A;
        display: flex;
        align-items: center;
    }

    h1{
        position: relative;
        left: 50px;
        color: white;
        font-size: x-large;
        font-weight: bold;
    }
    
    .filterBar{
        height: 30px;
        background-color: #EC6A20;
        padding: 10px;
        padding-left: 0px;
    }

    .filters{
        position: relative;
        left: 50px;
        height: 100%;
        display: flex;
    }
</style>