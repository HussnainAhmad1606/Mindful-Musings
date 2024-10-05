import { create } from 'zustand'

export const useUserStore = create((set) => ({

  Username: "Psycho",
  SetUsername: (newUsername:String) => set({Username:newUsername}),
  Email: "",
  SetEmail: (newEmail:String) => set({ Email:newEmail }),
  UserId: "",
  SetUserId: (newId:String) => set({ UserId:newId }),
  IsLogin: false,
  IsPremium: false,
  SetIsLogin: (newIsLogin:Boolean) => set({ IsLogin: newIsLogin }),
  SetIsPremium: (newIsPrem:Boolean) => set({ IsPremium: newIsPrem }),
  
  Attachment: "",
  SetAttachment: (newState:String) => set({ Attachment:newState}),
  UploadProgressCaption: "",
  SetUploadProgressCaption: (newState:String) => set({ UploadProgressCaption:newState}),
  AttachmentProgress: 0,
  SetAttachmentProgress: (newState:Number) => set({ AttachmentProgress:newState}),




}))