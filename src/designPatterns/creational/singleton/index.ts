import { SingletonData } from './index.types';

export class Singleton {
  private static instance: Singleton | null = null;
  private _data: SingletonData = { a: 0, b: 0 };

  private constructor(data?: SingletonData) {
    this._data = data || this.data;
  }

  public static getInstance(data?: SingletonData): Singleton {
    if (!this.instance) {
      this.instance = new Singleton(data);
    }

    return this.instance;
  }

  public get data(): SingletonData {
    return this._data;
  }
}