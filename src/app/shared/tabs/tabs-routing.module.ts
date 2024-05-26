import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'main',
        loadChildren: () => import('../../pages/main/main.module').then(m => m.MainPageModule)
      },
      {
        path: 'card',
        loadChildren: () => import('../../pages/card/card.module').then(m => m.CardPageModule)
      },
      {
        path: 'notification',
        loadChildren: () => import('../../pages/notification/notification.module').then(m => m.NotificationPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../../pages/profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'strawberry',
        loadChildren: () => import('../../pages/strawberry/strawberry.module').then(m => m.StrawberryPageModule)
      },
      {
        path: 'order',
        loadChildren: () => import('../../pages/order/order.module').then(m => m.OrderPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/main',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
