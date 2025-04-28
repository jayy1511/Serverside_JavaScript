function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <div className="text-center mt-10 text-white">No user data available.</div>;
  }

  return (
    <div className="text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <div className="bg-[#4F4F4F] p-6 rounded-lg shadow-lg w-80">
        <p><strong>First Name:</strong> {user.firstName}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
      </div>
    </div>
  );
}

export default Profile;
