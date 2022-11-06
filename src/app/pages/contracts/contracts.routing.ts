import { Routes } from '@angular/router';
import { EditContract } from './edit-contract/edit-contract.component';
import { ListContractsComponent } from './list-contracts/list-contracts.component';
import { ContractDetailComponent } from './contract-detail/contract-detail.component';


export const VehiclesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list-contracts',
        component: ListContractsComponent,
        data: {
          title: 'Contratos',
          urls: [
            { title: 'Contratos', url: '' },
            { title: 'Listagem' }
          ]
        }
      },
      {
        path: 'edit-contract/:id',
        component: EditContract,
        data: {
          title: 'Contratos',
          urls: [
            { title: 'Contratos', url: '' },
            { title: 'Edição' }
          ]
        }
      },
      {
        path: 'add-contract',
        component: EditContract,
        data: {
          title: 'Contratos',
          urls: [
            { title: 'Contratos', url: '' },
            { title: 'Cadastro' }
          ]
        }
      },
      {
        path: 'contract-detail',
        component: ContractDetailComponent,
        data: {
          title: 'Contratos',
          urls: [
            { title: 'Contratos', url: '' },
            { title: 'Informações' }
          ]
        }
      },
    ]
  }
];
