import React from 'react';
import {useTranslation} from '../../translations';
import {useTheme} from '../../App';
import './Main.css';

function Main({langue}) {
	const {t} = useTranslation(langue);

	return (
		<div>
			<p className="text-start">{t('main.nom')}</p>
		</div>
	);
}

function MainWithTheme({langue}) {
	const {isDarkMode} = useTheme();

	return (
		<div className={isDarkMode ? 'main dark' : 'main'}>
			<Main langue={langue} />
		</div>
	);
}

export default MainWithTheme;