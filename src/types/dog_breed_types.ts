export interface DogBreed {
  predicted_breed: string;
  breed_details: BreedDetails;
}

interface BreedDetails {
  breed_name: string;
  detail: string;
  facts: string[];
}
