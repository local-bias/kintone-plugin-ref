declare namespace kintone {
  namespace plugin {
    /** プラグインがアプリ単位で保存する設定情報🔌 */
    type Storage = {
      conditions: Condition[];
    };

    /** プラグインの制御単位の設定情報🔌 */
    type Condition = {
      spaceId: string;
      keyField: string;
      refferenceAppId: string | number;
      refferenceKeyField: string;
      refferenceField: string;
      width: number;
    };
  }
}
