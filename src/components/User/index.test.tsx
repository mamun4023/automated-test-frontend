// import {render, screen} from '@testing-library/react'
// import Index, {UserProps} from './index'


// it("Admin User", ()=>{
//     const user : UserProps = {id : 1, name : "Tohid", isAdmin : true}

//     render(<Index user={user} />)
//     expect(screen.getByRole('button')).toBeInTheDocument()
// })




it("None Admin User", async()=>{
    const resp = await fetch("/users")
    const data = await resp.json();

    console.log(data)
})

