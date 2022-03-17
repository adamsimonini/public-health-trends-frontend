import { ADD_LOCATION, REMOVE_LOCATION } from "@store/actions/counter";

export default function modifyLocations(locations = [], action) {
	switch (action.type) {
		case ADD_LOCATION:
			return [...locations, "B1B"];
		case REMOVE_LOCATION:
			return locations;
		default:
			return locations;
	}
}
