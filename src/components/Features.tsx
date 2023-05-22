import {
	Box,
	Flex
} from "@chakra-ui/react"
import FeatureCard from "./FeatureCard";

function Features () {

	const responsiveMargin: { [key: string]: string } = {
		base: "15%",
		md: "15%",
		lg: "10%",
		xl: "15%",
		'2xl': "20%"
	};

	const responsiveMarginTop: { [key: string]: string } = {
		base: "50px",
		md: "50px",
		lg: "75px",
		'2xl': "125px"
	};

	return (
		<Box ml={responsiveMargin} mr={responsiveMargin} mt={responsiveMarginTop}>
			<Flex flexDirection={{ base: "column", md: "column", lg: "row" }} gap={{ base: "5", md: "5", lg: "5" }} justifyContent="space-between">
				<FeatureCard icon="/images/ai_icon.svg" title="KI generierte Einsatzszenarien" text={[
					"unendlich viele generierbare 3D Umgebungen", 
					"KI gestützte Charaktere mit realistischem Sprachvermögen und Verhaltensweisen",
					"auf Polizisten reagierende und dynamische Umwelt"
				]}/>
				<FeatureCard icon="/images/vr_icon.svg" title="Personalisiertes Training" text={[
					"freiwilliges, personalisiertes Selbsttraining", 
					"Wiedererlebnis von bereits geschehenen Einsätzen",
					"Vorbereitung auf bevor-stehende Einsätze"
				]}/>
				<FeatureCard icon="/images/psych_icon.svg" title="Unterstützung psych. Arbeit" text={[
					"Evaluation basierend auf Simulationsdaten", 
					"Psychosoziale Unterstützung z.B. bei Anzeichen einer post-traumatischen Belastungs-störung"
				]}/>
		</Flex>
	</Box>
		
	)
}
		
export default Features;
  