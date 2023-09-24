import AsyncStorageLib from "@react-native-async-storage/async-storage";

type KeyType = "auth";

export class StorageHelper {
  static async setKey(key: KeyType, value: any) {
    try {
      await AsyncStorageLib.setItem(`@${key}`, JSON.stringify(value));
    } catch (error) {}
  }

  static async getKey(key: KeyType) {
    try {
      const jsonValue = await AsyncStorageLib.getItem(`@${key}`);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {}
  }

  static async deleteKey(key: KeyType) {
    try {
      await AsyncStorageLib.removeItem(`@${key}`);
    } catch (error) {}
  }
}
