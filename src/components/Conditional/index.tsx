export type UserProps = {
    id: number;
    name: string;
    isAdmin?: boolean;
};

const User = ({ user }: { user: UserProps }) => {
    return (
        <div>
            <h2>User Profile</h2>
            {user.isAdmin && <button>Edit</button>}
            <div>
                <strong>Name :</strong> {user.name}
            </div>
        </div>
    );
};

export default User;
