// translations/index.js
import fr from './fr';
import en from './en';

// Objet contenant toutes les traductions
export const translations = {
	fr,
	en
};

// Fonction pour obtenir un texte traduit
export const getTranslation = (langue, path) => {
	const keys = path.split('.');
	let translation = translations[langue];

	for (const key of keys) {
		if (translation && translation[key]) {
			translation = translation[key];
		} else {
			console.warn(`Translation not found for: ${langue}.${path}`);
			return `[${path}]`; // Retourne le chemin si traduction non trouvée
		}
	}

	return translation;
};

// Hook personnalisé pour les traductions
export const useTranslation = (langue) => {
	const t = (path) => getTranslation(langue, path);
	return { t };
};