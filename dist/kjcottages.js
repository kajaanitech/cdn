(function manageLanguageRedirection(){var userLang=navigator.language || navigator.userLanguage; var basePath=window.location.pathname; if (userLang.startsWith('fi') && basePath.startsWith('/fi/')){localStorage.setItem('userOptedOutOfRedirection', 'true'); return; d}var userHasOptedOut=localStorage.getItem('userOptedOutOfRedirection'); if (!userLang.startsWith('fi') && !basePath.startsWith('/en/') && !userHasOptedOut){var newPath=basePath.replace(/^\/(fi|en)\//, '/'); var fullPath=window.location.origin + '/en' + newPath + window.location.search; window.location.href=fullPath;}})();