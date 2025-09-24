import Table from 'react-bootstrap/Table';

function UserTable({ users }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>Username</th>
          <th>Password</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, i) => (
          <tr key={i}>
            <td>{user.id}</td>
            <td>{user.email}</td>
            <td>{user.username}</td>
            <td>{user.password}</td>
            <td>{`${user.address.number}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default UserTable;