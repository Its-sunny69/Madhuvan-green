export const siteConfig = {
  name: "Madhuvan Greens",
  description:
    "Madhuvan Greens is a family restaurant in Badlapur serving vegetarian and non-vegetarian Indian favourites in a green, relaxed setting.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://madhuvangreens.com",
  locale: "en_IN",
  address: {
    streetAddress: "Raj Silverstone, New Panvel Highway, near McDonald's, Katrap",
    addressLocality: "Badlapur",
    addressRegion: "Maharashtra",
    postalCode: "421503",
    addressCountry: "IN",
  },
  geo: {
    latitude: 19.174214803456123,
    longitude: 73.22170092345144,
  },
  mapsUrl:
    "https://www.google.com/maps/place/Madhuvan+Greens+Restaurant/@19.1742148,73.2217009,17z",
} as const;

export const absoluteUrl = (path = "/") => new URL(path, siteConfig.url).toString();
