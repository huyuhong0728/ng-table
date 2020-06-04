import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { countReducer, changeData } from "./counter.reducer";
export const scoreboardFeatureKey = "newData";

@NgModule({
  declarations: [],
  imports: [StoreModule.forFeature(scoreboardFeatureKey, changeData)],
})
export class DataeModule {}
