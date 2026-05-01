import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    phone: '',
    gender: '',
    additionalInfo: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  const genderValues = ["Kadın", "C++", "Atak Helikopteri", "RTX 4090Ti", "nullptr", "Meyveli Süt", "Integer", "98' Toyota Corolla", "Erkek"];

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "gender") {
      const genderIndex = parseInt(value);
      const selectedGender = genderValues[genderIndex];
      setFormData({
        ...formData,
        gender: selectedGender,
        genderText: selectedGender,
        [name]: value
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      address: '',
      email: '',
      phone: '',
      gender: '',
      additionalInfo: ''
    });
    setSubmittedData(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validasyon kontrolleri
    if (formData.firstName === "") {
      alert("İsim Boş Bırakılamaz!");
      return;
    }
    if (formData.firstName.length > 40) {
      alert("İsim 40 Karakterden Fazla Olamaz!");
      return;
    }
    if (formData.lastName === "") {
      alert("Soyisim Boş Bırakılamaz!");
      return;
    }
    if (formData.lastName.length > 40) {
      alert("Soyisim 40 Karakterden Fazla Olamaz!");
      return;
    }
    if (formData.address === "") {
      alert("Adres Boş Bırakılamaz!");
      return;
    }
    if (formData.address.length > 255) {
      alert("Adres 255 Karakterden Fazla Olamaz!");
      return;
    }
    if (formData.phone === "") {
      alert("Telefon Numarası Boş Bırakılamaz!");
      return;
    }
    if (formData.phone[0] !== '0') {
      alert("Telefon Numarası 0 ile Başlamalıdır!");
      return;
    }
    if (formData.phone.length !== 11) {
      alert("Telefon Numarası 11 Hane Olmalıdır!");
      return;
    }
    if (formData.additionalInfo === "") {
      alert("Ek Bilgi Boş Bırakılamaz!");
      return;
    }
    if (formData.email === "") {
      alert("Email Boş Bırakılamaz!");
      return;
    }
    if (formData.email.length > 40) {
      alert("E-mail 40 Karakterden Fazla Olamaz!");
      return;
    }
    if (!formData.email.includes('@')) {
      alert("E-mail @ İçermelidir!")
      return;
    }
    if (!formData.email.includes('.')) {
      alert("E-mail Formatı Geçersiz!")
      return;
    }

    setSubmittedData(formData);

    setFormData({
      firstName: '',
      lastName: '',
      address: '',
      email: '',
      phone: '',
      gender: '',
      additionalInfo: ''
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="https://www.sakarya.edu.tr/">
              <img src="res/sakarya-university.png" alt="" height="50px" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="index.html">Ana Sayfa</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="movie-search.html">Film Ara</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="my-hobbies.html">Hobilerim</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="my-country.html">Şehrim</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">İletişim</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="heritance.html">Mirasımız</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <div className="contact-header">
          <h1>İletişim</h1>
        </div>
        <div className="form-container container">
          <form onSubmit={handleSubmit}>
            <div className="row mb-4">
              <div className="col">
                <div data-mdb-input-init className="form-outline">
                  <label className="form-label" htmlFor="firstName">İsim</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="form-control"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col">
                <div data-mdb-input-init className="form-outline">
                  <label className="form-label" htmlFor="lastName">Soyisim</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="form-control"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div data-mdb-input-init className="form-outline mb-4">
              <label className="form-label" htmlFor="address">Adres</label>
              <input
                type="text"
                id="address"
                name="address"
                className="form-control"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div data-mdb-input-init className="form-outline mb-4">
              <label className="form-label" htmlFor="email">E-mail</label>
              <input
                type="text"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div data-mdb-input-init className="form-outline mb-4">
              <label className="form-label" htmlFor="phone">Telefon</label>
              <input
                type="number"
                id="phone"
                name="phone"
                className="form-control"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div data-mdb-input-init className="form-outline mb-4">
              <label className="form-label" htmlFor="gender">Cinsiyet</label>
              <input
                type="range"
                name="gender"
                id="gender"
                className="form-control"
                min="0"
                max="8"
                step="1"
                value={formData.gender}
                onChange={handleChange}
              />
              <div className="gender-labels">
                <span>Kadın</span>
                <span>Erkek</span>
              </div>
              <div className="selected-gender">
                Seçilen Cinsiyet: <span>{formData.genderText}</span>
              </div>
            </div>
            <div data-mdb-input-init className="form-outline mb-4">
              <label className="form-label" htmlFor="additionalInfo">Ek Bilgi</label>
              <textarea
                className="form-control"
                id="additionalInfo"
                name="additionalInfo"
                rows="4"
                value={formData.additionalInfo}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className='container btn-container'>
              <button data-mdb-ripple-init type="submit" id='submit' className="btn btn-primary btn-block mb-4">Gönder</button>
              <button data-mdb-ripple-init type="reset" className="btn btn-primary btn-block mb-4" onClick={handleReset}>Temizle</button>
            </div>
          </form>
          {submittedData && (
            <div id='information'>
              <h3>İsim: {submittedData.firstName}</h3>
              <h3>Soyisim": {submittedData.lastName}</h3>
              <h3>Adres: {submittedData.address}</h3>
              <h3>E-mail: {submittedData.email}</h3>
              <h3>Telefon: {submittedData.phone}</h3>
              <h3>Cinsiyet: {submittedData.gender}</h3>
              <h3>Ek Bilgi: {submittedData.additionalInfo}</h3>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
