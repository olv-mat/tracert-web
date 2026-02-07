import { Component } from '@angular/core';
import { ServicesCard } from './components/services-card/services-card';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServicesCard],
  templateUrl: './services.html',
  styleUrl: './services.sass',
})
export class Services {
  public services = [
    {
      icon: 'fa-file-alt',
      title: 'Automação de Documentos',
      description:
        'Use a tecnologia para ler, organizar e transformar documentos de forma rápida e automática.',
      useCases: [
        'Ler e extrair dados de arquivos PDF',
        'Criar relatórios e notas fiscais automaticamente',
        'Converter documentos para outros formatos',
      ],
    },
    {
      icon: 'fa-chart-line',
      title: 'Relatórios Inteligentes',
      description:
        'Entenda melhor os resultados do seu negócio com gráficos e números claros para tomar decisões.',
      useCases: [
        'Acompanhar indicadores personalizados',
        'Gerar relatórios automáticos',
        'Visualizar dados com painéis',
      ],
    },
    {
      icon: 'fa-globe',
      title: 'Automação Web',
      description:
        'Automatize tarefas repetitivas na web, como preencher formulários e buscar informações.',
      useCases: [
        'Coletar dados de sites automaticamente',
        'Preencher formulários automaticamente',
        'Integrações entre plataformas',
      ],
    },
  ];
}
