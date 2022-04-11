import React, { useState } from "react";
import { FormControl, WarningOutlineIcon, Select, CheckIcon } from "native-base";
import "@translation/i18n.config";
import { useTranslation } from "react-i18next";

function DiseaseFilter() {
	const [diseases, setDiseases] = useState(["COVID-19", "HIV", "Fentanyl Use", "Heart Disease", "Influenza"]);
	const { t } = useTranslation();

	return (
		<>
			<FormControl w="75%">
				<FormControl.Label>{t("selectHealthIssue")}</FormControl.Label>
				<Select
					minWidth="100"
					accessibilityLabel="Choose an issue"
					placeholder="Choose an issue"
					_selectedItem={{
						bg: "teal.600",
						endIcon: <CheckIcon size={5} />
					}}
					mt="1"
				>
					{diseases.map((disease, index) => {
						return <Select.Item label={disease} value={disease.toLowerCase()} key={`${disease}-${index}`} />;
					})}
					{/* <Select.Item label="UX Research" value="ux" />
					<Select.Item label="Web Development" value="web" />
					<Select.Item label="Cross Platform Development" value="cross" />
					<Select.Item label="UI Designing" value="ui" />
					<Select.Item label="Backend Development" value="backend" /> */}
				</Select>
				<FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>Please make a selection!</FormControl.ErrorMessage>
			</FormControl>
		</>
	);
}

export default DiseaseFilter;
