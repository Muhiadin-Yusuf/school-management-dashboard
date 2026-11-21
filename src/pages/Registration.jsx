import { useState } from "react";
import React from "react";
import { UserPlus } from "lucide-react";
import PageHeader from "../components/common/PageHeader";
import "./PageStyles.css";

const emptyForm = {
  firstName: "",
  middleName: "",
  lastName: "",
  gender: "",
  dob: "",
  phone: "",
  email: "",
  nationality: "Somali",
  address: "",
  className: "",
};

function Field({ label, required, children }) {
  return (
    <label className="field">
      <span>
        {label}
        {required && <b> *</b>}
      </span>
      {children}
    </label>
  );
}
function FormSection({ title, children }) {
  return (
    <div className="form-section">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default function Registration({ onRegister }) {
  const [form, setForm] = useState(emptyForm);
  const change = (event) =>
    setForm((old) => ({ ...old, [event.target.name]: event.target.value }));
  const submit = (event) => {
    event.preventDefault();
    onRegister({
      name: [form.firstName, form.middleName, form.lastName]
        .filter(Boolean)
        .join(" "),
      className: form.className || "Not assigned",
      gender: form.gender,
      phone: form.phone,
    });
    window.alert("Student registered successfully.");
    setForm(emptyForm);
  };

  return (
    <>
      <PageHeader
        title="Student Registration"
        subtitle="Complete the form to register a new student."
      />
      <section className="panel registration-panel">
        <form onSubmit={submit}>
          <FormSection title="1. Student Personal Information">
            <div className="form-grid three-cols">
              <Field label="First Name" required>
                <input
                  required
                  name="firstName"
                  value={form.firstName}
                  onChange={change}
                  placeholder="Enter first name"
                />
              </Field>
              <Field label="Middle Name">
                <input
                  name="middleName"
                  value={form.middleName}
                  onChange={change}
                  placeholder="Enter middle name"
                />
              </Field>
              <Field label="Last Name" required>
                <input
                  required
                  name="lastName"
                  value={form.lastName}
                  onChange={change}
                  placeholder="Enter last name"
                />
              </Field>
              <Field label="Gender" required>
                <select
                  required
                  name="gender"
                  value={form.gender}
                  onChange={change}
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </Field>
              <Field label="Date of Birth" required>
                <input
                  required
                  type="date"
                  name="dob"
                  value={form.dob}
                  onChange={change}
                />
              </Field>
              <Field label="Phone Number">
                <input
                  name="phone"
                  value={form.phone}
                  onChange={change}
                  placeholder="Enter phone number"
                />
              </Field>
              <Field label="Email Address">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={change}
                  placeholder="Enter email address"
                />
              </Field>
              <Field label="Nationality">
                <input
                  name="nationality"
                  value={form.nationality}
                  onChange={change}
                />
              </Field>
              <Field label="Address">
                <input
                  name="address"
                  value={form.address}
                  onChange={change}
                  placeholder="Enter address"
                />
              </Field>
            </div>
          </FormSection>
          <FormSection title="2. Academic Information">
            <div className="form-grid three-cols">
              <Field label="Class">
                <select
                  name="className"
                  value={form.className}
                  onChange={change}
                >
                  <option value="">Select Class</option>
                  {[
                    "Class One",
                    "Class Two",
                    "Class Three",
                    "Class Four",
                    "Class Five",
                    "Class Six",
                  ].map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </Field>
            </div>
          </FormSection>
          <div className="form-actions">
            <button className="primary-btn">
              <UserPlus size={16} /> Register Student
            </button>
            <button
              className="secondary-btn"
              type="button"
              onClick={() => setForm(emptyForm)}
            >
              Clear Form
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
