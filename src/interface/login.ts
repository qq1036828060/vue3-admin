// 登录模块
export namespace Login {
  export interface ReqLoginForm {
    loginAccount: string;
    loginPassword: string;
    picCode: string;
    uuid: string;
  }
  export interface ResCaptcha {
    base64: string;
    uuid: string;
  }
  export interface ResLogin {
    agentNick: string;
    permissions: string[];
    role: string;
    roleName: string;
    showBrandText: string;
    token: string;
  }
  export interface ResAuthButtons {
    [key: string]: string[];
  }
}