(() => {
    let languageData = langD;

    const userLanguage = navigator.language || navigator.userLanguage;

    const languageDropdown = document.getElementById("languageDropdown");
    const availableLanguages = Array.from(languageDropdown.options).map(option => option.value);

    function getLanguageBasedOnUserLanguage(userLanguage, availableLanguages) {
      const userLanguagePrefix = userLanguage.substring(0, 2);

      if (availableLanguages.includes(userLanguagePrefix)) {
        return userLanguagePrefix;
      }

      return "en";
    }

    const defaultLanguage = getLanguageBasedOnUserLanguage(userLanguage, availableLanguages);
    languageDropdown.value = defaultLanguage;

    function updateContent(language) {
      const contentItems = document.querySelectorAll('.langSwitch-item');

      contentItems.forEach(item => {
        const itemId = item.getAttribute('data-langSwitch-item');
        const content = languageData[language][itemId] || languageData["en"][itemId];
        item.textContent = content;
        if (item.tagName === 'INPUT') {
          item.placeholder = content; // Устанавливаем значение placeholder
        }
      });

      try {
        errContainer["item-62"] = languageData[language]["item-62"];
        errContainer["item-63"] = languageData[language]["item-63"];
      } catch {
      }

    }

    languageDropdown.addEventListener("change", function() {
      const selectedLanguage = this.value;
      updateContent(selectedLanguage);

      try {
          let button = document.getElementById("searchStartButton");
          button.click();
      }catch{}
    });

    updateContent(defaultLanguage);
  }) ();
  
  