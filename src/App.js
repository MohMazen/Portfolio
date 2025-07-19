import React, { useState, useEffect, createContext, useContext } from 'react';
import { useTranslation } from './translations';
import Header from './components/Header/Header';
import './App.css';

// Créer un Context pour le thème
// Dans App.js
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(prev => {
            const newTheme = !prev;
            const theme = newTheme ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            return newTheme;
        });
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            const isDark = savedTheme === 'dark';
            setIsDarkMode(isDark);
            document.documentElement.setAttribute('data-theme', savedTheme);
        }
    }, []);

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

// Composant principal App
function App() {
    // État pour gérer la langue avec persistance
    const [langue, setLangue] = useState(() => {
        return localStorage.getItem('langue') || 'fr';
    });

    // Hook pour les traductions
    const { t } = useTranslation(langue);

    // Fonction pour changer la langue
    const changerLangue = () => {
        const nouvelleLangue = langue === 'fr' ? 'en' : 'fr';
        setLangue(nouvelleLangue);
        localStorage.setItem('langue', nouvelleLangue);
    };

    return (
        <div className="app-container">
            <div className="container-fluid">
                <Header langue={langue} changerLangue={changerLangue} />

                <div className="container mt-4">
                    <div className="row">
                        <div className="col-12">
                            <h1>{t('home.title')}</h1>
                            <p>{t('home.description')}</p>
                            <button className="btn btn-primary">
                                {t('home.button')}
                            </button>

                            {/* Affichage de la langue actuelle */}
                            <div className="mt-3">
                                <small className="text-muted">
                                    {t('home.currentLanguage')}
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Composant principal avec ThemeProvider
function AppWithTheme() {
    return (
        <ThemeProvider>
            <App />
        </ThemeProvider>
    );
}

export default AppWithTheme;