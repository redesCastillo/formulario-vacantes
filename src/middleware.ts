import { NextResponse, NextRequest } from "next/server";
import { decrypt } from "./app/hooks";

export async function middleware(req: NextRequest) {
    const cookie = req.cookies;

    const sesionCookie = cookie.get("session");
    const sesion = sesionCookie?.value;

    const esValida = await decrypt(sesion); 

    if (esValida) return NextResponse.next()
    else return NextResponse.redirect(new URL("/iniciar-sesion", req.url));
}

export const config = {
    matcher: ['/registrar-vacante', '/vacantes-admin']
}