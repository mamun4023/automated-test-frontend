// export const userList = [
//     {
//         id: 1,
//         name: "Tohid",
//     },
//     {
//         id: 2,
//         name: "Akram",
//     },
//     {
//         id: 3,
//         name: "Hamid",
//     },
// ];



export type userProps = {
    id : 1,
    name : string,
}


export default function UserList({userList} : {userList : userProps[]} ) {
    if(userList.length == 0) return <p>No user available</p>

    return (
        <div>
            {userList.map((item, index) => (
                <div key={index}> {item.name} </div>
            ))}
        </div>
    );
}
