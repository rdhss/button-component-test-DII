import type { ReactNode } from 'react';

type ButtonProps = {
    label: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'danger';
    icon?: ReactNode; // bisa JSX element icon, optional
    iconPosition?: 'left' | 'right'; // 👈 posisi ikon
    size?: 'sm' | 'md' | 'lg';
    tooltip?: string,
    tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
};

function Button({
    label,
    onClick,
    variant = 'primary',
    icon,
    iconPosition = 'left',
    size = 'md',
    tooltip,
    tooltipPosition = 'top'
}: ButtonProps) {
    const baseClass = 'flex items-center gap-2 text-white hover:opacity-90';

    const variantClass = {
        primary: 'bg-blue-600',
        secondary: 'bg-gray-500',
        danger: 'bg-red-600',
    }[variant];

    const sizeClass = {
        sm: 'text-sm px-3 py-1.5',
        md: 'text-base px-4 py-2',
        lg: 'text-lg px-5 py-3',
    }[size];


    const tooltipPositionClass = {
        top: 'bottom-full mb-1 left-1/2 -translate-x-1/2',
        bottom: 'top-full mt-1 left-1/2 -translate-x-1/2',
        left: 'right-full mr-2 top-1/2 -translate-y-1/2',
        right: 'left-full ml-2 top-1/2 -translate-y-1/2',
    }[tooltipPosition || 'top'];

    return (
        <div className="relative inline-block group">
            <button onClick={onClick} className={`flex items-center gap-2 text-white rounded hover:opacity-90 ${variantClass} ${sizeClass}`}>
                {icon && iconPosition === 'left' && <span className="w-5 h-5">{icon}</span>}
                <span>{label}</span>
                {icon && iconPosition === 'right' && <span className="w-5 h-5">{icon}</span>}
            </button>

            {tooltip && (
                <div
                    className={`absolute z-10 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1 whitespace-nowrap ${tooltipPositionClass}`}
                >
                    {tooltip}
                </div>
            )}
        </div>

    );
}

export default Button;
