import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Ride from '@/models/Ride';

export async function GET() {
  try {
    await connectToDatabase();
    const rides = await Ride.find({}).populate('riderId driverId');
    return NextResponse.json(rides);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch rides' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    const body = await request.json();
    const ride = new Ride(body);
    await ride.save();
    return NextResponse.json(ride, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create ride' }, { status: 500 });
  }
}