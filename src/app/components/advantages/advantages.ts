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
      title: 'Economizar Tempo',
      description:
        'Automatize tarefas e fluxos de trabalho repetitivos, poupando o tempo da sua equipe.',
    },
    {
      icon: 'fa-dollar-sign',
      title: 'Reduzir Custos',
      description:
        'Reduza as despesas operacionais simplificando processos e minimizando o trabalho manual.',
    },
    {
      icon: 'fa-shield-alt',
      title: 'Eliminar Erros',
      description:
        'Elimine os erros humanos de seus processos com automações precisas e confiáveis.',
    },
    {
      icon: 'fa-bolt',
      title: 'Produtividade',
      description:
        'Aumente a produção e a eficiência com soluções adaptadas às suas necessidades específicas.',
    },
  ];
}
