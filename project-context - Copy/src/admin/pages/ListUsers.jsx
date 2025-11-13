import { Col, Container, Row, Table, Form } from "react-bootstrap";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { toast } from "react-toastify";

const ListUsers = () => {
  const { users, changeUserStatus, changeUserRole } = useContext(UserContext);

  const handleStatusChange = (userId) => {
      changeUserStatus(userId);
      toast.success("changed");

  };

  const handleRoleChange = (userId, value) => {
      changeUserRole(userId, value);
      toast.success("role changed");
  };

  return (
    <Container>
      <Row>
        <Col>List Users</Col>
      </Row>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email Name</th>
            <th>Status</th>
            <th>Role</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id ?? user.email}>
              <td>{user?.fullName || ""}</td>
              <td>{user?.email ?? ""}</td>

              <td className="text-center v-middle">
                <Form.Check
                  type="switch"
                  id={`custom-switch-${user.id}`}
                  label=""
                  checked={user?.status === true || user?.status === "true"}
                  onChange={() => handleStatusChange(user.id)}
                />
              </td>
              <td>
                <Form.Select
                  defaultValue={user?.role ?? ""}
                  onChange={(e) => handleRoleChange(user.id, e.target.value)}
                >
                  <option value="1">User</option>
                  <option value="2">Admin</option>
                  <option value="3">Seller</option>
                </Form.Select>
              </td>
              <td className="text-center v-middle">
                <Link
                  to={`/admin/edit-user/${user.id}`}
                  className="text-primary"
                >
                  Edit{" "}
                </Link>
              </td>

              <td className="text-center v-middle">
                <span className="text-danger"></span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ListUsers;
