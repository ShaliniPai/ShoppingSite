import { NgModule } from '@angular/core';

import {
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    MatMenuModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSliderModule,
    MatTabsModule,
    MatInputModule,
    MatGridListModule,
    MatPaginatorModule,
    MatTableModule,
    MatProgressSpinnerModule

} from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatBadgeModule,
        MatCardModule,
        MatMenuModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatSliderModule,
        MatTabsModule,
        MatInputModule,
        MatGridListModule,
        MatPaginatorModule,
        MatTableModule,
        MatProgressSpinnerModule
    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatBadgeModule,
        MatCardModule,
        MatMenuModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatSliderModule,
        MatTabsModule,
        MatInputModule,
        MatGridListModule,
        MatPaginatorModule,
        MatTableModule,
        MatProgressSpinnerModule
    ]
  })
  export class MaterialModule { }
