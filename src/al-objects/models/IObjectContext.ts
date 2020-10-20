import { IVariable } from "./IVariable";
import { IProcedure } from "./IProcedure";
import { IFieldsContainer } from "./IFieldsContainer";
import { ILayout } from "./ILayout";
import { IActionContainer } from "./IActionContainer";
import { IDataSet } from "./IDataSet";
import { ISchema } from "./ISchema";
import { IViewContainer } from "./IViewContainer";
import { ISegment } from "./ISegment";

export interface IObjectContext {
  views?: IViewContainer;
  schema?: ISchema;
  dataSet?: IDataSet;
  actions?: IActionContainer;
  layout?: ILayout;
  header: string;
  footer: string;
  fields?: IFieldsContainer;
  variables: Array<IVariable>;
  procedures: Array<IProcedure>;
  triggers: Array<IProcedure>;
  segments: Array<ISegment>;
  properties: string[];
}