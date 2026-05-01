document.addEventListener('DOMContentLoaded', () => {
    const genderInput = document.getElementById('gender');
    const genderLabel = document.getElementById('genderLabel');
    const genderValues = ["Kadın", "C++", "Atak Helikopteri", "RTX 4090Ti", "nullptr", "Meyveli Süt", "Integer", "98' Toyota Corolla", "Erkek"];
    const submitButton = document.getElementById("submit");
    
    function updateGenderLabel() {
        genderLabel.textContent = genderValues[genderInput.value];
    }
    
    function formValidation(){
        const nameInput = document.getElementById("name");
        const lastnameInput = document.getElementById("lastname");
        const adressInput = document.getElementById("adress");
        const phoneInput = document.getElementById("phone");
        const infoInput = document.getElementById("info");
        const emailInput = document.getElementById("email");
        const gender = genderLabel.textContent;
       
        if(nameInput.value === ""){
            alert("İsim Boş Bırakılamaz!");
            return;
        }
        if(nameInput.value.length > 40){
            alert("İsim 40 Karakterden Fazla Olamaz!");
            return;
        }
        if(lastnameInput.value === ""){
            alert("Soyisim Boş Bırakılamaz!");
            return;
        }
        if(lastnameInput.value.length > 40){
            alert("İsim 40 Karakterden Fazla Olamaz!");
            return;
        }
        if(adressInput.value === ""){
            alert("Adres Boş Bırakılamaz!");
            return;
        }
        if(adressInput.value.length > 255){
            alert("Adres 255 Karakterden Fazla Olamaz!");
            return;
        }
        if(phoneInput.value === ""){
            alert("Telefon Numarası Boş Bırakılamaz!");
            return;
        }
        if(phoneInput.value[0] != 0){
            alert("Telefon Numarası 0 ile Başlamlıdır!");
            return;
        }
        if(phoneInput.value.length != 11){
            alert("Telefon Numarası 11 Hane Olmalıdır!");
            return;
        }
        if(infoInput.value === ""){
            alert("Ek Bilgi Boş Bırakılamaz!");
            return;
        }
        if(emailInput.value === ""){
            alert("Email Boş Bırakılamaz!");
            return;
        }
        if(emailInput.value.length > 40){
            alert("E-mail 255 Karakterden Fazla Olamaz!");
            return;
        }
        if(!emailInput.value.includes('@')){
            alert("E-mail @ İçermelidir!")
            return;
        }
        if(!emailInput.value.includes('.')){
            alert("E-mail Formatı Geçersiz!")
            return;
        }

        alert("Form Gönderildi\n" + 
                "İsim: " + nameInput.value +"\n" + 
                "Soyisim: " + lastnameInput.value + "\n" + 
                "Adres: " + adressInput.value + "\n" + 
                "E-mail: " + emailInput.value + "\n" +
                "Telefon Numarası: " + phoneInput.value + "\n" +
                "Cinsiyet: " + genderLabel.textContent + "\n" +
                "Ek Bilgi: " + infoInput.value
            );

        var info = document.getElementById("contact-information")
        info.innerHTML += `
        <h3>İsim: ${nameInput.value}</h3>
        <h3>Soyisim: ${lastnameInput.value}</h3>
        <h3>Adres: ${adressInput.value}</h3>
        <h3>E-mail: ${emailInput.value}</h3>
        <h3>Telefon: ${phoneInput.value}</h3>
        <h3>Cinsiyet: ${genderLabel.textContent}</h3>
        <h3>Cinsiyet: ${infoInput.value}</h3>
        `
        
        // Yeni sayfa URL'sini oluştur
        const uri = `form-info.html?name=${nameInput.value}&lastname=${lastnameInput.value}&adress=${adressInput.value}&email=${emailInput.value}&phone=${phoneInput.value}&gender=${gender}&info=${infoInput.value}`;
        const encodeduri = encodeURI(uri);
        
        // Yeni sayfaya yönlendir
        window.location.href = encodeduri;
        
        document.getElementById("contact-form").reset();
    }

    // Initial load
    updateGenderLabel();

    // Event listener for input change
    genderInput.addEventListener('input', updateGenderLabel);
    //Event listener for submit change
    submitButton.addEventListener('click' , formValidation);
});
