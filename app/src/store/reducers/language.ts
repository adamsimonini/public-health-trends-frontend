import { SET_LANGUAGE } from "@store/actions/language";

export default function modifyLocations(state = "en", action: any) {
	switch (action.type) {
		case SET_LANGUAGE:
			return action.payload;
		default:
			return state;
	}
}
