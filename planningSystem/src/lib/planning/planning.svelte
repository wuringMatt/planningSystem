<script>
    import Menu from "../menu.svelte";
    import Button from "../button.svelte";

    import Grid from "./grid.svelte";
    import GridItem from "./gridItem.svelte";
    import ItemList from "./itemList.svelte";
    import { getData } from "../scripts/dataManagement";
    import Employees from "../medewerkers/employees.svelte";
    import App from "../../App.svelte";

    $: currentGrid = 0;
    $: moving = false;

    export let db;

    $: employees = [];
    async function dataRetrival(){
        employees = await getData(db, "employees")
    }

    dataRetrival()

    $: hoveringCurrent = 0;
    function setGrid(e){
        hoveringCurrent = e.detail
    }


    let width = 30
    let height = 9
</script>

<section class="page">
    <div class="container">
        <Menu title={"Planning"} filters={true}>
            <Button name={"testin button"} on:emitClick={(event) => {console.log(event.detail.text)}}/>
            <Button type={"toggle"}/>
        </Menu>
        <div class="wrapper">
            <Grid width={width} height={height} grid={1} on:currentGrid={(e)=>{setGrid(e)}}>
                {#if employees}
                    {#each employees as employee}
                        {#if employee.planning.day == 1}
                            <GridItem item={employee} hoveringCurrent={hoveringCurrent} />
                        {/if}
                    {/each}
                {/if}
            </Grid>

            <ItemList on:currentGrid={(e)=>{setGrid(e)}}>
                {#if employees}
                    {#each employees as employee}
                        {#if employee.planning.day == 0}
                            <GridItem item={employee} hoveringCurrent={hoveringCurrent}/>
                        {/if}
                    {/each}
                {/if}
            </ItemList>

            {#if employees}
                {#each employees as employee}
                    {#if employee.planning.day == -1}
                        <GridItem item={employee} hoveringCurrent={hoveringCurrent}/>
                    {/if}
                {/each}
            {/if}
        </div>
    </div>
</section>


<style scoped>
    .page {
        width: calc(100vw - 250px);
        height: 100vh;
        display: grid;
        justify-content: center;
        align-items: center;
    }

    .container{
        width: calc(100vw - 350px);
        height: calc(100% - 100px);
        padding: 50px;
    }

    .wrapper{
        display: flex
    }
</style>

<!-- on:currentGrid={(e)=>{setGrid(e)}} on:movingCenter={(e) => {setMoving(e)}} -->