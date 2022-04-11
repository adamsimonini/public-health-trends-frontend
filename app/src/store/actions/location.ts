export const ADD_LOCATION = "ADD_LOCATION";
export const REMOVE_LOCATION = "REMOVE_LOCATION";

export function addLocation(data: object) {
	return {
		type: ADD_LOCATION,
		payload: data
	};
}

export function removeLocation(data: string) {
	return {
		type: REMOVE_LOCATION,
		payload: data
	};
}
