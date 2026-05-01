 const params = new URLSearchParams(window.location.search);
 const name = params.get('name');
 const lastname = params.get('lastname');
 const adress = params.get('adress');
 const email = params.get('email');
 const phone = params.get('phone');
 const gender = params.get('gender');
 const info = params.get('info');

 document.getElementById('nameField').textContent = `İsim: ${name}`;
 document.getElementById('lastnameField').textContent = `Soyisim: ${lastname}`;
 document.getElementById('adressField').textContent = `Adres: ${adress}`;
 document.getElementById('emailField').textContent = `E-mail: ${email}`;
 document.getElementById('phoneField').textContent = `Telefon: ${phone}`;
 document.getElementById('genderField').textContent = `Cinsiyet: ${gender}`;
 document.getElementById('infoField').textContent = `Ek Bilgi: ${info}`;