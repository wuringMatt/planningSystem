<script>
    import Menu from "../menu.svelte";
    import { setData } from "../scripts/dataManagement";

    export let db;

    let obj = {
        name: "",
        email: "",
        birthday: "",
        phoneNumber: "",
        planning: {
            day: 0,
            board: 0,
            start: 0,
            end: 0
        }
    }

    function handleSubmit(e){
        const formData = new FormData(e.target)

        for (let field of formData){
            const [key, value] = field
            if (key == "name"){
                obj.name = value.toString()
            } else if (key == "email"){
                obj.email = value.toString()
            } else if (key == "date"){
                obj.birthday = value.toString()
            } else if (key == "number"){
                obj.phoneNumber = value.toString()
            }
        }

        setData(db, "employees", obj.name, obj)
    }
</script>

<section class="page">
    <div class="container">
        <Menu title={"Nieuwe Medewerker"}/>

        <form action="none" on:submit|preventDefault={handleSubmit}>
            <div class="inputContainer">
                <label for="name">Naam</label>
                <input name="name" type="text">
            </div>

            <div class="inputContainer">
                <label for="email">Email</label>
                <input name="email" type="email">
            </div>

            <div class="inputContainer">
                <label for="date">Geboorte Datum</label>
                <input name="date" type="Date">
            </div>

            <div class="inputContainer">
                <label for="number">Telefoon Nummer</label>
                <input name="number" type="text">
            </div>
            <button type="submit">Aanmaken</button>
        </form>
    </div>
</section>

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

    form{
        display: grid;
        columns: 1;
        width: 350px;
        height: 400px;
        gap: 10px;
        position: relative;
        top: 20px;
    }

    .inputContainer{
        display: grid;
        grid-template-rows: 25px 50px;
    }
</style>