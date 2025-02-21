export const fetchCities = async (search: string) => {
  const cities = [
    { name: "Delhi", country: "India" },
    { name: "Mumbai", country: "India" },
    { name: "Bangalore", country: "India" },
    { name: "Chennai", country: "India" },
    { name: "Kolkata", country: "India" },
    { name: "Hyderabad", country: "India" },
    { name: "Pune", country: "India" },
    { name: "Ahmedabad", country: "India" },
    { name: "Jaipur", country: "India" },
    { name: "Lucknow", country: "India" },
  ];

  return cities
    .filter((city) => city.name.toLowerCase().includes(search.toLowerCase()))
    .map((city) => `${city.name}, ${city.country}`);
};
