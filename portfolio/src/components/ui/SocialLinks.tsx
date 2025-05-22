import React from 'react';
import * as LucideIcons from 'lucide-react';
import { socialLinks } from '../../data/personal';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  color?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  className = '',
  iconSize = 20,
  color = 'currentColor',
}) => {
  return (
    <div className={className}>
      {socialLinks.map((link) => {
        const IconComponent = LucideIcons[link.icon as keyof typeof LucideIcons];
        
        return (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center p-2 rounded-full text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
            aria-label={link.platform}
          >
            {IconComponent && <IconComponent size={iconSize} color={color} />}
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;