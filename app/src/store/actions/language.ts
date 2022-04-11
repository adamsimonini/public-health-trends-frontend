export const SET_LANGUAGE = "SET_LANGUAGE";

export function setLanguage(data: string) {
	return {
		type: SET_LANGUAGE,
		payload: data
	};
}
