// /app/api/contact/route.ts

import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    console.log("Received submission:", body);

    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS!),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = process.env.SPREADSHEET_ID!;
    const range = "Sheet1!A2:C"; // Ensure headers are in row 1

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[name, email, message]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error writing to sheet:", error.message);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
