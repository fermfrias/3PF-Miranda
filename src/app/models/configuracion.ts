import { CursoService } from "../services/curso.service"
import { UsuarioService } from "../usuario.service"

export interface Configuracion{
    urlAPI: string,
    servicios: {
        cursoService: CursoService,
        usuarioService: UsuarioService
    }
}