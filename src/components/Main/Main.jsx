import React from 'react';
import {useTranslation} from '../../translations';
import {useTheme} from '../../App';
import './Main.css';

function Main({langue}) {
	const {t} = useTranslation(langue);

	return (
	  <div className="main-container">
	    <div className="main-content">
	      <p className="text-center main-title dm-sans-p">{t('main.name')}</p>
	      <p className="text-center main-description dm-sans-p">{t('main.description')}</p>
	    </div>
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