import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
    formErrors: {
      nameErr: null,
      emailErr: null,
      subjectErr: null,
      messageErr: null,
    },
  };

  onFormSubmit = async (e) => {
    await this.validateFields();
    const isNoErrors = Object.values(this.state.formErrors).every(
      (error) => error === null
    );

    if (!isNoErrors) {
      e.preventDefault();
    } else {
      this.props.history.push("/");
    }
  };

  validateFields = () => {
    const { name, email, subject, message } = this.state;

    const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g;

    for (let property in this.state) {
      switch (property) {
        case "name":
          if (!nameRegex.test(name) || name.length < 3) {
            this.copyPrevStateForm({
              nameErr: "Veuillez rentrer un prénom valide",
            });
          } else {
            this.copyPrevStateForm({ nameErr: null });
          }
          break;
        case "email":
          if (!emailRegex.test(email)) {
            this.copyPrevStateForm({
              emailErr: "Veuillez rentrer un email valide",
            });
          } else {
            this.copyPrevStateForm({ emailErr: null });
          }
          break;
        case "subject":
          if (subject.length < 3) {
            this.copyPrevStateForm({
              subjectErr: "Votre objet doit avoir plus de 3 lettres",
            });
          } else {
            this.copyPrevStateForm({ subjectErr: null });
          }
          break;
        case "message":
          if (message.length < 3) {
            this.copyPrevStateForm({
              messageErr: "Votre message doit avoir plus de 3 lettres",
            });
          } else {
            this.copyPrevStateForm({ messageErr: null });
          }
          break;
        default:
      }
    }
  };
  copyPrevStateForm(newObj) {
    this.setState((prevState) => {
      return {
        ...prevState,
        formErrors: {
          ...prevState.formErrors,
          ...newObj,
        },
      };
    });
  }

  onInputChange = (e) => {
    let inputName = e.target.name;
    let value = e.target.value;
    this.setState((prevState) => {
      const obj = { ...prevState };
      obj[inputName] = value;
      return obj;
    });
  };
  render() {
    return (
      <form
        action="/contact"
        className="contact-form"
        onSubmit={this.onFormSubmit}
        name="contact"
        method="post"
      >
        <h3>Envoyer un message</h3>
        <div className="field">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nom et prénom"
            className={`input ${!!this.state.formErrors.nameErr &&
              "error-input"}`}
            onChange={this.onInputChange}
            value={this.state.name}
          />
          {!!this.state.formErrors.nameErr && (
            <p className="error">{this.state.formErrors.nameErr}</p>
          )}
        </div>
        <input type="hidden" name="form-name" value="contact" />
        <div className="field">
          <input
            value={this.state.email}
            onChange={this.onInputChange}
            type="text"
            name="email"
            id="email"
            placeholder="Adresse mail"
            className={`input ${!!this.state.formErrors.emailErr &&
              "error-input"}`}
          />
          {!!this.state.formErrors.emailErr && (
            <p className="error">{this.state.formErrors.emailErr}</p>
          )}
        </div>
        <div className="field">
          <input
            value={this.state.subject}
            onChange={this.onInputChange}
            type="text"
            name="subject"
            id="subject"
            placeholder="Objet"
            className={`input ${!!this.state.formErrors.subjectErr &&
              "error-input"}`}
          />
          {!!this.state.formErrors.subjectErr && (
            <p className="error">{this.state.formErrors.subjectErr}</p>
          )}
        </div>
        <div className="field">
          <textarea
            value={this.state.message}
            onChange={this.onInputChange}
            name="message"
            id="message"
            rows="5"
            placeholder="Message"
            className={`input ${!!this.state.formErrors.messageErr &&
              "error-input"}`}
          ></textarea>
          {!!this.state.formErrors.messageErr && (
            <p className="error">{this.state.formErrors.messageErr}</p>
          )}
        </div>

        <button type="submit" className="btn btn-blue btn-shadow">
          Envoyer
        </button>
      </form>
    );
  }
}

export default Form;
