import { google } from "googleapis";

export default async function handler(req,res) {
    const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });

    const sheets = google.sheets({ version: 'v4', auth });
    const range = `Services!A1:D5`;

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID,
      range,
    });

    const data = response.data;
    let faqs = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID,
      range: `FAQs!A2:B15`,
    });
    data.faqs = faqs.data.values.map(item=> {
      return {question: item[0], answer: item[1]}
    })
    res.json(data)
}