import axios from 'axios'; 
import useGoogleSheets from 'use-google-sheets';

const SPREADSHEET_ID = '1gr-fnI5u6pvbTBpvnPQ5vKgabpvBKyDho8wCCk8C0yI'; 
const API_KEY = 'AIzaSyCa44AD3zAObDSuW6NFfPW_SrgO7pOH9G0'; 

//google spreadsheet api methods
export async function getFacilitatorPics() {
   const { data, loading, error } = useGoogleSheets({
      apiKey: API_KEY,
      sheetId: SPREADSHEET_ID,
      sheetsOptions: [{ id: 'Facilitator Pics' }]
    });

    return data
}
