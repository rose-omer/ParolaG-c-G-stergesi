# Parola Gücü Göstergesi

Bu proje, kullanıcıların şifre gücünü dinamik olarak görüntüleyen bir web uygulamasıdır. Şifre gücüne göre arka plan rengi ve metin rengi değişir. Uygulama, şifreyi gizleme ve gösterme işlevselliği sunar.

## Özellikler

- Şifre gücünü gerçek zamanlı olarak analiz eder.
- Şifre gücüne göre renkli bir gösterge sağlar.
- Şifreyi gösterme ve gizleme işlevselliği içerir.
- Şifre gücüne göre farklı renklerle metin güncellenir.

## Kurulum

Projeyi yerel olarak çalıştırmak için aşağıdaki adımları izleyin:

1. Projeyi klonlayın veya indirin:
    ```bash
    git clone https://github.com/kullanici-adiniz/parola-guclu-gostergesi.git
    ```
2. Proje dizinine gidin:
    ```bash
    cd parola-guclu-gostergesi
    ```

3. `index.html`, `style.css`, ve `script.js` dosyalarını bir web tarayıcısında açın.

## Kullanım

1. `index.html` dosyasını bir tarayıcıda açın.
2. Şifre girin ve şifre gücünü görebilmek için `👁️` butonuna tıklayarak şifreyi gösterip gizleyebilirsiniz.

## Dosya Yapısı

- `index.html`: Projenin HTML yapısını içerir.
- `style.css`: Projenin stil ayarlarını içerir.
- `script.js`: Şifre gücünü analiz eden ve kullanıcı arayüzünü güncelleyen JavaScript kodunu içerir.

### `index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Parola Gücü Göstergesi</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <h2>Parola Gücü Göstergesi</h2>
      <div class="password-container">
        <input type="password" id="password" placeholder="Password" />
        <button id="toggle-password">👁️</button>
      </div>
      <div id="password-line"></div>
      <p id="strength-text"></p>
    </div>

    <script src="script.js"></script>
  </body>
</html>
