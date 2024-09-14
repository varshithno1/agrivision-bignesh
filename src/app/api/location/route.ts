import { NextRequest, NextResponse } from 'next/server';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const lat = searchParams.get('lat');
    const lon = searchParams.get('lon');
   await delay(3000)

    if (!lat || !lon) {
      return NextResponse.json({ error: 'Missing latitude or longitude' });
    }

    try {
      // Replace with your actual weather API key and URL
      const apiKey = process.env.WEATHERAPI_API_KEY
      const weatherResponse = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}`
      );

      if (!weatherResponse.ok) {
        throw new Error('Weather API error');
      }

      const weatherData = await weatherResponse.json();
      console.log(weatherData)
      return NextResponse.json(weatherData);
    } catch (error) {
      return NextResponse.json({ error: 'Failed to fetch weather data' });
    }
}

export async function POST(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const lat = searchParams.get('lat');
    const lon = searchParams.get('lon');
   await delay(3000)

    if (!lat || !lon) {
      return NextResponse.json({ error: 'Missing latitude or longitude' });
    }

    try {
      // Replace with your actual weather API key and URL
      const apiKey = process.env.WEATHERAPI_API_KEY
      const weatherResponse = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}`
      );

      if (!weatherResponse.ok) {
        throw new Error('Weather API error');
      }

      const weatherData = await weatherResponse.json();
      console.log(weatherData)
      return NextResponse.json(weatherData);
    } catch (error) {
      return NextResponse.json({ error: 'Failed to fetch weather data' });
    }
}
