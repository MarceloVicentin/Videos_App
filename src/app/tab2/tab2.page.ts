import { IListaSeries } from './../models/ISerieAPI.model';
import { SerieService } from './../services/serie.service';
import { Dados2Service } from './../services/dados2.service';
import { ISerie } from '../models/ISerie.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  titulo = 'Séries';

  listaVideos: ISerie[] = [
    {
      nome: 'Loki (2021)',
      lancamento: '15/04/2021',
      duracao: '52 min',
      classificacao: 82,
      cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ukR0MkCQE6IylzBPd61txJi1L3E.jpg',
      generos: ['Action & Adventure', 'Sci-Fi & Fantasy'],
      pagina: '/loki'
    },
    {
      nome: 'The Flash (2014)',
      lancamento: '10/04/2014',
      duracao: '44m',
      classificacao: 77,
      cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg',
      generos: ['Drama', 'Sci-Fi & Fantasy' ],
      pagina: '/flash'
    },
    {
      nome: 'Falcão e o Soldado Invernal (2021)',
      lancamento: '10/04/2021',
      duracao: '50m',
      classificacao: 78,
      cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oF9njYCN6lBdrsi6wfulcxTggvn.jpg',
      generos: [' Sci-Fi & Fantasy', 'Action & Adventure', 'Drama', 'War & Politics' ],
      pagina: '/falcao'
    },
    {
      nome: 'Superman e Lois (2021)',
      lancamento: '20/03/2021',
      duracao: '1h 4m',
      classificacao: 83,
      cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vlv1gn98GqMnKHLSh0dNciqGfBl.jpg',
      generos: ['Sci-Fi & Fantasy', 'Action & Adventure', 'Drama' ],
      pagina: '/superman'
    },
    {
      nome: ' Fear the Walking Dead (2015) ',
      lancamento: '23/08/2015',
      duracao: '43m',
      classificacao: 77,
      cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vlv1gn98GqMnKHLSh0dNciqGfBl.jpg',
      generos: ['Action & Adventure', 'Drama' ],
      pagina: '/fear'
    }
  ];

  listaSeries: IListaSeries;

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dados2Service: Dados2Service,
    public serieService: SerieService,
    public route: Router) {}

    buscarSeries(evento: any){
      console.log(evento.target.value);
      const busca = evento.target.value;
      if(busca && busca.trim() !== ''){
        this.serieService.buscarSeries(busca).subscribe(dados=>{
          console.log(dados);
          this.listaSeries = dados;
        });
      }

    }

    exibirSerie(serie: ISerie){
      this.dados2Service.guardarDados('serie', serie);
      this.route.navigateByUrl('/dados-serie');
    }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja realmente favoritar a série?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
            handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'SIM, Favoritar',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Série adicionada aos favoritos.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

}
