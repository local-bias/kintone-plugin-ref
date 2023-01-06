import {
  App as DefaultApp,
  Record as DefaultRecord,
  Layout as DefaultLayout,
} from '@kintone/rest-api-client/lib/client/types';
import {
  OneOf as DefaultFieldProperty,
  Subtable as PropertySubtable,
  InSubtable as PropertyInsubtable,
} from '@kintone/rest-api-client/lib/KintoneFields/types/property';
import {
  OneOf as DefaultField,
  Creator as DefaultCreator,
  UserSelect as DefaultUserSelect,
  Subtable as DefaultSubtable,
  InSubtable as DefaultInSubtable,
} from '@kintone/rest-api-client/lib/KintoneFields/types/field';
import {
  OneOf as DefaultLayoutField,
  Label as DefaultLayoutLabel,
  Spacer as DefaultLayoutSpacer,
} from '@kintone/rest-api-client/lib/KintoneFields/types/fieldLayout';
import {
  Group as DefaultGroup,
  Row as DefaultRow,
} from '@kintone/rest-api-client/lib/KintoneFields/types/layout';

declare namespace kx {
  type App = DefaultApp;
  type Field = DefaultField;
  type FieldProperty = DefaultFieldProperty;
  type FieldPropertyType = FieldProperty['type'];

  type FieldProperties = Record<string, FieldProperty>;
  type FieldEntry = [string, FieldProperty];

  type RecordData = DefaultRecord;

  type Layout = DefaultLayout;
  type LayoutField = DefaultLayoutField;

  namespace field {
    type Creator = DefaultCreator;
    type UserSelect = DefaultUserSelect;
    type UserEntity = Creator['value'];
    type Subtable = DefaultSubtable<{
      [fieldCode: string]: DefaultInSubtable;
    }>;
  }

  namespace property {
    type Subtable = PropertySubtable<Record<string, PropertyInsubtable>>;
    type InSubtable = PropertyInsubtable;
  }

  namespace layout {
    type Label = DefaultLayoutLabel;
    type Spacer = DefaultLayoutSpacer;
    type Row = DefaultRow<LayoutField[]>;
    type Group = DefaultGroup<Row[]>;
  }

  namespace response {
    type App = { readonly app?: DefaultApp; readonly fields?: FieldProperties };
  }
}
