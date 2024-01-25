export function formateDogBreedName(breedName: string) {
  const DogName = breedName.split("_");

  const formattedName = DogName.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  ).join(" ");

  return formattedName;
}
