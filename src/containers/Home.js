import React from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

const Home = () => {
    return (
        <Container>
            <div className="d-flex align-items-center flex-column mt-5 text-center">
                <h1 className="display-6">Is your name lucky by numerology?</h1>
                <p className="lead">Calculate to have a lucky name.</p>
            </div>

            <Form className="my-4 mx-2 d-flex align-items-center flex-column">
                <FormGroup className="d-sm-flex my-3">
                    <Label for="bdate" className="me-3 lead form__label">
                        Enter birthdate
                    </Label>
                    <Input
                        type="date"
                        name="bdate"
                        className="date-input"
                        id="bdate"
                    />
                </FormGroup>

                <FormGroup className="d-sm-flex my-3">
                    <Label for="bdate" className="me-3 lead form__label">
                        Enter name
                    </Label>
                    <Input
                        type="text"
                        name="name"
                        className="date-input"
                        placeholder="Name"
                        id="name"
                    />
                </FormGroup>
            </Form>

            <div className="w-100 d-flex justify-content-center">
                <Button outline color="secondary" disabled className="m-auto">
                    Primary
                </Button>
            </div>
        </Container>
    );
};

export default Home;
