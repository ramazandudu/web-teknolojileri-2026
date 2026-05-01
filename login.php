<?php
// Verileri kontrol et
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $id = $_POST["student-id"] ?? '';
  $pass = $_POST["password"] ?? '';

  echo "<!doctype html>
  <html lang='en'>
    <head>
      <meta charset='UTF-8'>
      <meta name='viewport' content='width=device-width, initial-scale=1'>
      <title>Login Result</title>
      <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css' rel='stylesheet'>
    </head>
    <body>
      <div class='container mt-5'>";

  if (strpos($id, '@') === false) {
    echo "<div class='alert alert-danger'>Kullanıcı Adı '@' içermelidir!</div>";
  } elseif ($id === "g231210453@sakarya.edu.tr" && $pass === "g231210453") {
    echo "<div class='alert alert-success'>Hoş geldin $id <br><a href='index.html'>Ana Sayfa</a></div>";
  } else {
    echo "<div class='alert alert-danger'>Hatalı Giriş</div>";
  }

  echo "</div>
    </body>
  </html>";
}
?>
