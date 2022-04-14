export const data = [
	{
		prov: "Alberta",
		prov_image: "https://media.istockphoto.com/photos/edmonton-downtown-skyline-just-after-sunset-in-the-winter-picture-id1089141884?b=1&k=20&m=1089141884&s=170667a&w=0&h=Nsi5U0CbId8kaoYK6asziDvpoIRME23vCi9aj1nsHNI=",
		hr_name: "Edmonton Zone",
    fsa: "A1A",
    weather_startions: ["AAAAA", "BBBBB"],
		metrics: {
			health_region: {
				vaccination: {
					percent_vaccinated: 81.54,
					last_updated: "2022-04-04",
					update_frequency: "daily"
				},
				cases_deaths: {
					cases: 3000,
					deaths: 198,
					last_updated: "2022-04-04",
					update_frequency: "daily"
				},
				fluwatchers: {
					number_sick: 22,
					total_participants: 280
				}
			},
			province: {
				vaccination: {
					percent_vaccinated: 78.29,
					date_updated: "2022-04-04",
					update_frequency: "weekly"
				}
			}
		}
	},
	{
		prov: "Saskatchewan",
		prov_image: "https://www.worldatlas.com/r/w1200/upload/5a/d1/9d/winnipeg-manitoba.jpg",
		hr_name: "Far North",
		last_updated_date: "2021-08-03",
		metrics: {
			cases_since_last_update: "3000",
			average_monthly_cases: "45",
			deaths: "2"
		}
	},
	{
		prov: "Ontario",
		prov_image: "https://www.tripsavvy.com/thmb/wdR55uljRmHMCpM26xB6rdDxxI8=/4003x3002/smart/filters:no_upscale()/parliament-hill-in-ottawa--ontario--canada-1212275972-9f6f6e45ce084df89aaebf972e15b27b.jpg",
		hr_name: "Renfrew County and District Health Unit",
		last_updated_date: "2021-08-04",
		metrics: {
			cases_since_last_update: "3000",
			average_monthly_cases: "11",
			deaths: "1"
		}
	},
	{
		prov: "British Columbia",
		prov_image: "https://www.tripsavvy.com/thmb/wdR55uljRmHMCpM26xB6rdDxxI8=/4003x3002/smart/filters:no_upscale()/parliament-hill-in-ottawa--ontario--canada-1212275972-9f6f6e45ce084df89aaebf972e15b27b.jpg",
		hr_name: "Interior Health",
		last_updated_date: "2021-08-05",
		metrics: {
			cases_since_last_update: "3000",
			average_monthly_cases: "39",
			deaths: "13"
		}
	}
];
