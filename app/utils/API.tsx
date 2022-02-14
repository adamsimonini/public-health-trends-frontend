import axios from "axios";

const baseUrl = "http://localhost:8000/";

export default {
	// Gets all complete locations data
	getAllHealthRegions: function () {
		return axios.get(`${baseUrl}api/health_regions/`);
	},
	getAllProvinces: function () {
		return axios.get(`${baseUrl}api/provinces/`);
	},
	getAllRegions: function () {
		return axios.get(`${baseUrl}api/regions/`);
	}

	// Gets all formal sortation areas
	// getAllFSAs: function () {
	// 	return axios.get("/api/locations/all-fsa");
	// },
	// Gets the location with the given id
	// getFSAByID: function (id) {
	// 	return axios.get("/api/locations/fsa/" + id);
	// },
	// getAllProvinces: function () {
	// 	return axios.get("/api/provinces");
	// },
	// Gets the location with the given id
	// getSingleProvince: function (id) {
	// 	return axios.get("/api/provinces/" + id);
	// },
	// getAllHealthRegions: function () {
	// 	return axios.get("/api/health-regions");
	// },
	// Gets the location with the given id
	// getSingleHealthRegion: function (id) {
	// 	return axios.get("/api/health-regions/" + id);
	// }
};
