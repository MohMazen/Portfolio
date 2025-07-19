import React from 'react';
import { useTheme } from '../../App';
import { useTranslation } from '../../translations';
import './Header.css';

function Header({ langue, changerLangue }) {
    const { isDarkMode, toggleTheme } = useTheme();
    const { t } = useTranslation(langue);

    return (
        <div className='header-container'>
            {/* Dark Mode Toggle Button */}
            <button
                className='btn btn-outline-secondary rounded theme-toggle'
                onClick={toggleTheme}
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
                <i className={`bi ${isDarkMode ? 'bi-sun' : 'bi-moon'} me-1`}></i>
                {isDarkMode ? t('Header.lightMode') : t('Header.darkMode')}
            </button>

            {/* Language Toggle Button */}
            <button
                className='btn btn-outline-secondary rounded language-toggle'
                onClick={changerLangue}
                aria-label={`Switch to ${langue === "fr" ? "English" : "French"}`}
            >
                <i className='bi bi-translate me-1'></i>
                {langue === "fr" ? "EN" : "FR"}
            </button>
        </div>
    );
}

export default Header;