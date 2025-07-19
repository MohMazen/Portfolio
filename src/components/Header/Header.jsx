import React from 'react';
import { useTheme } from '../../App';
import { useTranslation } from '../../translations';
import './Header.css';

function Header({ langue, changerLangue }) {
    const { isDarkMode, toggleTheme } = useTheme();
    const { t } = useTranslation(langue);

    // Fonction pour gérer le clic sur le thème avec vérification
    const handleThemeToggle = () => {
        try {
            toggleTheme();
        } catch (error) {
            console.error('Error toggling theme:', error);
        }
    };

    // Fonction pour gérer le changement de langue avec vérification
    const handleLanguageToggle = () => {
        try {
            changerLangue();
        } catch (error) {
            console.error('Error changing language:', error);
        }
    };

    return (
        <div className='header-container'>
            {/* Dark Mode Toggle Button */}
            <button
                className='btn btn-outline-secondary rounded theme-toggle'
                onClick={handleThemeToggle}
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                type="button"
            >
                <i className={`bi ${isDarkMode ? 'bi-sun' : 'bi-moon'} me-1`}></i>
            </button>

            {/* Language Toggle Button */}
            <button
                className='btn btn-outline-secondary rounded language-toggle'
                onClick={handleLanguageToggle}
                aria-label={`Switch to ${langue === "fr" ? "English" : "French"}`}
                type="button"
            >
                <i className='bi bi-translate me-1'></i>
                {langue === "fr" ? "EN" : "FR"}
            </button>
        </div>
    );
}

export default Header;