import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path:'products', component:ProductComponent, data: { title:'List Products' }},
  { path:'product/:id', component: ProductDetailComponent, data:{title:' Detail Product'} },
  { path:'product-add', component: ProductAddComponent, data: {title:' Add Product'}},
  { path:'product-edit', component: ProductEditComponent, data: {title:' Edit Product'}},

  {  path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductAddComponent,
    ProductDetailComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
