document.getElementById("submit-react").addEventListener("click", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;
    const address = document.getElementById("adress").value;
    const phone = document.getElementById("phone").value;
    const info = document.getElementById("info").value;
    const email = document.getElementById("email").value;
    const gender = document.getElementById("genderLabel").textContent;

    if (name === "") {
        alert("İsim Boş Bırakılamaz!");
        return;
      }
      if (name.length > 40) {
        alert("İsim 40 Karakterden Fazla Olamaz!");
        return;
      }
      if (lastname === "") {
        alert("Soyisim Boş Bırakılamaz!");
        return;
      }
      if (lastname.length > 40) {
        alert("Soyisim 40 Karakterden Fazla Olamaz!");
        return;
      }
      if (address === "") {
        alert("Adres Boş Bırakılamaz!");
        return;
      }
      if (address.length > 255) {
        alert("Adres 255 Karakterden Fazla Olamaz!");
        return;
      }
      if (phone === "") {
        alert("Telefon Numarası Boş Bırakılamaz!");
        return;
      }
      if (phone[0] !== '0') {
        alert("Telefon Numarası 0 ile Başlamalıdır!");
        return;
      }
      if (phone.length !== 11) {
        alert("Telefon Numarası 11 Hane Olmalıdır!");
        return;
      }
      if (info === "") {
        alert("Ek Bilgi Boş Bırakılamaz!");
        return;
      }
      if (email === "") {
        alert("Email Boş Bırakılamaz!");
        return;
      }
      if (email.length > 40) {
        alert("E-mail 40 Karakterden Fazla Olamaz!");
        return;
      }
      if (!email.includes('@')) {
        alert("E-mail @ İçermelidir!")
        return;
      }
      if (!email.includes('.')) {
        alert("E-mail Formatı Geçersiz!")
        return;
      }

      // Yeni sayfa URL'sini oluştur
      const uri = `form-info.html?name=${name}&lastname=${lastname}&adress=${address}&email=${email}&phone=${phone}&gender=${gender}&info=${info}`;
      const encodeduri = encodeURI(uri);
      
      // Yeni sayfaya yönlendir
      window.location.href = encodeduri;
});
