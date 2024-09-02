import useAuth from "../../../hooks/useAuth";

function UserHome() {
  const { user } = useAuth();

  return (
    <div>
      <h2 className="text-3xl">
        Hi, Welcome {user?.displayName ? user.displayName : "Back"}
      </h2>
    </div>
  );
}

export default UserHome;
