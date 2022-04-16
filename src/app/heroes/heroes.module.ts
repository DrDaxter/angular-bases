import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";


@NgModule({
    declarations:[//las declaraciones son los componentes que tendra este modulo
        HeroeComponent,
        ListadoComponent
    ],
    exports:[//los exports son componentes que se utilizarán fuera de este modulo
        ListadoComponent
    ],
    imports:[//irán otros modulos que se utilizaran posteriormente
        CommonModule
    ]
})
export class HeroesModule{

}