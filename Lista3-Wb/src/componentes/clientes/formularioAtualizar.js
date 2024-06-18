import React, { useState } from "react";
import { useParams } from "react-router-dom";

const buttonStyle = `btn waves-effect waves-light purple darken-2 deep-purple lighten-2`;

const validateCpf = (cpf) => cpf.length === 11;
const validatePhoneNumber = (phone) => phone.length === 11;
const validateRg = (rg) => rg.length === 9;

const UpdateClientFormComponent = () => {
  const { clientId } = useParams();
  const [formState, setFormState] = useState({
    name: "",
    socialName: "",
    gender: "",
    cpf: "",
    cpfIssueDate: "",
    rgQuantity: "",
    rg: "",
    rgIssueDate: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleUpdateClick = () => {
    if (!validateCpf(formState.cpf)) {
      alert("Invalid CPF!");
      return;
    }

    if (!validatePhoneNumber(formState.phone)) {
      alert("Invalid phone number!");
      return;
    }

    if (!validateRg(formState.rg)) {
      alert("Invalid RG!");
      return;
    }

    alert("Client updated successfully!");
  };

  return (
    <div className="card">
      <div className="card-content">
        <span className="card-title">Update Client Information</span>
        <div className="input-field col s12">
          <input
            id="name"
            type="text"
            value={formState.name}
            onChange={handleInputChange}
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className="input-field col s12">
          <input
            id="socialName"
            type="text"
            className="validate"
            value={formState.socialName}
            onChange={handleInputChange}
          />
          <label htmlFor="socialName">Social Name</label>
        </div>
        <div className="input-field col s12">
          <label htmlFor="gender" style={{ marginTop: '1rem', marginRight: '200px' }}>
            Gender
          </label>
          <br />
          <br />
          <br />
          <select
            id="gender"
            value={formState.gender}
            onChange={(e) => handleInputChange(e)}
            className="browser-default"
          >
            <option value="" disabled>
              Select
            </option>
            <option value="feminino">Feminino</option>
            <option value="masculino">Masculino</option>
            <option value="outro">Outro</option>
          </select>
        </div>
        <div className="input-field col s12">
          <input
            id="cpf"
            type="text"
            className="validate"
            value={formState.cpf}
            onChange={handleInputChange}
          />
          <label htmlFor="cpf">CPF</label>
        </div>
        <div className="input-field col s12">
          <input
            id="rg"
            type="text"
            className="validate"
            value={formState.rg}
            onChange={handleInputChange}
          />
          <label htmlFor="rg">RG</label>
        </div>
        <div className="input-field col s12">
          <input
            id="phone"
            type="text"
            className="validate"
            value={formState.phone}
            onChange={handleInputChange}
          />
          <label htmlFor="phone">Phone</label>
        </div>
        <div className="row">
          <div className="col s12">
            <button className={buttonStyle} onClick={handleUpdateClick}>
              Update
              <i className="material-icons right">edit</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateClientFormComponent;