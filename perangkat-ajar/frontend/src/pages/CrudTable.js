import React, { useState } from "react";
import {
  Container,
  Table,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const CrudTable = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1", description: "Description for Item 1" },
    { id: 2, name: "Item 2", description: "Description for Item 2" },
    { id: 3, name: "Item 3", description: "Description for Item 3" },
  ]);
  const [modal, setModal] = useState(false);

  const [currentItem, setCurrentItem] = useState({
    Id: null,
    name: "",
    description: "",
  });

  const toggleModal = () => setModal(!modal);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentItem({ ...currentItem, [name]: value });
  };

  const handleSubmit = () => {
    if (currentItem.id === null) {
      setItems([...items, { ...currentItem, id: items.length + 1 }]);
    } else {
      setItems(
        items.map((item) => (item.id === currentItem.id ? currentItem : item))
      );
      toggleModal();
    }
  };

  const handleEdit = (item) => {
    setCurrentItem(item);
    toggleModal();
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <Container className="d-flex flex-column align-items-center">
      <Button
        color="primary"
        className="my-3"
        onClick={() => {
          setCurrentItem({ id: null, name: "", description: "" });
          toggleModal();
        }}
      >
        {" "}
        Add Item
      </Button>
      <Table bordered className="w-75">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <Button
                  color="warning"
                  className="mr-2"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </Button>
                <Button color="danger" onClick={() => handleDelete(item.id)}>
                  {" "}
                  Delete{" "}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>
          {" "}
          {currentItem.id ? "Edit Item" : "Add Item"}
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                value={currentItem.name}
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="description">Description </Label>
              <Input
                type="text"
                nane="deseription"
                value={currentItem.description}
                onchange={handleInputChange}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onclick={handleSubmit}>
            {currentItem.id ? "Update" : "Add"}
          </Button>
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default CrudTable;
