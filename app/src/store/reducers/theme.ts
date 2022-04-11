import { ADD_LOCATION, REMOVE_LOCATION } from "@store/actions/location";

export default function modifyLocations(state = [], action: any) {
	switch (action.type) {
		case ADD_LOCATION:
			return [...state, action.payload];
		case REMOVE_LOCATION:
			let newLocations: string[] = state.filter(e => e !== action.payload);
			return newLocations;
		default:
			return state;
	}
}
