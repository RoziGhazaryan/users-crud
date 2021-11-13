import { useHistory } from 'react-router';

const useUsers = () => {
    const history = useHistory();

    const deleteUsers = () => {
        localStorage.removeItem("users");
        window.location.reload(); 
    }

    const deleteUser = (id) => {
        let allUsers = localStorage.getItem("users");
        allUsers = JSON.parse(allUsers).filter((user) => {
            return user.userId !== id;
        });
        localStorage.setItem("users", JSON.stringify(allUsers));
        window.location.reload();
    }

    const editUser = (id) => {
        history.push(`/users/${id}`);
    }

    const users = localStorage.getItem('users');
    const data = JSON.parse(users);

    return { data, deleteUsers, deleteUser, editUser };
}

export default useUsers;