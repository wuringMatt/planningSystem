<script>
    import EmployeeList from "./employeeList.svelte";
    import EmployeeListItem from "./employeeListItem.svelte";
    import NewEmployeeModal from "./newEmployeeModal.svelte";
    import { getData } from "../scripts/dataManagement";

    import Menu from "../menu.svelte";
    import Button from "../button.svelte";

    export let db;

    $: active = false;

    $: employees = [];
    async function getEmployees(){
        employees = await getData(db, "employees")
    } 

    getEmployees();

</script>

<section class="page">
    <div class="container">
        <Menu title={"Medewerkers"}/>
        <EmployeeList>
            {#if employees}
                {#each employees as employee }
                    <EmployeeListItem employee={employee}/>
                {/each}
            {/if}
        </EmployeeList>
    </div>
</section>

<NewEmployeeModal active={active} on:toggleActive={(e) => {active = e.detail}}/>

<style scoped>
    .page {
        width: calc(100vw - 250px);
        height: 100vh;
    }

    .container{
        width: calc(100vw - 350px);
        height: calc(100% - 100px);
        padding: 50px;
    }
</style>