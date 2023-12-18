<script>
    import Planning from "./planning/planning.svelte"
    import Employees from "./medewerkers/employees.svelte";
    import NewEmployee from "./nieuweMedewerker/newEmployee.svelte";

    import { initializeApp } from 'firebase/app';
    import { firebaseConfig } from './scripts/firebaseConfig';
    import { getFirestore } from 'firebase/firestore';
    import { editDoc, getData, setData } from "./scripts/dataManagement";

    $: currentPage = "planning";

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const obj = {
            first: "Ada",
            last: "Love",
            born: 1930
        }

    async function handle(){
        await setData(db, "employees", "Ada", obj)
        await editDoc(db, "employees", "Ada", {last: "money"})
    }

</script>

<main>
    <div class="navigation-container">
        <div>
            <button on:click={() => {currentPage = "planning"}}>Planning</button>
            <button on:click={() => {currentPage = "employees"}}>Medewerkers</button>
            <button on:click={() => {currentPage = "newEmployee"}}>Nieuwe Medewerker</button>
        </div>
    </div>

    {#if currentPage == "planning"}
        <Planning db={db}/>
    {:else if currentPage == "employees"}
        <Employees db={db}/>
    {:else if currentPage == "newEmployee"}
        <NewEmployee db={db}/>
    {/if}
</main>

<style scoped>
    main{
        display: flex;
    }
    
    .navigation-container{
        width: 250px;
        height: 100vh;
        background-color: #12487A;
        align-items: center;
        display: grid;
    }

    button{
        width: 100%;
        height: 50px;
        border: none;
        color: white;
        background-color: #12487A;
    }

    button:hover{
        background-color: white;
        color: black;
    }

</style>