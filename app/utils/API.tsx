const baseUrl = "http://localhost:8000";

export default {
	// Gets all complete locations data
	getAllHealthRegions: () => {
		return fetch(`${baseUrl}/api/health_regions/`)
			.then(response => response.json())
			.then(json => {
				return json;
			})
			.catch(error => {
				console.error(error);
			});
	},
	getAllProvinces: function () {
		return fetch(`${baseUrl}/api/provinces/`)
			.then(response => response.json())
			.then(json => {
				return json;
			})
			.catch(error => {
				console.error(error);
			});
	},
	getAllRegions: function () {
		return fetch(`${baseUrl}/api/regions/`)
			.then(response => response.json())
			.then(json => {
				console.log(json);
				return json;
			})
			.catch(error => {
				console.error(error);
			});
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
