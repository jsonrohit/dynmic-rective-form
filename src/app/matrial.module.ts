import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatTabsModule } from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


const MODULES = [
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatRippleModule,
    MatSlideToggleModule,
    ClipboardModule,
    MatMenuModule,
    MatRadioModule,
    MatBottomSheetModule,
    MatTabsModule,
    MatStepperModule,
    MatSnackBarModule,
    CdkStepperModule,
    MatToolbarModule,
    MatDividerModule,
    MatButtonToggleModule,
]

@NgModule({
    declarations: [],
    imports: [...MODULES],
    exports: [...MODULES],
    providers: [
        
    ]
})
export class MaterialModule { }