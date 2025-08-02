import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import clientPromise from '@/lib/mongodb';

function generateRSPLId() {
  const timestamp = Date.now().toString().slice(-8);
  return `BWL${timestamp}`;
}

export async function POST(request) {
  try {
    const data = await request.json();
    
    const {
      firstName,
      middleName,
      lastName,
      mobile,
      email,
      dateOfBirth,
      state,
      district,
      trialCity,
      playingRole,
      battingStyle,
      bowlingStyle,
      battingOrder,
      password,
      promoCode
    } = data;

    const client = await clientPromise;
    const users = client.db('rspl').collection('users');

    // Check if user already exists
    const existingUser = await users.findOne({ 
      $or: [{ email }, { mobile }] 
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists with this email or mobile number' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);
    
    // Generate unique RSPL ID
    const rsplId = generateRSPLId();

    // Create user
    const newUser = {
      firstName,
      middleName,
      lastName,
      mobile,
      email,
      dateOfBirth,
      state,
      district,
      trialCity,
      playingRole,
      battingStyle,
      bowlingStyle,
      battingOrder,
      password: hashedPassword,
      rsplId,
      promoCode: promoCode || null,
      paymentStatus: 'pending',
      registrationDate: new Date(),
    };

    const result = await users.insertOne(newUser);

    return NextResponse.json({
      success: true,
      rsplId,
      userId: result.insertedId,
      message: 'Registration successful. Redirecting to payment...'
    });

  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}