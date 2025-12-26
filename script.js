let lang = "en";

const content = {
  en: {
    tos: `
      <h2>Terms of Service</h2>
      <p>
        This bot is provided "as is". There is no guarantee of uptime or availability.
        The bot may be modified or discontinued at any time.
        Misuse may result in restricted access.
      </p>
    `,
    privacy: `
      <h2>Privacy Policy (GDPR)</h2>
      <p>
        The bot processes only data required for functionality.
        Stored data may include Discord user IDs, server IDs and configuration data.
        No data is shared with third parties.
      </p>
      <p>
        You may request data removal at any time via Discord or email.
      </p>
    `
  },
  de: {
    tos: `
      <h2>Nutzungsbedingungen</h2>
      <p>
        Dieser Bot wird ohne Gewähr bereitgestellt.
        Funktionen können jederzeit geändert oder eingestellt werden.
        Missbrauch kann zum Ausschluss führen.
      </p>
    `,
    privacy: `
      <h2>Datenschutzerklärung (DSGVO)</h2>
      <p>
        Der Bot verarbeitet nur Daten, die für den Betrieb notwendig sind.
        Gespeichert werden Discord-IDs, Server-IDs und Konfigurationsdaten.
        Es erfolgt keine Weitergabe an Dritte.
      </p>
      <p>
        Eine Löschung der Daten ist jederzeit auf Anfrage möglich.
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
  if (document.getElementById("tos")) {
    document.getElementById("tos").innerHTML = content[lang].tos;
  }
  if (document.getElementById("privacy")) {
    document.getElementById("privacy").innerHTML = content[lang].privacy;
  }
}

render();
