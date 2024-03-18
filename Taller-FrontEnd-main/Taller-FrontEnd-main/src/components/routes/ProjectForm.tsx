import React, { useState } from 'react';
import styled from 'styled-components';
import { themes } from '../../styles/ColorStyles';
import { Caption } from '../../styles/TextStyles';
import { displayFormData } from '../../utils/mock-response';

function ProjectForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [version, setVersion] = useState('');
    const [link, setLink] = useState('');
    const [tag, setTag] = useState('');
    const [formDataDisplay, setFormDataDisplay] = useState('');

    const handleSubmit = (event: any) => {
        event.preventDefault();
        
        const formData = { title, description, version, link, tag };

        const formDataString = displayFormData(formData);
        setFormDataDisplay(formDataString);

        setTitle('');
        setDescription('');
        setVersion('');
        setLink('');
        setTag('');
        
    };

    return (
        <Container>
        <Wrapper>
            <TitleForm>Project Input</TitleForm>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <label>
                        Title:
                        <Input
                            type="text"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                        />
                    </label>
                </FormGroup>
                <FormGroup>
                    <label>
                        Description:
                        <Input
                            type="text"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                    </label>
                </FormGroup>
                <FormGroup>
                    <label>
                        Version:
                        <Input
                            type="text"
                            value={version}
                            onChange={(event) => setVersion(event.target.value)}
                        />
                    </label>
                </FormGroup>
                <FormGroup>
                    <label>
                        Link:
                        <Input
                            type="text"
                            value={link}
                            onChange={(event) => setLink(event.target.value)}
                        />
                    </label>
                </FormGroup>
                <FormGroup>
                    <label>
                        Tag:
                        <Input
                            type="text"
                            value={tag}
                            onChange={(event) => setTag(event.target.value)}
                        />
                    </label>
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>           
        </Wrapper>
        <FormDataDisplay>{formDataDisplay}</FormDataDisplay>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FormDataDisplay = styled.div`
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-top: 20px;
    white-space: pre-line; 
`;

const Wrapper = styled.div`
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 8px;
    ${themes.light.card};

    @media (prefers-color-scheme: dark) {
        ${themes.dark.card};
    }
`;

const TitleForm = styled(Caption)`
    text-align: center;
    margin-bottom: 20px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const FormGroup = styled.div`
    margin-bottom: 20px;

    label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
    }
`;

const Input = styled.input`
    width: 100%;
    height: 36px;
    padding: 0 10px;
    border: 1px solid ${themes.light};
    border-radius: 4px;
    background-color: ${themes.light.backgroundForm};
    color: ${themes.light.text1};

    @media (prefers-color-scheme: dark) {
        border-color: ${themes.dark};
        background-color: ${themes.dark.backgroundForm};
        color: ${themes.dark.text1};
    }
`;

const Button = styled.button`
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 4px;
    background-color: ${themes.light.primary};
    color: ${themes.dark.text1};
    cursor: pointer;

    @media (prefers-color-scheme: dark) {
        background-color: ${themes.dark.primary};
    }
`;

export default ProjectForm;
