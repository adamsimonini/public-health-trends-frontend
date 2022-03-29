export const ADD_LOCATION = "ADD_LOCATION";
export const REMOVE_LOCATION = "REMOVE_LOCATION";

let t;

export function addLocation(data) {
	return {
		type: ADD_LOCATION,
		payload: data
	};
}

export function removeLocation(data) {
	return {
		type: REMOVE_LOCATION,
		payload: data
	};
}
