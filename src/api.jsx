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

export const getLink = async ( linkName ) => {
   try {
      const incomingData = await fetchGoogleSheetsData({
         apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
         sheetId: import.meta.env.VITE_SPREADSHEET_ID,
         sheetsOptions: [{ id: 'Links' }],
      });

      let tempData = incomingData[0].data[0];

      return tempData[linkName];
      // const links = {};

      // linkNames.forEach(name => {
      //    links[name] = tempData[name];
      // });

      // console.log("Requested links: ", links);

      // return links;
   } catch (error) {
      console.error(error);
   }
}

// OLD FUNC
// export async function getFacilitatorPics() {
//    const { data, loading, error } = useGoogleSheets({
//       apiKey: API_KEY,
//       sheetId: SPREADSHEET_ID,
//       sheetsOptions: [{ id: 'Facilitator Pics' }]
//     });

//     return data
// }

// ACM-W EXAMPLE:
// import { fetchGoogleSheetsData } from 'google-sheets-mapper';

// export const getSheet = async ( sheetName ) => {
//    try {
//      return await fetchGoogleSheetsData({
//        apiKey: process.env.REACT_APP_SHEETS_API_KEY,
//        sheetId: process.env.REACT_APP_SHEET_ID,
//        sheetsOptions: [{ id: sheetName }],
//      });
//    } catch (error) {
//      console.error(error);
//      throw error; // Rethrow the error to handle it in the component
//    }
//  };
