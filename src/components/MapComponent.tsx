import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

type Props = {
    rows : { id: number; nr: number; date: Date; country: string; reason: string; cities: string; }[];
  }

export default function MapComponent(props:Props) {

    const getCountryColors = (countryName: string) => {
        return props.rows.some((row) => row.country === countryName) ? "#859F3D" : "#1A1A19";
    }

    return (
        
        <ComposableMap style={{width: "100vw", height: "100vh"}}>
            <Geographies geography={"src/assets/geodata/worldcountries.json"}>
                {({ geographies }) =>
                    geographies.map((geo) => {
                        const countryName = geo.properties.name_de;
                        return <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill= {getCountryColors(countryName)} />
                    })
                }
            </Geographies>
        </ComposableMap>

    )
}
