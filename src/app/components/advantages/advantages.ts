import { Component } from '@angular/core';
import { AdvantagesCard } from './components/advantages-card/advantages-card';

@Component({
  selector: 'app-advantages',
  imports: [AdvantagesCard],
  templateUrl: './advantages.html',
  styleUrl: './advantages.sass',
})
export class Advantages {
  public advantages = [
    {
      icon: 'fa-clock',
      title: 'Ganhe Tempo',
      description: 'Tenha sistemas que organizam processos e reduzem tarefas manuais no dia a dia.',
    },
    {
      icon: 'fa-dollar-sign',
      title: 'Reduza Custos',
      description: 'Soluções simples evitam retrabalho e ajudam a diminuir gastos operacionais.',
    },
    {
      icon: 'fa-shield-alt',
      title: 'Mais Confiabilidade',
      description:
        'Sistemas feitos sob medida reduzem erros e aumentam a segurança das informações.',
    },
    {
      icon: 'fa-bolt',
      title: 'Mais Produtividade',
      description: 'Ferramentas personalizadas para melhorar a eficiência da sua equipe.',
    },
  ];
}
