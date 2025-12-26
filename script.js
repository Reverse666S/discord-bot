let lang = "en";

const content = {
  en: {
    tos: `
      <h2>Terms of Service</h2>
      <p>
        This Discord bot is provided "as is".
        The bot may be modified or discontinued at any time.
        Abuse may result in restricted access.
      </p>
    `,
    privacy: `
      <h2>Privacy Policy (GDPR)</h2>
      <p>
        This bot only processes data required for its functionality.
        Stored data includes Discord user IDs, server IDs and configuration data.
        No data is shared with third parties.
        You may request data deletion at any time.
      </p>
      <p>
        <strong>Contact:</strong><br>
        Discord: randomauto<br>
        Email: <a href="mailto:carlbot0815@gmail.com">carlbot0815@gmail.com</a>
      </p>
    `
  },
  de: {
    tos: `
      <h2>Nutzungsbedingungen</h2>
      <p>
        Dieser Discord-Bot wird ohne Gewähr bereitgestellt.
        Der Bot kann jederzeit geändert oder eingestellt werden.
        Missbrauch kann zu Einschränkungen führen.
      </p>
    `,
    privacy: `
      <h2>Datenschutzerklärung (DSGVO)</h2>
      <p>
        Dieser Bot verarbeitet nur Daten, die für den Betrieb notwendig sind.
        Gespeichert werden Discord-User-IDs, Server-IDs und Konfigurationsdaten.
        Es erfolgt keine Weitergabe an Dritte.
        Eine Löschung der Daten ist jederzeit auf Anfrage möglich.
      </p>
      <p>
        <strong>Kontakt:</strong><br>
        Discord: randomauto<br>
        E-Mail: <a href="mailto:carlbot0815@gmail.com">carlbot0815@gmail.com</a>
      </p>
    `
  }
};

function setLang(l) {
  lang = l;
  render();
}

function toggleTheme() {
  document.body.dataset.theme =
    document.body.dataset.theme === "light" ? "dark" : "light";
}

function render() {
  if (document.getElementById("tos"))
    document.getElementById("tos").innerHTML = content[lang].tos;

  if (document.getElementById("privacy"))
    document.getElementById("privacy").innerHTML = content[lang].privacy;
}

render();
