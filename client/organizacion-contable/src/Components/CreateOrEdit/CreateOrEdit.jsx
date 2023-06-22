import { React, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  create,
  edit,
} from '../requests';
import Swal from 'sweetalert2';


import './CreateOrEdit.css';
import '../FormsGlobal.css';

function CreateOrEdit({ data }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [editado] = useState(isEdit());
  const [input, setInput] = useState({
    name: '',
    price: '',
    description: '',
    weight: '',
    height: '',
    ram: '',
    storage: '',
    camera: '',
    display: '',
    batery: '',
    image: '',
    brands: '',
    quantity: '',
  });

  useEffect(() => {
    if (editado) {
      setInput({
        id: data.id,
        name: data.name,
        description: data.description,
        brands: data.brands,
        weight: data.weight,
        height: data.height,
        ram: data.ram,
        storage: data.storage,
        camera: data.camera,
        display: data.display,
        batery: data.batery,
        price: data.price,
        image: data.image ? data.image : '',
        quantity: data.quantity,
      });
    }
  }, [dispatch, editado, data]);

  function isDisabledSubmit() {
    return !input.name || !input.price;
  }

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  function isEdit() {
    return data && Object.keys(data).length;
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if (editado) {
      try {
        await edit(`editarProductosById/${input.id}`, input);
        Swal.fire({position: 'top-end',
            imageUrl: 'https://res.cloudinary.com/dc8w6pspj/image/upload/v1662498810/sucess_otelvh.png',
            imageWidth: 80,
            imageHeight: 80,
            text: 'Producto actualizado existosamente',
            showConfirmButton: false,
            timer: 800,
            width: '12rem',
            height: '5rem',
            padding:'0.5rem',
        })
        navigate('/');
      } catch (error) {
        Swal.fire({position: 'top-end',
        imageUrl: 'https://res.cloudinary.com/henrysburgers/image/upload/v1659301854/error-henrys_zoxhtl.png',
        imageWidth: 80,
        imageHeight: 80,
        text: ' Opps.. no se pudo actualizar el producto',
        showConfirmButton: false,
        timer: 800,
        width: '12rem',
        height: '5rem',
        padding:'0.5rem',
    }) 
      }
    } else {
      try {
        const data = {...input, id: undefined};
        await create('createProductos', data);
        Swal.fire({position: 'top-end',
            imageUrl: 'https://res.cloudinary.com/dc8w6pspj/image/upload/v1662498810/sucess_otelvh.png',
            imageWidth: 80,
            imageHeight: 80,
            text: 'Producto agregado existosamente',
            showConfirmButton: false,
            timer: 800,
            width: '12rem',
            height: '5rem',
            padding:'0.5rem',
        })
        navigate('/')
      } catch (error) {
        Swal.fire({position: 'top-end',
            imageUrl: 'https://res.cloudinary.com/henrysburgers/image/upload/v1659301854/error-henrys_zoxhtl.png',
            imageWidth: 80,
            imageHeight: 80,
            text: ' Opps.. no se pudo agregar el producto',
            showConfirmButton: false,
            timer: 800,
            width: '12rem',
            height: '5rem',
            padding:'0.5rem',
        }) 
      }
    }
  };

  return (
    <Container className="mb-5">
      <h2>{edit ? 'Editar Producto' : 'Crear Producto'}</h2>
      <hr />
      <div className="editBurger__container">
        <img
          src={input.image}
          alt="img not"
          className="editOrCreate__img"
        ></img>

        <Form className="editOrCreate__form">
          <hr />
          <Row className="mb-3">
            <Form.Group as={Col} controlId="burgerName">
              <Form.Label>Name *</Form.Label>
              <Form.Control
                placeholder="Nombre *"
                onChange={onChange}
                type="text"
                value={input.name}
                name="name"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="burgerPrice">
              <Form.Label>Price *</Form.Label>
              <Form.Control
                placeholder="Precio *"
                onChange={onChange}
                type="number"
                value={input.price}
                name="price"
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="uploadImgBurger">
              <Form.Label>Image</Form.Label>
              <Form.Control
                placeholder="Url de la imagen"
                type="file"
                name="image"
              ></Form.Control>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="burgerPrice">
              <Form.Label>Weight *</Form.Label>
              <Form.Control
                placeholder="Weight *"
                onChange={onChange}
                type="number"
                value={input.weight}
                name="weight"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="burgerPrice">
              <Form.Label>Height *</Form.Label>
              <Form.Control
                placeholder="Height *"
                onChange={onChange}
                type="number"
                value={input.height}
                name="height"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="burgerPrice">
              <Form.Label>Ram *</Form.Label>
              <Form.Control
                placeholder="Ram *"
                onChange={onChange}
                type="number"
                value={input.ram}
                name="ram"
              />
            </Form.Group>

            <Form.Group>
              <div className="editOrCreate__mainContainer"></div>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="burgerPrice">
              <Form.Label>Storage *</Form.Label>
              <Form.Control
                placeholder="Storage *"
                onChange={onChange}
                type="number"
                value={input.storage}
                name="storage"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="burgerPrice">
              <Form.Label>Camera *</Form.Label>
              <Form.Control
                placeholder="Camera *"
                onChange={onChange}
                type="number"
                value={input.camera}
                name="camera"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="burgerPrice">
              <Form.Label>Display *</Form.Label>
              <Form.Control
                placeholder="Display *"
                onChange={onChange}
                type="number"
                value={input.display}
                name="display"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="burgerPrice">
              <Form.Label>Brand *</Form.Label>
              <Form.Control
                placeholder="Brand *"
                onChange={onChange}
                type="text"
                value={input.brands}
                name="brands"
              />
            </Form.Group>

            <Form.Group>
              <div className="editOrCreate__mainContainer"></div>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="burgerPrice">
              <Form.Label>Batery *</Form.Label>
              <Form.Control
                placeholder="Batery *"
                onChange={onChange}
                type="number"
                value={input.batery}
                name="batery"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="burgerPrice">
              <Form.Label>Quantity *</Form.Label>
              <Form.Control
                placeholder="Quantity *"
                onChange={onChange}
                type="number"
                value={input.quantity}
                name="quantity"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="burgerPrice">
              <Form.Label>Description *</Form.Label>
              <Form.Control
                placeholder="Description *"
                onChange={onChange}
                type="text"
                value={input.description}
                name="description"
              />
            </Form.Group>

            <Form.Group>
              <div className="editOrCreate__mainContainer"></div>
            </Form.Group>
          </Row>

          <Button
            onClick={onSubmit}
            variant="primary"
            type="submit"
            disabled={isDisabledSubmit()}
          >
            Confirmar
          </Button>

          
        </Form>
      </div>
      <hr />
    </Container>
  );
}

export default CreateOrEdit;
