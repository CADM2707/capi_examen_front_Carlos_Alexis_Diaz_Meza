
export interface Usuario {
    id: number;
    nombre: string;
    email: string;
    email_verified_at: Date;
    created_at: Date;
    updated_at: Date;
    fecha_nacimento: Date;
    edad: number;
    domicilio: string;
    numero_exterior: string;
    colonia: string;
    cp: number;
    ciudad: string;
}