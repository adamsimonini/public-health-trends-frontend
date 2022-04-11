export const SET_THEME = "SET_THEME";

export function setTheme(data: string) {
	return {
		type: SET_THEME,
		payload: data
	};
}
