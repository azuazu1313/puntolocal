import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from './ui/dropdown-menu';

type Language = {
  code: string;
  name: string;
  flag: string;
};

const languages: Language[] = [
  {
    code: 'es',
    name: 'Español',
    flag: 'https://flagicons.lipis.dev/flags/4x3/es.svg',
  },
  {
    code: 'it',
    name: 'Italiano',
    flag: 'https://flagicons.lipis.dev/flags/4x3/it.svg',
  },
  {
    code: 'fr',
    name: 'Français',
    flag: 'https://flagicons.lipis.dev/flags/4x3/fr.svg',
  },
  {
    code: 'de',
    name: 'Deutsch',
    flag: 'https://flagicons.lipis.dev/flags/4x3/de.svg',
  },
];

const LanguageSelector: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center space-x-1 px-2 py-1 rounded-md text-sm hover:bg-gray-50 transition-colors">
        <img
          src={selectedLanguage.flag}
          alt={selectedLanguage.name}
          className="w-5 h-5 rounded-sm object-cover"
        />
        <span className="mx-1">{selectedLanguage.name}</span>
        <ChevronDown className="h-4 w-4 opacity-60" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[180px]">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleLanguageChange(language)}
          >
            <img
              src={language.flag}
              alt={language.name}
              className="w-5 h-5 rounded-sm object-cover"
            />
            <span>{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;