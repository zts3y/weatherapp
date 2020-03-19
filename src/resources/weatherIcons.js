import * as Icons from "./icons";

const weatherIcons = {
  200: {
    icon: Icons.tstorms,
    altIcon: Icons.nt_tstorms,
    label: "thunderstorm with light rain"
  },
  201: {
    icon: Icons.tstorms,
    altIcon: Icons.nt_tstorms,
    label: "thunderstorm with rain"
  },
  202: {
    icon: Icons.tstorms,
    altIcon: Icons.nt_tstorms,
    label: "thunderstorm with heavy rain"
  },
  210: {
    icon: Icons.tstorms,
    altIcon: Icons.nt_tstorms,
    label: "light thunderstorm"
  },
  211: {
    icon: Icons.tstorms,
    altIcon: Icons.nt_tstorms,
    label: "thunderstorm"
  },
  212: {
    icon: Icons.tstorms,
    altIcon: Icons.nt_tstorms,
    label: "heavy thunderstorm"
  },
  221: {
    icon: Icons.tstorms,
    altIcon: Icons.nt_tstorms,
    label: "ragged thunderstorm"
  },
  230: {
    icon: Icons.tstorms,
    altIcon: Icons.nt_tstorms,
    label: "thunderstorm with light drizzle"
  },
  231: {
    icon: Icons.tstorms,
    altIcon: Icons.nt_tstorms,
    label: "thunderstorm with drizzle"
  },
  232: {
    icon: Icons.tstorms,
    altIcon: Icons.nt_tstorms,
    label: "thunderstorm with heavy drizzle"
  },
  300: {
    icon: Icons.chancerain,
    altIcon: Icons.nt_chancerain,
    label: "light intensity drizzle"
  },
  301: {
    icon: Icons.chancerain,
    altIcon: Icons.nt_chancerain,
    label: "drizzle"
  },
  302: {
    icon: Icons.chancerain,
    altIcon: Icons.nt_chancerain,
    label: "heavy intensity drizzle"
  },
  310: {
    icon: Icons.chancerain,
    altIcon: Icons.nt_chancerain,
    label: "light intensity drizzle rain"
  },
  311: {
    icon: Icons.chancerain,
    altIcon: Icons.nt_chancerain,
    label: "drizzle rain"
  },
  312: {
    icon: Icons.chancerain,
    altIcon: Icons.nt_chancerain,
    label: "heavy intensity drizzle rain"
  },
  313: {
    icon: Icons.chancerain,
    altIcon: Icons.nt_chancerain,
    label: "shower rain and drizzle"
  },
  314: {
    icon: Icons.chancerain,
    altIcon: Icons.nt_chancerain,
    label: "heavy shower rain and drizzle"
  },
  321: {
    icon: Icons.chancerain,
    altIcon: Icons.nt_chancerain,
    label: "shower drizzle"
  },
  500: { icon: Icons.rain, altIcon: Icons.nt_rain, label: "light rain" },
  501: { icon: Icons.rain, altIcon: Icons.nt_rain, label: "moderate rain" },
  502: {
    icon: Icons.rain,
    altIcon: Icons.nt_rain,
    label: "heavy intensity rain"
  },
  503: { icon: Icons.rain, altIcon: Icons.nt_rain, label: "very heavy rain" },
  504: { icon: Icons.rain, altIcon: Icons.nt_rain, label: "extreme rain" },
  511: {
    icon: Icons.chancesleet,
    altIcon: Icons.nt_chancesleet,
    label: "freezing rain"
  },
  520: {
    icon: Icons.rain,
    altIcon: Icons.nt_rain,
    label: "light intensity shower rain"
  },
  521: { icon: Icons.rain, altIcon: Icons.nt_rain, label: "shower rain" },
  522: {
    icon: Icons.rain,
    altIcon: Icons.nt_rain,
    label: "heavy intensity shower rain"
  },
  531: {
    icon: Icons.rain,
    altIcon: Icons.nt_rain,
    label: "ragged shower rain"
  },
  600: {
    icon: Icons.chancesnow,
    altIcon: Icons.nt_chancesnow,
    label: "light snow"
  },
  601: { icon: Icons.snow, altIcon: Icons.nt_snow, label: "Snow" },
  602: { icon: Icons.snow, altIcon: Icons.nt_snow, label: "Heavy snow" },
  611: { icon: Icons.sleet, altIcon: Icons.nt_sleet, label: "Sleet" },
  612: {
    icon: Icons.chancesleet,
    altIcon: Icons.nt_chancesleet,
    label: "Light shower sleet"
  },
  613: { icon: Icons.sleet, altIcon: Icons.nt_sleet, label: "Shower sleet" },
  615: {
    icon: Icons.flurries,
    altIcon: Icons.nt_flurries,
    label: "Light rain and snow"
  },
  616: {
    icon: Icons.flurries,
    altIcon: Icons.nt_flurries,
    label: "Rain and snow"
  },
  620: { icon: Icons.snow, altIcon: Icons.nt_snow, label: "Light shower snow" },
  621: { icon: Icons.snow, altIcon: Icons.nt_snow, label: "Shower snow" },
  622: { icon: Icons.snow, altIcon: Icons.nt_snow, label: "Heavy shower snow" },
  701: { icon: Icons.chancerain, altIcon: Icons.nt_chancerain, label: "mist" },
  711: { icon: Icons.hazy, altIcon: Icons.nt_hazy, label: "Smoke" },
  721: { icon: Icons.hazy, altIcon: Icons.nt_hazy, label: "Haze" },
  731: { icon: Icons.hazy, altIcon: Icons.nt_hazy, label: "sand/ dust whirls" },
  741: { icon: Icons.fog, altIcon: Icons.nt_fog, label: "fog" },
  751: { icon: Icons.unknown, altIcon: Icons.unknown, label: "sand" },
  761: { icon: Icons.unknown, altIcon: Icons.unknown, label: "dust" },
  762: { icon: Icons.unknown, altIcon: Icons.unknown, label: "volcanic ash" },
  771: { icon: Icons.unknown, altIcon: Icons.unknown, label: "squalls" },
  781: { icon: Icons.unknown, altIcon: Icons.unknown, label: "tornado" },
  800: { icon: Icons.sunny, altIcon: Icons.nt_sunny, label: "clear sky" },
  801: {
    icon: Icons.mostlysunny,
    altIcon: Icons.nt_mostlysunny,
    label: "few clouds: 11-25%"
  },
  802: {
    icon: Icons.partlycloudy,
    altIcon: Icons.nt_partlycloudy,
    label: "scattered clouds: 25-50%"
  },
  803: {
    icon: Icons.mostlycloudy,
    altIcon: Icons.nt_mostlycloudy,
    label: "broken clouds: 51-84%"
  },
  804: {
    icon: Icons.partlysunny,
    altIcon: Icons.nt_partlysunny,
    label: "overcast clouds: 85-100%"
  }
};

export default weatherIcons;
