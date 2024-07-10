import axios from 'axios';
import { fetchGoogleSheetsData } from 'google-sheets-mapper'

//google spreadsheet api methods
export const getSheet = async ( sheetName ) => {
   try {
      return await fetchGoogleSheetsData({
         apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
         sheetId: import.meta.env.VITE_SPREADSHEET_ID,
         sheetsOptions: [{ id: sheetName }],
      });
   } catch (error) {
      console.erorr(error);
      throw error;
   }
}

export const getLinks = async ( linkNames ) => {
   try {
      const incomingData = await fetchGoogleSheetsData({
         apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
         sheetId: import.meta.env.VITE_SPREADSHEET_ID,
         sheetsOptions: [{ id: 'Links' }],
      });

      let tempData = incomingData[0].data[0];
      const links = {};

      linkNames.forEach(name => {
         links[name] = tempData[name];
         console.log(name);
      });

      console.log("api.jsx#getLinks: requested links: ", links);

      return links;
   } catch (error) {
      console.error(error);
   }
}
