import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";
 
export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/checkout")) {
    // Obteniendo el token y asegurándose de que sea una cadena
    const token = req.cookies.get("token")?.value || "";

    try {
      await jose.jwtVerify(
        token,
        new TextEncoder().encode(process.env.JWT_SECRET_SEED || "")
      );
      // Si no se lanza un error, el JWT es válido
      return NextResponse.next();
    } catch (error) {
      console.error(`JWT inválido o no firmado`, { error });
      const { protocol, host, pathname } = req.nextUrl;
      // Redirigir al usuario a la página de inicio de sesión
      return NextResponse.redirect(
        `${protocol}//${host}/auth/login?previousPath=${pathname}`
      );
    }
  }
}

// Solo las rutas declaradas aquí ejecutarán el middleware
export const config = {
  matcher: ["/checkout/:path*"],
};
