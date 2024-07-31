import axios from "axios";
import { ICountry } from "../../models/countries";

const BASE_URL = 'https://restcountries.com/v3.1';

export async function getCountry(country: string | undefined) {
    if (!country) return;
    try {
        return await axios<ICountry[]>({baseURL: BASE_URL, url: `/name/${country}`})
    } catch (error) {        
        console.log(error);
    }
    
}
export async function getAllCountries() {
    try {
        return await axios<ICountry[]>({baseURL: BASE_URL, url: `/all`})
    } catch (error) {        
        console.log(error);
    }
    
}