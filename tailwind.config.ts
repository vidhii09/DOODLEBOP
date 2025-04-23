import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				// Custom color palette based on the children's puzzle image
				'kid': {
					'orange': '#FF7043',  // Orange shirt color
					'blue': '#2196F3',    // Blue shirt color
					'green': '#4CAF50',   // Green shirt color
					'yellow': '#FFD54F',  // Background color
					'red': '#FF5252',     // Red puzzle piece
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: "#2196F3", // Using the blue from our kid's palette as primary
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: "#4CAF50", // Using the green from our kid's palette as secondary
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: "#FF5252", // Using the red from our kid's palette
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: "#FF7043", // Using the orange from our kid's palette as accent
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// DoodleBop custom colors
				doodleBlue: '#0EA5E9',
				doodleRed: '#EA384C',
				doodleGreen: '#4ADE80',
				doodleOrange: '#F97316',
				doodlePurple: '#A855F7',
				doodleYellow: '#FACC15',
				doodlePink: '#EC4899',
				doodleLightBlue: '#7DD3FC',
				doodleLightGreen: '#BBF7D0',
				doodleLightOrange: '#FDBA74',
				doodleLightYellow: '#FEF08A',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'bounce-subtle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pop': {
					'0%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.1)' },
					'100%': { transform: 'scale(1)' }
				},
				'celebrate': {
					'0%': { transform: 'rotate(0deg) scale(1)' },
					'25%': { transform: 'rotate(10deg) scale(1.2)' },
					'50%': { transform: 'rotate(0deg) scale(1.1)' },
					'75%': { transform: 'rotate(-10deg) scale(1.2)' },
					'100%': { transform: 'rotate(0deg) scale(1)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
				'pop': 'pop 0.3s ease-in-out',
				'celebrate': 'celebrate 1s ease-in-out'
			},
			fontFamily: {
				'baloo': ['"Baloo 2"', 'cursive']
			}
		}
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
