import axios from 'axios';
import { useState } from 'react'

const GETFORM_FORM_ENDPOINT = "https://getform.io/f/1d7af975-1147-4144-80cb-f2202e26bd8b";


function Form() {
    const [formStatus, setFormStatus] = useState(false);
    const [query, setQuery] = useState({
        name: "",
        email: "",
        nationally: "",
        number: "",
        message: "",
        file: ""
    });

    const handleFileChange = () => (e) => {
        setQuery((prevState) => ({
            ...prevState,
            files: e.target.files[0]
        }));
    };

    const handleChange = () => (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setQuery((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.entries(query).forEach(([key, value]) => {
            formData.append(key, value);
        });

        axios
            .post(
                GETFORM_FORM_ENDPOINT,
                formData,
                { headers: { Accept: "application/json" } }
            )
            .then(function (response) {
                setFormStatus(true);
                setQuery({
                    name: "",
                    email: "",
                    nationally: "",
                    number: "",
                    message: "",
                });
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <div>
            <div class="container-md center-smaller effect8">
                <br />
                <h2 className='text-center'>Formulário de Contato/Contact Form</h2>
                <form
                    acceptCharset="UTF-8"
                    method="POST"
                    enctype="multipart/form-data"
                    id="ajaxForm"
                    onSubmit={handleSubmit}
                >
                    <div className="form-group mb-2">
                        <label for="InputName">Nome/Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="InputName"
                            placeholder="Digite seu nome/Enter your name"
                            required
                            name="name"
                            value={query.name}
                            onChange={handleChange()}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label for="email">E-mail</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            aria-describedby="emailHelp"
                            placeholder="Digite seu e-mail/Enter email"
                            required
                            name="email"
                            value={query.email}
                            onChange={handleChange()}
                        />
                    </div>
                    <div className="form-group">
                        <label for="FormControlSelect1">Nacionalmente/Nationally</label>
                        <select
                            className="form-control"
                            id="FormControlSelect1"
                            required
                            name="nationally"
                            value={query.nationally}
                            onChange={handleChange()}
                        >
                            <option>Selecione um/Select one</option>
                            <option>Brazilian</option>
                            <option>American</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="InputNumber">Número Whatsapp Number</label>
                        <input
                            type="text"
                            className="form-control"
                            id="InputNumber"
                            placeholder="Coloque seu número/Enter your number"
                            required
                            name="number"
                            value={query.number}
                            onChange={handleChange()}
                        />
                    </div>
                    <div className="form-group">
                        <label for="comments">Comente/Comment</label>
                        <textarea

                            className="form-control"
                            id="comments"
                            placeholder="Deixe comentários, perguntas ou comentários aqui./Leave feedback, questions or comments here."
                            required
                            name="message"
                            rows="4"
                            value={query.message}
                            onChange={handleChange()}
                        />
                    </div>
                    <div>
                        <div className="form-group mt-3">
                            <label className="mr-2">Upload file: <span className='text-warning'>Somente quando solicitado, caso contrário, pule esta seção./Only when requested, otherwise skip this section.</span></label>
                            <br />
                            <input name="file" type="file" onChange={handleFileChange()} />
                            <br />
                        </div>
                    </div>
                    <br></br>
                    <hr />
                    <br />
                    {formStatus ? (
                        <div className="text-success mb-2">
                            <br></br>
                            Your message has been sent. We will contact as soon as possible.
                        </div>
                    ) : (
                        ""
                    )}
                    <div className='text-center'>
                        <button type="submit" className="btn btn-info  text-white">Enviar/Submit</button>
                    </div>
                </form>
                <br />
            </div>
        </div>
    );
}

export default Form