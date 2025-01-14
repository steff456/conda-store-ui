import React from "react";

export interface IPreferences {
  apiUrl: string;
  authMethod: "cookie" | "token";
  authToken: string;
  loginUrl: string;
  styleType: string;
  showAuthButton: boolean;
  logoutUrl: string;
}

const { condaStoreConfig = {} } =
  typeof window !== "undefined" && (window as any);

export const prefDefault: Readonly<IPreferences> = {
  apiUrl:
    process.env.REACT_APP_API_URL ??
    condaStoreConfig.REACT_APP_API_URL ??
    "http://localhost:5000/conda-store/",

  authMethod:
    (process.env.REACT_APP_AUTH_METHOD as IPreferences["authMethod"]) ??
    (condaStoreConfig.REACT_APP_AUTH_METHOD as IPreferences["authMethod"]) ??
    "cookie",

  authToken:
    process.env.REACT_APP_AUTH_TOKEN ??
    condaStoreConfig.REACT_APP_AUTH_TOKEN ??
    "",

  loginUrl:
    process.env.REACT_APP_LOGIN_PAGE_URL ??
    condaStoreConfig.REACT_APP_LOGIN_PAGE_URL ??
    "http://localhost:5000/conda-store/login?next=",

  styleType:
    process.env.REACT_APP_STYLE_TYPE ??
    condaStoreConfig.REACT_APP_STYLE_TYPE ??
    "grayscale",

  showAuthButton: process.env.REACT_APP_SHOW_AUTH_BUTTON
    ? JSON.parse(process.env.REACT_APP_SHOW_AUTH_BUTTON)
    : condaStoreConfig !== undefined &&
      condaStoreConfig.REACT_APP_SHOW_AUTH_BUTTON !== undefined
    ? JSON.parse(condaStoreConfig.REACT_APP_SHOW_AUTH_BUTTON)
    : true,

  logoutUrl:
    process.env.REACT_APP_LOGOUT_PAGE_URL ??
    condaStoreConfig.REACT_APP_LOGOUT_PAGE_URL ??
    "http://localhost:5000/conda-store/logout?next=/"
};

export class Preferences implements IPreferences {
  constructor(pref: IPreferences = prefDefault) {
    this.set(pref);
  }

  get apiUrl() {
    return this._apiUrl;
  }

  get authMethod() {
    return this._authMethod;
  }

  get authToken() {
    return this._authToken;
  }

  get loginUrl() {
    return this._loginUrl;
  }

  get styleType() {
    return this._styleType;
  }

  get showAuthButton() {
    return this._showAuthButton;
  }

  get logoutUrl() {
    return this._logoutUrl;
  }

  set(pref: IPreferences) {
    this._apiUrl = pref.apiUrl;
    this._authMethod = pref.authMethod;
    this._authToken = pref.authToken;
    this._loginUrl = pref.loginUrl;
    this._styleType = pref.styleType;
    this._showAuthButton = pref.showAuthButton;
    this._logoutUrl = pref.logoutUrl;
  }

  private _apiUrl: IPreferences["apiUrl"];
  private _authMethod: IPreferences["authMethod"];
  private _authToken: IPreferences["authToken"];
  private _loginUrl: IPreferences["loginUrl"];
  private _styleType: IPreferences["styleType"];
  private _showAuthButton: IPreferences["showAuthButton"];
  private _logoutUrl: IPreferences["logoutUrl"];
}

export const prefGlobal = new Preferences();
export const PrefContext = React.createContext<IPreferences>(prefDefault);
