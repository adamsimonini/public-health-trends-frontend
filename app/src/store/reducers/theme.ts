import { TOGGLE_THEME } from "@store/actions/theme";

export default function modifyLocations(state = "light", action: any) {
	switch (action.type) {
		case TOGGLE_THEME:
			return state === "light" ? "dark" : "light";
		default:
			return state;
	}
}
