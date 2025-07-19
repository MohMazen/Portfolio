import React, { useState, useEffect, createContext, useContext } from 'react';
import { useTranslation } from './translations';
import Header from './components/Header/Header';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Main from "./components/Main/Main";

// Créer un Context pour le thème
const ThemeContext = createContext();

// Hook personnalisé pour utiliser le thème
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

// Fournisseur de thème
export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Initialisation directe avec vérification localStorage
        if (typeof window !== 'undefined' && window.localStorage) {
            const savedTheme = localStorage.getItem('theme');
            return savedTheme === 'dark';
        }
        return false; // Valeur par défaut
    });

    // Initialiser le thème au chargement
    useEffect(() => {
        const applyTheme = (theme) => {
            document.documentElement.setAttribute('data-theme', theme);
            document.body.classList.toggle('dark-theme', theme === 'dark');
        };

        if (typeof window !== 'undefined' && window.localStorage) {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme && (savedTheme === 'dark' || savedTheme === 'light')) {
                applyTheme(savedTheme);
                setIsDarkMode(savedTheme === 'dark');
            } else {
                // Définir le thème par défaut si aucun n'est sauvegardé
                applyTheme('light');
                localStorage.setItem('theme', 'light');
                setIsDarkMode(false);
            }
        } else {
            // Fallback si localStorage n'est pas disponible
            applyTheme('light');
        }
    }, []);

    // Fonction pour changer le thème
    const toggleTheme = () => {
        const newTheme = !isDarkMode ? 'dark' : 'light';
        const newIsDarkMode = !isDarkMode;

        setIsDarkMode(newIsDarkMode);
        document.documentElement.setAttribute('data-theme', newTheme);
        document.body.classList.toggle('dark-theme', newIsDarkMode);

        // Sauvegarder seulement si localStorage est disponible
        if (typeof window !== 'undefined' && window.localStorage) {
            try {
                localStorage.setItem('theme', newTheme);
            } catch (error) {
                console.warn('Unable to save theme preference:', error);
            }
        }
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Composant principal App
function App() {
    // État pour gérer la langue avec persistance
    const [langue, setLangue] = useState(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            try {
                return localStorage.getItem('langue') || 'fr';
            } catch (error) {
                console.warn('Unable to read language preference:', error);
                return 'fr';
            }
        }
        return 'fr';
    });

    // Hook pour les traductions
    const { t } = useTranslation(langue);

    // Fonction pour changer la langue
    const changerLangue = () => {
        const nouvelleLangue = langue === 'fr' ? 'en' : 'fr';
        setLangue(nouvelleLangue);

        // Sauvegarder seulement si localStorage est disponible
        if (typeof window !== 'undefined' && window.localStorage) {
            try {
                localStorage.setItem('langue', nouvelleLangue);
            } catch (error) {
                console.warn('Unable to save language preference:', error);
            }
        }
    };

    return (
        <div className="app-container">
            <div className="container-fluid">
                <Header langue={langue} changerLangue={changerLangue} />
                <Main langue={langue} changerLangue={changerLangue}/>
                <Navbar />
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