const useUsers = () => {

    const deleteUsers = () => {
        localStorage.removeItem("users");
        window.location.reload(); 
    }

    const deleteUser = (id) => {
        let allUsers = localStorage.getItem("users");
        allUsers = JSON.parse(allUsers).filter((user) => {
            return user.id !== id;
        });
        localStorage.setItem("users", JSON.stringify(allUsers));
        window.location.reload();
    }

    const users = localStorage.getItem('users');
    const data = JSON.parse(users);

    return { data, deleteUsers, deleteUser };
}

export default useUsers;