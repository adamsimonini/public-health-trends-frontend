import { SET_THEME } from "@store/actions/theme";

export default function setTheme(state = "light", action: any) {
	switch (action.type) {
		case SET_THEME:
			return action.payload;
		default:
			return state;
	}
}
