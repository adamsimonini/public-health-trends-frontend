export const TOGGLE_THEME = "TOGGLE_THEME";

export function toggleTheme(data: any) {
	return {
		type: TOGGLE_THEME,
		payload: data
	};
}
