import { ADD_LOCATION, REMOVE_LOCATION } from "@store/actions/location";

export default function modifyLocations(locations = [], action: any) {
	switch (action.type) {
		case ADD_LOCATION:
			return [...locations, action.payload];
		case REMOVE_LOCATION:
			let newLocations: string[] = locations.filter(e => e !== action.payload);
			return newLocations;
		default:
			return locations;
	}
}
