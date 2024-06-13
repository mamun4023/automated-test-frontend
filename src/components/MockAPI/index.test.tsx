

it("None Admin User", async()=>{
    const resp = await fetch("/users")
    const data = await resp.json();

    console.log(data)
})

