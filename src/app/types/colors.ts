export type Colors =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'warning'
	| 'danger'
	| 'transparent'
	| 'disabled';

export const backgroundColors: Record<Colors, string> = {
	primary: 'rgb(59 130 246)',
	secondary: 'rgb(209 213 219)',
	success: 'rgb(34 197 94)',
	warning: 'rgb(234 179 8)',
	danger: 'rgb(239 68 68)',
	disabled: 'rgb(107 114 128)',
	transparent: 'rgb(75, 85, 99)'
};
