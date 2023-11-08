import React, { useState } from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';


//--- Functions ---


// export default function ()

export default function RegistrationForm() {

  // Variable to recieve the user inputes for Profile page

    const [formData, setFormData] = useState({
        profileImage: null,
        firstName: '',
        lastName: '',
        gender: 'Male',
        address: '',
        age: '',
        height: '',
        weight: '',
        bmiNumber: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        const image = e.target.files[0];
        setFormData({
            ...formData,
            profileImage: image,
        });
    };
// BMI calculation for the user 

    const calculateBMI = () => {
        const heightInMeters = formData.height / 100;
        const weightInKg = formData.weight;
        const bmi = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
        setFormData({
            ...formData,
            bmiNumber: bmi,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        calculateBMI(); // Calculate BMI before submitting
        // You can now submit the formData to your server or process it as needed.
    };

    return (
        <Container>
            <h2 className="mt-3">Registration Form</h2>
            <Form onSubmit={handleSubmit}>
                {/* <Form.Group>
                    <Form.Label>Profile Image</Form.Label>
                    <Form.File name="profileImage" custom>
                         <Form.File.Input onChange={handleImageChange} /> 
            </Form.File>
        </Form.Group> */}
                <Row >
                    <Col>
                        <Form.Group>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
                        </Form.Group>
                    </Col>
                </Row >
                <Form.Group>
                    <Form.Label>Gender</Form.Label>
                    <Form.Control as="select" name="gender" value={formData.gender} onChange={handleInputChange}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Address</Form.Label>
                    <Form.Control as="textarea" name="address" value={formData.address} onChange={handleInputChange} />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="number" name="age" value={formData.age} onChange={handleInputChange} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Height (cm)</Form.Label>
                            <Form.Control type="number" name="height" value={formData.height} onChange={handleInputChange} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Weight (kg)</Form.Label>
                            <Form.Control type="number" name="weight" value={formData.weight} onChange={handleInputChange} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>BMI Number</Form.Label>
                            <Form.Control type="text" name="bmiNumber" value={formData.bmiNumber} readOnly />
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form >
        </Container >
    );
};
//--- Functions ---