import dbConnect from '@/utils/dbConn';
import Contact from '@/models/contact';
import { NextResponse } from 'next/server';

export async function POST(req, res){
    try{
        const body = await req.json();
        const connect = await dbConnect();
        console.log('Connected Successfully at host:',
            connect.connection.host, 'database:',
            connect.connection.name)

        // Creating data into database
        await Contact.create(body);

        return NextResponse.json(
            {message: "Message send successfully"},
            {status: 200}
        )

    }catch(e){
        return NextResponse.json(
            {message: "Server error, please try again"},
            {status: 500}
        )

    }
}